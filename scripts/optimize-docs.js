// scripts/optimize-docs.js

import matter from "gray-matter";
import fg from "fast-glob";
import chalk from "chalk";
import fs from "fs";
const erpDict = JSON.parse(fs.readFileSync(new URL("./erp-dictionary.json", import.meta.url), "utf-8"));


const DOCS_DIRS = ["docs", "i18"];
const ERP_NAME = "ERPName"; // cambia con il nome del tuo ERP

// Legge se l'utente ha passato il flag --dry-run
const isDryRun = process.argv.includes("--dry-run");

function classifyPriority(filepath, content) {
  const lower = content.toLowerCase();
  if (filepath.includes("index") || filepath.includes("overview") || lower.includes("introduzione")) return "Alta";
  if (lower.includes("fattura") || lower.includes("ordine") || lower.includes("cliente") || lower.includes("come fare"))
    return "Alta";
  if (lower.includes("configurazione") || lower.includes("parametri")) return "Media";
  if (filepath.includes("draft") || filepath.includes("archivio")) return "Bassa";
  return "Media";
}

function generateMetadata(file, content) {
  const lines = content.split("\n");
  const firstHeading = lines.find(line => line.startsWith("#"));
  const title = firstHeading
    ? firstHeading.replace(/^#+\s*/, "").trim()
    : file.split("/").pop().replace(".md", "").replace(/-/g, " ");

  const shortTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const description = `Guida: ${shortTitle} in ${ERP_NAME}. Scopri come usare questa funzione passo per passo.`;

  // ✳️ Estrazione con dizionario ERP
  const text = content.toLowerCase();
  const relevant = erpDict.keywords.filter(k => text.includes(k.toLowerCase()));

  // Se non trova nulla, fallback con estrazione automatica
  const fallback =
    content
      .toLowerCase()
      .match(/\b[a-zàèéìòù0-9]{5,}\b/g)
      ?.slice(0, 10) || [];

  const keywords = relevant.length ? relevant : fallback;

  return { title: shortTitle, description, keywords };
}

async function optimizeDocs() {
  console.log(
    chalk.cyan(
      `🧠 Ottimizzazione ERP Docs con dizionario specifico... ${
        isDryRun ? chalk.yellow("(modalità DRY-RUN)") : ""
      }\n`
    )
  );

  const files = await fg(DOCS_DIRS.map(dir => `${dir}/**/*.md`));
  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const parsed = matter(raw);
    const priority = classifyPriority(file, parsed.content);
    let changed = false;

    const metadata = generateMetadata(file, parsed.content);

    const changes = {};
    if (!parsed.data.title) {
      changes.title = metadata.title;
      changed = true;
    }
    if (!parsed.data.description) {
      changes.description = metadata.description;
      changed = true;
    }
    if (!parsed.data.keywords) {
      changes.keywords = metadata.keywords;
      changed = true;
    }

    if (changed) {
      updated++;
      if (isDryRun) {
        console.log(chalk.yellow(`🧩 [DRY-RUN] Modificherei ${file}:`));
        console.log(chalk.gray(JSON.stringify(changes, null, 2)));
      } else {
        // Scrive effettivamente i cambiamenti
        const newFile = matter.stringify(parsed.content, { ...parsed.data, ...changes });
        await fs.writeFile(file, newFile);
        console.log(chalk.green(`✅ Aggiornato: ${file}`));
      }
    } else {
      skipped++;
    }
  }

  console.log(chalk.yellow(`\n📊 Totale file analizzati: ${files.length}`));
  console.log(
    isDryRun
      ? chalk.blue(`🔍 File che verrebbero aggiornati: ${updated}`)
      : chalk.green(`✅ File aggiornati: ${updated}`)
  );
  console.log(chalk.gray(`⏭️  File già completi: ${skipped}`));
}

optimizeDocs().catch(err => console.error(err));
