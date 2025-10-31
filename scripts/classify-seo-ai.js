/**
 * optimize-docs.js
 * 
 * Traducător automat pentru documentația ERP (IT -> RO)
 * Folosește fișierul 'erp-dictionary.json' pentru a traduce textul din documente Markdown.
 * 
 * Utilizare:
 *   node optimize-docs.js
 */

import fs from 'fs';
import path from 'path';

// === CONFIG ===
const DICTIONARY_PATH = 'C:\\Users\\Rodica\\Documents\\my-erp-demo\\my-erp-site\\erp-dictionary.json';
const SOURCE_PATH = path.resolve('docs/logistics/items/stocks-visualization.md');
const TARGET_PATH = path.resolve('i18n/ro/docusaurus-plugin-content-docs/current/logistics/items/stocks-visualization.md');

function loadDictionary() {
  if (!fs.existsSync(DICTIONARY_PATH)) {
    console.error(`❌ Dicționarul nu a fost găsit la: ${DICTIONARY_PATH}`);
    process.exit(1);
  }
  try {
    const raw = fs.readFileSync(DICTIONARY_PATH, 'utf-8');
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) throw new Error('Format invalid — trebuie să fie un array cu "it" și "ro".');
    const dict = data.filter(e => e.it && e.ro).map(e => ({ it: e.it.trim(), ro: e.ro.trim() }));
    console.log(`📘 Dicționar încărcat (${dict.length} termeni)`);
    return dict;
  } catch (err) {
    console.error('❌ Eroare la citirea dicționarului:', err.message);
    process.exit(1);
  }
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function translateText(text, dictionary) {
  let translated = text;
  let count = 0;
  for (const { it, ro } of dictionary) {
    const pattern = new RegExp(`\\b${escapeRegExp(it)}\\b`, 'gi');
    const before = translated;
    translated = translated.replace(pattern, ro);
    if (before !== translated) count++;
  }
  console.log(`📝 Termeni traduşi: ${count}`);
  return translated;
}

function main() {
  if (!fs.existsSync(SOURCE_PATH)) {
    console.error(`❌ Fișierul sursă nu există: ${SOURCE_PATH}`);
    process.exit(1);
  }

  const dictionary = loadDictionary();
  const inputText = fs.readFileSync(SOURCE_PATH, 'utf-8');
  const translated = translateText(inputText, dictionary);

  fs.mkdirSync(path.dirname(TARGET_PATH), { recursive: true });
  fs.writeFileSync(TARGET_PATH, translated, 'utf-8');

  console.log(`✅ Traducerea a fost salvată în:\n   ${TARGET_PATH}`);
}

main();
