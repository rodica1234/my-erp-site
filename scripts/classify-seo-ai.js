#!/usr/bin/env node

/**
 * Classificazione SEO/AI per file Markdown di Docusaurus.
 * Analizza docs/ e i18/ e genera un report CSV con priorità.
 *
 * Uso:
 *   node scripts/classify-seo-ai.js
 *   node scripts/classify-seo-ai.js --lang=ro
 *   node scripts/classify-seo-ai.js --folder=produzione
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";
import { marked } from "marked";
import { parseArgs } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- Config ----
const DOCS_PATH = "docs";
const I18_PATH = "i18";
const OUTPUT_DIR = "reports";
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

const { values: args } = parseArgs({
  options: {
    folder: { type: "string" },
    lang: { type: "string" },
  },
});

const TARGET_FOLDER = args.folder || "";
const TARGET_LANG = args.lang || null;

// ---- Helper functions ----
function readMarkdownFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(readMarkdownFiles(res));
    } else if (entry.name.endsWith(".md")) {
      results.push(res);
    }
  }
  return results;
}

function analyzeMarkdown(content, filePath) {
  const { data, content: body } = matter(content);
  const tokens = marked.lexer(body);

  const headings = tokens.filter(t => t.type === "heading").length;
  const links = tokens.filter(t => t.type === "link").length;
  const wordCount = body.split(/\s+/).length;

  const hasTitle = !!data.title;
  const hasDesc = !!data.description;
  const hasKeywords = !!data.keywords;

  let score = 0;
  if (hasTitle) score += 20;
  if (hasDesc) score += 20;
  if (hasKeywords) score += 20;
  if (headings > 2) score += 10;
  if (links > 3) score += 10;
  if (wordCount > 300) score += 20;

  let priority =
    score >= 80 ? "Alta" : score >= 50 ? "Media" : "Bassa";

  return {
    file: filePath,
    title: data.title || "(manca)",
    description: data.description ? "✅" : "❌",
    keywords: data.keywords ? "✅" : "❌",
    headings,
    links,
    words: wordCount,
    score,
    priority,
  };
}

function toCSV(data) {
  const headers = [
    "file",
    "title",
    "description",
    "keywords",
    "headings",
    "links",
    "words",
    "score",
    "priority",
  ];
  const lines = [headers.join(",")];
  data.forEach(row =>
    lines.push(
      headers.map(h => JSON.stringify(row[h] ?? "")).join(",")
    )
  );
  return lines.join("\n");
}

// ---- MAIN ----
(async () => {
  console.log("📊 Analisi SEO/AI in corso...");

  const targets = [];

  // lingua sorgente
  if (!TARGET_LANG || TARGET_LANG === "it") {
    const docsRoot = path.join(DOCS_PATH, TARGET_FOLDER);
    targets.push(...readMarkdownFiles(docsRoot));
  }

  // lingue localizzate
  if (TARGET_LANG) {
    const i18Docs = path.join(I18_PATH, TARGET_LANG, "docs", TARGET_FOLDER);
    targets.push(...readMarkdownFiles(i18Docs));
  } else {
    if (fs.existsSync(I18_PATH)) {
      const langs = fs.readdirSync(I18_PATH);
      for (const lang of langs) {
        const langPath = path.join(I18_PATH, lang, "docs", TARGET_FOLDER);
        targets.push(...readMarkdownFiles(langPath));
      }
    }
  }

  if (!targets.length) {
    console.log("❌ Nessun file trovato per la ricerca specificata.");
    process.exit(0);
  }

  const results = targets.map(file => {
    const content = fs.readFileSync(file, "utf8");
    return analyzeMarkdown(content, file);
  });

  const csv = toCSV(results);
  const now = new Date().toISOString().split("T")[0];
  const fileName = `${OUTPUT_DIR}/seo-ai-classification-${now}.csv`;

  fs.writeFileSync(fileName, csv);
  console.log(`✅ Report generato: ${fileName}`);

  const summary = results.reduce(
    (acc, r) => {
      acc[r.priority]++;
      return acc;
    },
    { Alta: 0, Media: 0, Bassa: 0 }
  );

  console.log("\n📈 Sommario:");
  console.table(summary);
})();
