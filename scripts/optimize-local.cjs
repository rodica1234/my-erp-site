#!/usr/bin/env node
/**
 * Ottimizzatore Markdown SEO/AI offline per Docusaurus
 * Autore: Fluentis Docs – versione 2025
 */

const fs = require("fs-extra");
const path = require("path");
const matter = require("gray-matter");
const inquirer = require("inquirer");
const chalk = require("chalk");

console.log(chalk.cyanBright("\n🚀 Ottimizzatore Markdown Fluentis SEO/AI – modalità offline\n"));

async function main() {
  // Richiede file sorgente
  const { filePath } = await inquirer.prompt([
    {
      type: "input",
      name: "filePath",
      message: "Percorso del file .md da ottimizzare:",
      default: "docs/logistics/items/stocks-visualization.md",
    },
  ]);

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red(`❌ File non trovato: ${filePath}`));
    return;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  // --- 1️⃣ Metadati di base ---------------------------------------------------
  const data = {
    title: parsed.data.title || inferTitle(parsed.content) || "Titolo mancante",
    description:
      parsed.data.description ||
      `Guida completa su ${parsed.data.title || inferTitle(parsed.content)} in Fluentis ERP.`,
    keywords:
      parsed.data.keywords ||
      ["fluentis", "ERP", "gestione", "magazzino", "giacenze", "manuale"],
    tags: parsed.data.tags || ["fluentis", "documentazione"],
    sidebar_label: parsed.data.sidebar_label || parsed.data.title || "Pagina",
    sidebar_position: parsed.data.sidebar_position || 1,
    image: parsed.data.image || "/img/docs/default.png",
    canonical_url:
      parsed.data.canonical_url ||
      `https://docs.fluentis.com/${filePath.replace(/\\/g, "/").replace(/^docs\//, "")}`,
    last_update: parsed.data.last_update || {
      author: "Fluentis Docs Team",
      date: new Date().toISOString().split("T")[0],
    },
    related: parsed.data.related || [],
    summary:
      parsed.data.summary ||
      `Questa pagina descrive ${parsed.data.title || inferTitle(parsed.content)} nel contesto Fluentis.`,
    schema: "TechArticle",
  };

  // --- 2️⃣ Contenuto ----------------------------------------------------------
  let content = parsed.content;

  // Normalizza spazi e heading
  content = content
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^###\s*(?=[A-Z])/gm, "### ")
    .replace(/^##\s*(?=[A-Z])/gm, "## ")
    .replace(/^#\s*(?=[A-Z])/gm, "# ");

  // Blocchi importanti
  content = content.replace(
    /(A cosa serve|Nota importante|Importante:)/gi,
    ":::important\n$1"
  );

  // Chiudi blocco importante se manca terminatore
  if (content.includes(":::important") && !content.includes(":::\n"))
    content = content.replace(/(:::)important[^\n]*$/m, "$&\n:::\n");

  // Trasforma sezioni “Procedimento” in liste numerate
  content = content.replace(
    /(\*Procedimento\*|Procedura|Passaggi):?\s*\n(- .+\n)+/g,
    (m) => {
      let lines = m
        .split("\n")
        .map((l) => l.replace(/^- /, ""))
        .filter((l) => l.trim());
      lines = lines.map((l, i) => `${i + 1}. ${l}`);
      return `#### Procedura\n${lines.join("\n")}\n`;
    }
  );

  // Aggiungi riepilogo se manca
  if (!/Riepilogo|Punti chiave/gi.test(content)) {
    content +=
      "\n---\n\n## 🔍 Riepilogo chiave\n\n- Punti principali della sezione.\n- Sintesi operativa.\n- Collegamenti alle sezioni correlate.\n";
  }

  // --- 3️⃣ Scrive file --------------------------------------------------------
  const output = matter.stringify(content.trim(), data);
  fs.writeFileSync(filePath, output, "utf8");

  console.log(chalk.green(`\n✅ File ottimizzato con successo: ${filePath}\n`));
}

// --- Funzioni utili -----------------------------------------------------------
function inferTitle(text) {
  const match = text.match(/^#\s+(.+)/m);
  return match ? match[1].trim() : null;
}

main();
