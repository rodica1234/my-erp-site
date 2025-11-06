// scripts/optimize-docs.js
import fs from "fs-extra";
import matter from "gray-matter";
import fg from "fast-glob";
import chalk from "chalk";

const DOCS_DIRS = ["docs", "i18"]; // cartelle da analizzare
const ERP_NAME = "ERPName"; // cambia con il nome del tuo ERP

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

  const keywords = Array.from(
    new Set(
      content
        .toLowerCase()
        .match(/\b[a-zàèéìòù0-9]{5,}\b/g)
        ?.slice(0, 15) || []
    )
  );

  return { title: shortTitle, description, keywords };
}

async function optimizeDocs() {
  console.log(chalk.cyan("🧠 Ottimizzazione automatica dei file Markdown ERP...\n"));

  const files = await fg(DOCS_DIRS.map(dir => `${dir}/**/*.md`));
  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const parsed = matter(raw);
    const priority = classifyPriority(file, parsed.content);
    let changed = false;

    if (!parsed.data.title) {
      parsed.data.title = generateMetadata(file, parsed.content).title;
      changed = true;
    }
    if (!parsed.data.description) {
      parsed.data.description = generateMetadata(file, parsed.content).description;
      changed = true;
    }
    if (!parsed.data.keywords) {
      parsed.data.keywords = generateMetadata(file, parsed.content).keywords;
      changed = true;
    }

    if (changed) {
      const newFile = matter.stringify(parsed.content, parsed.data);
      await fs.writeFile(file, newFile);
      console.log(chalk.green(`✅ Aggiornato: ${file}`));
      updated++;
    } else {
      skipped++;
    }
  }

  console.log(chalk.yellow(`\n📊 Totale file analizzati: ${files.length}`));
  console.log(chalk.green(`✅ File aggiornati: ${updated}`));
  console.log(chalk.gray(`⏭️  File già completi: ${skipped}`));
}

optimizeDocs().catch(err => console.error(err));
