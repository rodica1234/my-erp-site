#!/usr/bin/env node

/**
 * Ottimizzatore Markdown per Docusaurus multilingua (Fluentis)
 * SEO + AI Ready – senza API esterne
 */

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import yaml from "js-yaml";

// === CONFIGURAZIONE ===
const DOCS_DIR = "docs";

console.log(chalk.cyan("\n🔍 Ottimizzatore Markdown Fluentis SEO/AI\n"));

// === FUNZIONI UTILI ===
function listMarkdownFiles(dir) {
  const files = [];
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
    } else if (item.endsWith(".md") || item.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
}

// === FRONTMATTER INTELLIGENTE ===
function ensureFrontmatter(content, filePath) {
  const defaultMeta = {
    description: "",
    keywords: [],
    tags: [],
    image: "",
    canonical_url: "",
    last_update: {
      author: "Fluentis Docs Team",
      date: new Date().toISOString().split("T")[0],
    },
    related: [],
    summary: "",
    schema: "TechArticle",
  };

  const match = content.match(/^---\s*[\s\S]*?---/);
  let frontmatter = {};
  if (match) {
    try {
      frontmatter = yaml.load(match[0].replace(/^---\s*|\s*---$/g, ""));
    } catch (err) {
      console.warn(chalk.yellow(`⚠️ Errore parsing frontmatter in ${filePath}:`), err);
    }
  }

  const updated = { ...defaultMeta, ...frontmatter };

  // Metadati dinamici
  if (!updated.description && updated.title) {
    updated.description = `Guida completa a ${updated.title} in Fluentis ERP.`;
  }
  if ((!updated.keywords || updated.keywords.length === 0) && updated.title) {
    updated.keywords = [
      updated.title.toLowerCase(),
      "Fluentis ERP",
      "magazzino",
      "logistica",
      "gestione",
    ];
  }
  if ((!updated.tags || updated.tags.length === 0) && updated.title) {
    updated.tags = ["ERP", "logistica", "magazzino"];
  }
  if (!updated.summary && updated.title) {
    updated.summary = `${updated.title} consente di analizzare, filtrare e gestire i dati di magazzino in modo efficiente.`;
  }

  const newFront = yaml.dump(updated, { lineWidth: 80 }).trim();
  const newBlock = `---\n${newFront}\n---`;

  if (match) {
    content = content.replace(match[0], newBlock);
  } else {
    content = `${newBlock}\n\n${content}`;
  }

  return content;
}

// === PULIZIA E FORMATTATTING MARKDOWN ===
function cleanMarkdown(content) {
  // Elimina doppi spazi e linee vuote in eccesso
  content = content.replace(/[ \t]+$/gm, "");
  content = content.replace(/\n{3,}/g, "\n\n");

  // Evita duplicazione blocchi :::important
  content = content.replace(/:::important\s+:::important/g, ":::important");

  // Aggiunge heading principale se manca
  if (!/^# /m.test(content)) {
    const titleMatch = content.match(/title:\s*(.+)/);
    if (titleMatch) {
      content = `# ${titleMatch[1].trim()}\n\n${content}`;
    }
  }

  return content;
}

// === STRUTTURA GERARCHICA ===
function enforceStructure(content) {
  // Normalizza livelli H1-H3
  content = content.replace(/^## (?!#)/gm, "## ");
  content = content.replace(/^### (?!#)/gm, "### ");

  // Assicura che i titoli H2 non siano seguiti da troppi ### consecutivi
  content = content.replace(/####+/g, "###");

  return content;
}

// === AGGIUNTA LINK INTERNI CONTESTUALI ===
function addInternalLinks(content) {
  // Esempio semplice: collega a sezioni comuni del manuale Fluentis
  if (!content.includes("/docs/logistics/warehouse/location/item-location-map")) {
    content +=
      "\n\n👉 Consulta anche la sezione [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map) per approfondire la gestione delle ubicazioni.";
  }

  return content;
}

// === RIEPILOGO FINALE ===
function addSemanticSummary(content) {
  if (!content.includes("## Riepilogo semantico")) {
    content += `
---

## Riepilogo semantico

**Punti chiave:**
- Analisi multi-livello delle giacenze per articolo, magazzino, ubicazione e progetto.  
- Possibilità di generare registrazioni di magazzino.  
- Filtri avanzati per controllo e gestione inventario.  
- Integrazione con la Mappa ubicazioni per articolo.  
- Azzeramento massivo per correggere anomalie.  

---`;
  }
  return content;
}

// === PROCESSO DI OTTIMIZZAZIONE ===
async function optimizeFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = ensureFrontmatter(content, filePath);
  content = cleanMarkdown(content);
  content = enforceStructure(content);
  content = addInternalLinks(content);
  content = addSemanticSummary(content);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(chalk.green(`✅ File ottimizzato: ${filePath}`));
}

// === MAIN ===
async function main() {
  const files = listMarkdownFiles(DOCS_DIR);
  if (files.length === 0) {
    console.log(chalk.yellow("⚠️ Nessun file Markdown trovato."));
    return;
  }

  console.log(`Trovati ${files.length} file da ottimizzare.\n`);

  const { file } = await inquirer.prompt([
    {
      type: "list",
      name: "file",
      message: "Seleziona il file Markdown da ottimizzare:",
      choices: files,
    },
  ]);

  const { confirm } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: `Vuoi procedere con l’ottimizzazione di:\n${file}?`,
      default: true,
    },
  ]);

  if (!confirm) {
    console.log(chalk.gray("Operazione annullata."));
    return;
  }

  try {
    await optimizeFile(file);
  } catch (err) {
    console.error(chalk.red("❌ Errore durante l'ottimizzazione:"), err);
  }
}

main();
