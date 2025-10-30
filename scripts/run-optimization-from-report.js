#!/usr/bin/env node
/**
 * Seleziona i file ad alta priorità dal report SEO/AI
 * e lancia optimize-docs.js solo su quelli.
 *
 * Uso:
 *   node scripts/run-optimization-from-report.js
 *   node scripts/run-optimization-from-report.js --priority=Alta
 *   node scripts/run-optimization-from-report.js --priority=Media --dry-run
 */

import fs from "fs";
import path from "path";
import { parseArgs } from "node:util";
import { spawnSync } from "child_process";

const { values: args } = parseArgs({
  options: {
    priority: { type: "string", default: "Alta" },
    dryRun: { type: "boolean", default: false },
    report: { type: "string" },
  },
});

const priority = args.priority;
const dryRun = args.dryRun;
const reportPath =
  args.report ||
  fs
    .readdirSync("reports")
    .filter(f => f.startsWith("seo-ai-classification") && f.endsWith(".csv"))
    .sort()
    .reverse()[0]; // usa l’ultimo report generato

if (!reportPath) {
  console.error("❌ Nessun report CSV trovato in ./reports/");
  process.exit(1);
}

const csvPath = path.join("reports", reportPath);
const lines = fs.readFileSync(csvPath, "utf8").split("\n").filter(Boolean);
const headers = lines.shift().split(",");

const fileIndex = headers.indexOf("file");
const priorityIndex = headers.indexOf("priority");

const selectedFiles = lines
  .map(line => line.split(","))
  .filter(cols => cols[priorityIndex]?.includes(priority))
  .map(cols => cols[fileIndex].replace(/^"|"$/g, ""));

if (selectedFiles.length === 0) {
  console.log(`⚠️ Nessun file con priorità "${priority}" trovato nel report.`);
  process.exit(0);
}

console.log(`📄 File con priorità ${priority}: ${selectedFiles.length}`);
selectedFiles.slice(0, 10).forEach(f => console.log(" •", f));
if (selectedFiles.length > 10) console.log(" ...");

console.log(
  `\n🚀 Avvio ottimizzazione (${dryRun ? "modalità simulata --dry-run" : "reale"})...`
);

for (const file of selectedFiles) {
  const result = spawnSync(
    "node",
    ["scripts/optimize-docs.js", "--file", file, ...(dryRun ? ["--dry-run"] : [])],
    { stdio: "inherit" }
  );
  if (result.error) console.error("Errore su", file, ":", result.error.message);
}

console.log("\n✅ Ottimizzazione completata.");
