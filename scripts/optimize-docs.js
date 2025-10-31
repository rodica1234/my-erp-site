#!/usr/bin/env node
/**
 * 🌍 Traducere automată + optimizare Docusaurus Markdown
 * - Traduce conținut și frontmatter (MyMemory API)
 * - Sparge textul și frontmatter-ul în blocuri mici (~300 caractere)
 * - Acceptă parametri: --folder, --file, --lang, --dry-run
 * - Adaugă autoTranslated: true în frontmatter
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseArgs } from "node:util";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_PATH = "docs";
const I18_PATH = "i18n";
const DICTIONARY_PATH = "scripts/erp-dictionary.json";
const LOG_FILE = "translation-log.txt";

// CLI args
const { values: args } = parseArgs({
  options: {
    file: { type: "string" },
    folder: { type: "string" },
    lang: { type: "string" },
    dryRun: { type: "boolean", default: false },
  },
});

const TARGET_FILE = args.file;
const TARGET_FOLDER = args.folder || "";
const TARGET_LANG = args.lang;
const DRY_RUN = args.dryRun;

// --- Utilities ---
function readMarkdownFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(readMarkdownFiles(res));
    else if (entry.name.endsWith(".md")) results.push(res);
  }
  return results;
}

function loadDictionary() {
  if (!fs.existsSync(DICTIONARY_PATH)) return [];
  return JSON.parse(fs.readFileSync(DICTIONARY_PATH, "utf8"));
}

function normalizeTextWithDictionary(text, dict, lang) {
  let updated = text;
  for (const row of dict) {
    const it = row.Italiano?.trim();
    const target = row.Romanian?.trim();
    if (!it || !target) continue;
    const regex = new RegExp(`\\b${it}\\b`, "gi");
    updated = updated.replace(regex, target);
  }
  return updated;
}

// --- Split text in small blocks (~300 chars) ---
function splitTextBlocks(text, maxLength = 300) {
  const blocks = [];
  let current = "";
  const lines = text.split("\n");
  for (const line of lines) {
    if ((current + "\n" + line).length > maxLength) {
      if (current.trim()) blocks.push(current);
      current = line;
    } else {
      current += (current ? "\n" : "") + line;
    }
  }
  if (current.trim()) blocks.push(current);
  return blocks;
}

// --- Translate block with MyMemory ---
async function translateTextMyMemory(text, targetLang = "ro") {
  if (!text.trim()) return text;
  try {
    const url =
      "https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(text) +
      "&langpair=it|" +
      targetLang;
    const res = await fetch(url);
    const data = await res.json();
    if (data?.responseData?.translatedText) return data.responseData.translatedText;
    return `[UNTRANSLATED → ${targetLang.toUpperCase()}]\n\n${text}`;
  } catch (err) {
    console.warn("⚠️ Errore traduzione:", err.message);
    return `[UNTRANSLATED → ${targetLang.toUpperCase()}]\n\n${text}`;
  }
}

// --- Translate frontmatter values ---
async function translateFrontmatter(data, lang) {
  const newData = { ...data };
  for (const key of ["title", "description"]) {
    if (data[key]) {
      const blocks = splitTextBlocks(data[key], 200);
      let translated = "";
      for (const b of blocks) {
        translated += await translateTextMyMemory(b, lang);
      }
      newData[key] = translated;
    }
  }
  // keywords: translate each keyword separately
  if (data.keywords && Array.isArray(data.keywords)) {
    const translatedKeywords = [];
    for (const kw of data.keywords) {
      const t = await translateTextMyMemory(kw, lang);
      translatedKeywords.push(t);
    }
    newData.keywords = translatedKeywords;
  }
  return newData;
}

// --- Main optimize function ---
async function optimizeMarkdown(filePath, dict, lang) {
  const original = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(original);

  // Skip if already translated
  if (data.autoTranslated) return { newFile: original, original };

  let translatedContent = content;
  let newFrontmatter = { ...data };

  if (lang && lang !== "it") {
    console.log(`🌐 Traducendo ${filePath} in ${lang.toUpperCase()}...`);

    // Translate content in blocks
    const blocks = splitTextBlocks(content, 300);
    const translatedBlocks = [];
    for (const b of blocks) {
      const t = await translateTextMyMemory(b, lang);
      translatedBlocks.push(t);
    }
    translatedContent = translatedBlocks.join("\n\n");

    // Translate frontmatter
    newFrontmatter = await translateFrontmatter(newFrontmatter, lang);
  }

  // Normalize ERP terms
  translatedContent = normalizeTextWithDictionary(translatedContent, dict, lang);

  // Mark as autoTranslated
  newFrontmatter.autoTranslated = lang && lang !== "it" ? true : false;

  const newFile = matter.stringify(translatedContent, newFrontmatter);
  return { newFile, original };
}

// --- MAIN ---
(async () => {
  const dict = loadDictionary();
  let targets = [];

  if (TARGET_FILE) {
    targets = [TARGET_FILE];
  } else {
    const roots = [];

    if (!TARGET_LANG || TARGET_LANG === "it")
      roots.push(path.join(DOCS_PATH, TARGET_FOLDER));

    if (TARGET_LANG)
      roots.push(
        path.join(
          I18_PATH,
          TARGET_LANG,
          "docusaurus-plugin-content-docs",
          "current",
          TARGET_FOLDER
        )
      );

    for (const root of roots) {
      targets = targets.concat(readMarkdownFiles(root));
    }
  }

  if (!targets.length) {
    console.log("❌ Nessun file trovato da ottimizzare.");
    process.exit(0);
  }

  if (!DRY_RUN) fs.writeFileSync(LOG_FILE, "", "utf8");

  console.log(
    `🚀 Traducere + optimizare pornită pentru ${targets.length} fișiere ${DRY_RUN ? "(dry-run)" : ""}`
  );

  for (const file of targets) {
    const { newFile, original } = await optimizeMarkdown(file, dict, TARGET_LANG);

    if (newFile !== original) {
      if (DRY_RUN) {
        console.log(`🟡 Preview: ${file}`);
        console.log(newFile.substring(0, 300) + "\n----------------------------------");
      } else {
        fs.writeFileSync(file, newFile, "utf8");
        console.log(`✅ Tradus și optimizat: ${file}`);
        fs.appendFileSync(LOG_FILE, `${file}\n`, "utf8");
      }
    }
  }

  console.log("🏁 Traducere completă!");
})();
