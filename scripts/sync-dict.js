import xlsx from 'xlsx';
import fs from 'fs';

// ✅ percorso corretto al tuo file Excel
const workbook = xlsx.readFile('./erp-dictionary.xlsx');

const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

const languageOrder = ["Italiano", "Romeno", "Inglese USA", "Croato", "Spagnolo Colombia"];

const dictionary = rows.map(row => {
  const entry = {};
  for (const lang of languageOrder) {
    entry[lang] = row[lang] || "";
  }
  for (const key in row) {
    if (!entry.hasOwnProperty(key)) entry[key] = row[key];
  }
  return entry;
});

fs.writeFileSync('erp-dictionary.json', JSON.stringify(dictionary, null, 2), 'utf8');
console.log(`✅ Dizionario aggiornato con ${dictionary.length} voci`);
