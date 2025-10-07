import os

# Configurație proiect
project_name = "my-erp-docs"
docs = [
    {
        "id": "intro",
        "title": {
            "it": "Introduzione al ERP",
            "en": "ERP Introduction",
            "fr": "Introduction au ERP",
            "ro": "Introducere în ERP"
        },
        "description": {
            "it": "Guida completa all'utilizzo del nostro software ERP.",
            "en": "Complete guide to using our ERP software.",
            "fr": "Guide complète pour utiliser notre logiciel ERP.",
            "ro": "Ghid complet pentru utilizarea software-ului nostru ERP."
        },
        "content": {
            "it": "Benvenuto nella guida ufficiale del nostro ERP...",
            "en": "Welcome to the official ERP guide...",
            "fr": "Bienvenue dans le guide officiel de notre ERP...",
            "ro": "Bine ați venit în ghidul oficial ERP..."
        },
        "keywords": ["ERP", "software gestionale", "contabilità", "inventario", "vendite"],
        "tags": ["ERP", "Tutorial"]
    }
]

modules = [
    {
        "id": "accounting",
        "title": {
            "it": "Modulo Contabilità",
            "en": "Accounting Module",
            "fr": "Module Comptabilité",
            "ro": "Modul Contabilitate"
        },
        "description": {
            "it": "Gestione completa della contabilità.",
            "en": "Complete accounting management.",
            "fr": "Gestion complète de la comptabilité.",
            "ro": "Management complet al contabilității."
        },
        "content": {
            "it": "Dettagli sul modulo contabilità...",
            "en": "Details about the accounting module...",
            "fr": "Détails sur le module comptabilité...",
            "ro": "Detalii despre modulul de contabilitate..."
        },
        "keywords": ["contabilità", "ERP"],
        "tags": ["Contabilità", "ERP"]
    },
    {
        "id": "sales",
        "title": {
            "it": "Modulo Vendite",
            "en": "Sales Module",
            "fr": "Module Ventes",
            "ro": "Modul Vânzări"
        },
        "description": {
            "it": "Gestione completa delle vendite.",
            "en": "Complete sales management.",
            "fr": "Gestion complète des ventes.",
            "ro": "Management complet al vânzărilor."
        },
        "content": {
            "it": "Dettagli sul modulo vendite...",
            "en": "Details about the sales module...",
            "fr": "Détails sur le module ventes...",
            "ro": "Detalii despre modulul de vânzări..."
        },
        "keywords": ["vendite", "ERP"],
        "tags": ["Vendite", "ERP"]
    }
]

country_specific = [
    {
        "country": "italy",
        "module_id": "accounting",
        "title": {
            "it": "Contabilità Italia",
            "en": "Accounting Italy",
            "fr": "Comptabilité Italie",
            "ro": "Contabilitate Italia"
        },
        "description": {
            "it": "Procedure contabili specifiche per l'Italia.",
            "en": "Accounting procedures specific to Italy.",
            "fr": "Procédures comptables spécifiques à l'Italie.",
            "ro": "Proceduri contabile specifice pentru Italia."
        },
        "content": {
            "it": "Dettagli sulle regole contabili italiane...",
            "en": "Details about Italian accounting rules...",
            "fr": "Détails sur les règles comptables italiennes...",
            "ro": "Detalii despre regulile contabile din Italia..."
        }
    },
    {
        "country": "switzerland",
        "module_id": "accounting",
        "title": {
            "it": "Contabilità Svizzera",
            "en": "Accounting Switzerland",
            "fr": "Comptabilité Suisse",
            "ro": "Contabilitate Elveția"
        },
        "description": {
            "it": "Procedure contabili specifiche per la Svizzera.",
            "en": "Accounting procedures specific to Switzerland.",
            "fr": "Procédures comptables spécifiques à la Suisse.",
            "ro": "Proceduri contabile specifice pentru Elveția."
        },
        "content": {
            "it": "Dettagli sulle regole contabili svizzere...",
            "en": "Details about Swiss accounting rules...",
            "fr": "Détails sur les règles comptables suisses...",
            "ro": "Detalii despre regulile contabile din Elveția..."
        }
    }
]

langs = ["it", "en", "fr", "ro"]

# Functie generare frontmatter
def generate_frontmatter(doc, lang):
    # Dacă e country-specific, construim un id unic
    if 'module_id' in doc and 'country' in doc:
        doc_id = f"{doc['module_id']}-{doc['country']}"
    else:
        doc_id = doc['id']

    # Keywords și tags generice dacă nu există
    keywords = doc.get('keywords', ["ERP"])
    tags = doc.get('tags', ["ERP"])

    fm = f"""---
id: {doc_id}
title: "{doc['title'][lang]}"
description: "{doc['description'][lang]}"
keywords: {keywords}
tags: {tags}
lastUpdated: 2025-10-02
image: "/img/{doc_id}.png"
seo:
  title: "{doc['title'][lang]} - Guida ERP"
  description: "{doc['description'][lang]}"
ai:
  summary: "{doc['content'][lang][:150]}"
---
"""
    return fm

# Creare foldere
os.makedirs(project_name, exist_ok=True)
docs_path = os.path.join(project_name, "docs")
os.makedirs(docs_path, exist_ok=True)

for lang in langs:
    i18n_path = os.path.join(project_name, "i18n", lang, "docusaurus-plugin-content-docs/current")
    os.makedirs(i18n_path, exist_ok=True)

# Generare docs principale
for doc in docs:
    # Limba baza IT
    file_path = os.path.join(docs_path, f"{doc['id']}.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(generate_frontmatter(doc, "it"))
        f.write(f"\n{doc['content']['it']}\n")
    # Traduceri
    for lang in langs[1:]:
        file_path = os.path.join(project_name, "i18n", lang, "docusaurus-plugin-content-docs/current", f"{doc['id']}.md")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(generate_frontmatter(doc, lang))
            f.write(f"\n{doc['content'][lang]}\n")

# Generare modules
modules_path = os.path.join(docs_path, "modules")
os.makedirs(modules_path, exist_ok=True)

for module in modules:
    file_path = os.path.join(modules_path, f"{module['id']}.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(generate_frontmatter(module, "it"))
        f.write(f"\n{module['content']['it']}\n")
    for lang in langs[1:]:
        file_path = os.path.join(project_name, "i18n", lang, "docusaurus-plugin-content-docs/current/modules", f"{module['id']}.md")
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(generate_frontmatter(module, lang))
            f.write(f"\n{module['content'][lang]}\n")

# Generare country-specific
country_path = os.path.join(docs_path, "country-specific")
os.makedirs(country_path, exist_ok=True)

for cs in country_specific:
    cs_folder = os.path.join(country_path, cs["country"])
    os.makedirs(cs_folder, exist_ok=True)
    file_path = os.path.join(cs_folder, f"{cs['module_id']}-{cs['country']}.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(generate_frontmatter(cs, "it"))
        f.write(f"\n{cs['content']['it']}\n")
    for lang in langs[1:]:
        cs_lang_folder = os.path.join(project_name, "i18n", lang, "docusaurus-plugin-content-docs/current/country-specific", cs["country"])
        os.makedirs(cs_lang_folder, exist_ok=True)
        file_path = os.path.join(cs_lang_folder, f"{cs['module_id']}-{cs['country']}.md")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(generate_frontmatter(cs, lang))
            f.write(f"\n{cs['content'][lang]}\n")

print("Proiectul ERP demo a fost generat cu succes!")
