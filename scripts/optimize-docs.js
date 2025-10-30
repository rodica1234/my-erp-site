#!/usr/bin/env node

/**
 * Ottimizza i file Markdown di Docusaurus per SEO/AI:
 * - Aggiunge o aggiorna metadati (title, description, keywords)
 * - Normalizza la terminologia ERP usando il dizionario
 * - Evidenzia le traduzioni mancanti con **grassetto** + testo sorgente italiano tra parentesi
 * - Supporta --dry-run per mostrare i cambiamenti senza salvarli
 * - Supporta --file per ottimizzare un singolo file
 * - Supporta --folder e --lang per lavorare per moduli e lingue
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseArgs } from "node:util";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Config ---
const DOCS_PATH = "docs";
const I18_PATH = "i18";
const DICTIONARY_PATH = "scripts/erp-dictionary.json";

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

// --- Utils ---
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
  if (!fs.existsSync(DICTIONARY_PATH)) {
    console.warn("⚠️ Dizionario ERP non trovato:", DICTIONARY_PATH);
    return [];
  }
  return JSON.parse(fs.readFileSync(DICTIONARY_PATH, "utf8"));
}

function normalizeTextWithDictionary(text, dict, lang) {
  let updated = text;
  for (const row of dict) {
    const it = row.Italiano?.trim();
    const target =
      lang === "en"
        ? row.English?.trim()
        : lang === "ro"
        ? row.Romanian?.trim()
        : null;
    if (!it || !target) continue;

    // regex per sostituzione "sicura"
    const regex = new RegExp(`\\b${it}\\b`, "gi");
    updated = updated.replace(regex, target);
  }
  return updated;
}

function autoTranslateMissingTerms(text, lang, dict) {
  // traduzioni approssimative per termini non nel dizionario
  // (qui puoi integrare un servizio o una libreria di traduzione)
  return text.replace(/\*\*(.*?)\*\*/g, (_, term) => {
    return `**${term}** (${term})`;
  });
}

// --- Main optimizer ---
function optimizeMarkdown(filePath, dict, lang) {
  const original = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(original);

  const title = data.title || path.basename(filePath, ".md").replace(/-/g, " ");
  const description =
    data.description ||
    `Guida ${lang ? lang.toUpperCase() : "IT"} per ${title}`;
  const keywords = data.keywords || [title.split(" ")[0], "ERP", "Fluentis"];

  // normalizza la terminologia
  let updatedContent = normalizeTextWithDictionary(content, dict, lang);

  // evidenzia termini mancanti
  updatedContent = autoTranslateMissingTerms(updatedContent, lang, dict);

  const newFrontmatter = {
    ...data,
    title,
    description,
    keywords,
  };

  const newFile = matter.stringify(updatedContent, newFrontmatter);

  return { newFile, original };
}

// --- MAIN ---
(async () => {
  const dict = loadDictionary();

  let targets = [];

  if (TARGET_FILE) {
    targets = [TARGET_FILE];
  } else {
    // lingua sorgente o target
    const roots = [];
    if (!TARGET_LANG || TARGET_LANG === "it")
      roots.push(path.join(DOCS_PATH, TARGET_FOLDER));
    if (TARGET_LANG)
      roots.push(path.join(I18_PATH, TARGET_LANG, "docs", TARGET_FOLDER));
    else if (fs.existsSync(I18_PATH)) {
      for (const lang of fs.readdirSync(I18_PATH)) {
        roots.push(path.join(I18_PATH, lang, "docs", TARGET_FOLDER));
      }
    }
    for (const root of roots) {
      targets = targets.concat(readMarkdownFiles(root));
    }
  }

  if (!targets.length) {
    console.log("❌ Nessun file trovato da ottimizzare.");
    process.exit(0);
  }

  console.log(
    `🚀 Ottimizzazione avviata per ${targets.length} file ${
      DRY_RUN ? "(modalità simulata --dry-run)" : ""
    }`
  );

  for (const file of targets) {
    const { newFile, original } = optimizeMarkdown(file, dict, TARGET_LANG);

    if (newFile !== original) {
      if (DRY_RUN) {
        console.log(`🟡 Anteprima modifiche: ${file}`);
        console.log(
          "--------------------------------------------\n" +
            newFile.substring(0, 400) +
            "\n--------------------------------------------"
        );
      } else {
        fs.writeFileSync(file, newFile);
        console.log(`✅ File aggiornato: ${file}`);
      }
    }
  }

  console.log("🏁 Operazione completata.");
})();
