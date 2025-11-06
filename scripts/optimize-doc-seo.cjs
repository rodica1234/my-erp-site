#!/usr/bin/env node

/**
 * Ottimizzatore Markdown AI/SEO per documentazione Docusaurus multilingua.
 * Implementa le 7 regole SEO + AI richieste.
 * Autore: ChatGPT GPT-5
 */

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");
const matter = require("gray-matter");
const slugify = require("slugify");

function logInfo(msg) {
  console.log(chalk.cyan(msg));
}
function logSuccess(msg) {
  console.log(chalk.green(msg));
}
function logWarn(msg) {
  console.log(chalk.yellow(msg));
}
function logError(msg) {
  console.log(chalk.red(msg));
}

// 🔍 Utility per pulire e ottimizzare testo
function cleanMarkdown(text) {
  return text
    .replace(/\r/g, "")
    .replace(/\t/g, "  ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/ +$/gm, "")
    .trim();
}

// 🔠 Genera titolo leggibile da filename
function toTitle(name) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// 🧠 Crea metadati SEO completi
function generateMeta(filePath, parsed) {
  const filename = path.basename(filePath, ".md");
  const title = parsed.data.title || toTitle(filename);
  const canonical = `https://fluentis-docs.example.com/${slugify(filename)}`;

  return {
    title,
    description:
      parsed.data.description ||
      `Guida completa su ${title} in Fluentis ERP: utilizzo, configurazione e funzionalità.`,
    keywords: parsed.data.keywords || [
      "Fluentis ERP",
      "manuale",
      "documentazione",
      "magazzino",
      title,
    ],
    schema: parsed.data.schema || "Article",
    tags: parsed.data.tags || ["fluentis", "erp", "ai", "seo", "docs"],
    sidebar_label: parsed.data.sidebar_label || title,
    sidebar_position: parsed.data.sidebar_position || 1,
    last_update: new Date().toISOString().split("T")[0],
    related: parsed.data.related || [],
    summary:
      parsed.data.summary ||
      `Questo documento descrive la sezione ${title} e spiega come utilizzarla nel gestionale Fluentis.`,
    image: parsed.data.image || "/img/docs/default.png",
    canonical_url: parsed.data.canonical_url || canonical,
  };
}

// 🔗 Crea link interni contestuali a partire dai titoli H2/H3
function createInternalLinks(content) {
  const headings = [...content.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]);
  if (!headings.length) return "";

  return (
    "\n\n### Collegamenti rapidi\n\n" +
    headings.map((h) => `- [${h}](#${slugify(h, { lower: true })})`).join("\n")
  );
}

// 🔢 Trasforma liste in numerate solo se “procedurali”
function normalizeLists(content) {
  return content
    .split("\n")
    .map((line, i, arr) => {
      if (/^[-*]\s/.test(line)) {
        const prev = arr[i - 1] || "";
        if (/procedimento|passaggi|step|azioni/i.test(prev)) {
          const index = arr.slice(0, i).filter((l) => /^[-*]\s/.test(l)).length + 1;
          return `${index}. ${line.replace(/^[-*]\s*/, "")}`;
        }
      }
      return line;
    })
    .join("\n");
}

// 📘 Inserisce blocchi :::important se rileva parole chiave
function insertImportantBlocks(content) {
  if (!content.includes(":::important")) {
    const firstParagraph = content.split("\n\n")[0];
    if (/fondamentale|importante|attenzione|nota/i.test(firstParagraph)) {
      return (
        `:::important\n${firstParagraph}\n:::\n\n` +
        content.replace(firstParagraph, "").trim()
      );
    }
  }
  return content;
}

// 📚 Ricostruisce la struttura gerarchica H1/H2/H3
function rebuildHeadings(content, meta) {
  let output = content;

  // Assicura che ci sia un H1 coerente con title
  if (!/^#\s+/.test(output)) {
    output = `# ${meta.title}\n\n${output}`;
  }

  // Mantiene ordine coerente H1 > H2 > H3
  output = output
    .replace(/^######/gm, "###")
    .replace(/^#####/gm, "###")
    .replace(/^####/gm, "###")
    .replace(/^###/gm, "###")
    .replace(/^##/gm, "##")
    .replace(/^#/gm, "#");

  return output;
}

// 📄 Aggiunge riepilogo finale
function addRiepilogo(content) {
  if (/##\s*Riepilogo/i.test(content)) return content;

  const riepilogo = `
## Riepilogo

- Contenuti ottimizzati per motori di ricerca e modelli AI.
- Struttura coerente e leggibile con titoli gerarchici.
- Link interni automatici per migliorare la navigazione.
- Liste numerate solo per sezioni procedurali.
- Aggiornamento automatico dei metadati SEO e AI.
`;
  return content + "\n" + riepilogo.trim() + "\n";
}

// 🧩 Funzione principale
async function main() {
  logInfo("🚀 Ottimizzatore Markdown SEO/AI per Docusaurus\n");

  const { filePath } = await inquirer.prompt([
    {
      type: "input",
      name: "filePath",
      message: "📄 Inserisci il percorso del file Markdown da ottimizzare:",
      validate: (input) =>
        fs.existsSync(input) && input.endsWith(".md")
          ? true
          : "Il file non esiste o non è un .md",
    },
  ]);

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const meta = generateMeta(filePath, parsed);

  let content = cleanMarkdown(parsed.content);

  content = rebuildHeadings(content, meta);
  content = insertImportantBlocks(content);
  content = normalizeLists(content);

  // Inserisci collegamenti interni
  if (!/### Collegamenti rapidi/.test(content)) {
    content += createInternalLinks(content);
  }

  content = addRiepilogo(content);

  // Ricostruisci file finale
  const final = matter.stringify(content, meta);

  fs.writeFileSync(filePath, final, "utf8");
  logSuccess(`✅ File ottimizzato con successo:\n   ${filePath}`);
}

main().catch((err) => {
  logError("❌ Errore durante l’esecuzione:");
  console.error(err);
});
