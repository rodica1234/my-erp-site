---
title: Visualizzazione giacenze
description: Guida completa alla visualizzazione delle giacenze di magazzino in Fluentis ERP, con dettagli su filtri, raggruppamenti, generazione registrazioni e azzeramento giacenze.
keywords: giacenze, magazzino, Fluentis ERP, gestione magazzino, registrazioni magazzino, ubicazioni, lotti, commesse produzione
schema: TechArticle
tags: [ERP, Magazzino, Fluentis, Logistica, Giacenze]
sidebar_label: Visualizzazione giacenze
sidebar_position: 2
last_update: 05-11-2025
author: "Fluentis Team"
date: 05-11-2025
related: 
  - /docs/logistics/warehouse/item-location-map
summary: Panoramica e guida operativa per la gestione delle giacenze di magazzino in Fluentis ERP, con focus su raggruppamenti, filtri e generazione di registrazioni.
image: /images/docs/visualizzazione-giacenze.png
canonical_url: /docs/logistics/warehouse/stock-visualization
---


# Visualizzazione giacenze

:::important
A cosa serve  
L'introduzione alla visualizzazione delle giacenze<!--visualizzazione giacenze--> di Fluentis ERP<!--Fluentis ERP--> costituisce un elemento fondamentale per una gestione efficiente del magazzino<!--magazzino-->. Questa funzionalità consente agli operatori di estrapolare facilmente le giacenze<!--giacenze-->, monitorare e confrontare la giacenza fisica con quella logica, raggruppare i dati per articolo<!--articolo-->, magazzino<!--magazzino--> o altri criteri e generare registrazioni<!--registrazioni--> di magazzino<!--magazzino--> quando necessario.
:::

La form<!--form--> consente all'operatore di estrapolare facilmente le giacenze<!--giacenze--> di magazzino<!--magazzino--> per controllare il magazzino<!--magazzino--> e la corrispondenza tra giacenza fisica e logica. Attraverso i filtri è possibile effettuare ricerche mirate secondo vari parametri e visualizzare i risultati nelle griglie dedicate. I risultati possono essere raggruppati per facilitare la lettura dei dati. Dalla finestra è inoltre possibile inserire rapidamente registrazioni<!--registrazioni--> di magazzino<!--magazzino-->.

## Articolo
I risultati vengono raggruppati per articolo<!--articolo--> e comprendono i seguenti valori:
- Classe
- Codice articolo
- Descrizione
- Seconda descrizione
- Variante (eventuale)
- Descrizione variante (eventuale)
- Quantità
- Unità di misura

## Magazzino
I risultati vengono raggruppati per magazzino<!--magazzino--> e includono, oltre ai valori del tab articolo<!--articolo-->:
- Magazzino<!--magazzino-->
- Descrizione magazzino<!--magazzino-->

## Ubicazione
I risultati vengono raggruppati per ubicazione<!--ubicazione--> e includono, oltre ai valori del tab articolo<!--articolo-->:
- Ubicazione<!--ubicazione-->
- Descrizione ubicazione<!--ubicazione-->
- Stato ubicazione<!--ubicazione-->

## Progetti
I risultati vengono raggruppati per progetto<!--progetto--> e includono, oltre ai valori del tab articolo<!--articolo-->:
- Numero progetto<!--progetto-->
- Anno progetto<!--progetto-->
- Descrizione progetto<!--progetto-->

## Cliente/Fornitore
I risultati vengono raggruppati per cliente/fornitore<!--cliente/fornitore--> (presenti nelle registrazioni<!--registrazioni--> di magazzino<!--magazzino-->) e comprendono:
- Cliente/Fornitore<!--cliente/fornitore-->
- Altri valori del tab articolo<!--articolo-->

## Lotto
Per articoli<!--articolo--> gestiti a lotti<!--lotti-->, i risultati vengono raggruppati per lotto<!--lotti--> e includono:
- Magazzino<!--magazzino-->
- Lotto<!--lotti-->
- Quantità disponibile
- Altri valori del tab articolo<!--articolo-->

## Commessa produzione
I risultati vengono raggruppati per commessa di produzione<!--commessa di produzione--> e includono:
- Magazzino<!--magazzino-->
- Descrizione magazzino<!--magazzino-->
- Ubicazione<!--ubicazione-->
- Numero commessa di produzione<!--commessa di produzione-->
- Anno commessa di produzione<!--commessa di produzione-->
- Altri valori del tab articolo<!--articolo-->

## Dettaglio
Il tab Dettaglio<!--tab Dettaglio--> fornisce il livello massimo di dettaglio dei risultati, comprendendo:
- Classe
- Codice articolo
- Descrizione articolo
- Seconda descrizione articolo
- Variante
- Descrizione variante
- Opzione
- Descrizione opzione
- Magazzino<!--magazzino-->
- Ubicazione<!--ubicazione-->
- Numero commessa<!--commessa-->
- Anno commessa<!--commessa-->
- Descrizione cliente/fornitore<!--cliente/fornitore-->
- Lotto<!--lotti-->
- Quantità disponibile
- Quantità giacenza<!--giacenza-->
- Unità di misura
- Stato dell'ubicazione<!--ubicazione-->

### Generazione registrazioni
Nel tab Dettaglio<!--tab Dettaglio-->, è possibile utilizzare il pulsante Generazione registrazioni<!--pulsante Generazione registrazioni--> per creare registrazioni<!--registrazioni--> di magazzino<!--magazzino-->.

**Procedimento**:
1. Selezionare un Articolo<!--articolo--> nella griglia dei risultati.
2. Scegliere un Magazzino<!--magazzino--> tramite i filtri.
3. Impostare la visualizzazione giacenze<!--visualizzazione giacenze--> su Positiva<!--flag Positiva--> o Negativa<!--flag Negativa-->, a seconda che si voglia creare una registrazione di scarico o carico.
4. Premere Generazione registrazioni<!--pulsante Generazione registrazioni-->, aprendo la form Movimentazione<!--form Movimentazione-->.
5. Inserire i valori di:
   - Causale<!--campo Causale-->
   - Quantità
   - Data registrazione
   - Eventualmente Ubicazione<!--ubicazione-->
6. Premere OK per creare la registrazione, che sarà visibile e modificabile immediatamente.
   
:::important
Se la causale<!--campo Causale--> ha contropartita, questa verrà proposta nel campo Causale CPT<!--campo Causale--> con la relativa Ubicazione<!--ubicazione-->. Se l'ubicazione<!--ubicazione--> viene cancellata, il sistema utilizzerà quella codificata nella [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map), se presente.
:::

### Azzeramento giacenze
Il tab Dettaglio<!--tab Dettaglio--> consente anche di azzerare massivamente le giacenze<!--azzeramento massivo giacenze--> , utile in caso di dati incoerenti o negativi.

**Procedimento**:
1. Scegliere un Magazzino<!--magazzino--> tramite i filtri.
2. Impostare la visualizzazione giacenze<!--visualizzazione giacenze--> su Positiva<!--flag Positiva--> o Negativa<!--flag Negativa-->.
3. Selezionare gli articoli<!--articolo--> da azzerare.
4. Premere Generazione registrazioni<!--pulsante Generazione registrazioni--> .
5. Nella form Movimentazioni<!--form Movimentazione-->, scegliere la causale<!--campo Causale--> e premere OK senza specificare quantità.  

In questo modo, le giacenze<!--giacenze--> selezionate saranno azzerate<!--azzeramento massivo giacenze-->.

## Riepilogo
- Fluentis ERP<!--Fluentis ERP--> consente una visualizzazione dettagliata delle giacenze<!--visualizzazione giacenze--> per articolo<!--articolo-->, magazzino<!--magazzino-->, ubicazione<!--ubicazione-->, progetto<!--progetto-->, cliente/fornitore<!--cliente/fornitore-->, lotto<!--lotti--> e commessa di produzione<!--commessa di produzione-->.
- I filtri e i raggruppamenti permettono un'analisi mirata e precisa dei dati.
- Dal tab Dettaglio<!--tab Dettaglio--> è possibile generare registrazioni<!--registrazioni--> e azzerare giacenze<!--azzeramento massivo giacenze--> in modo controllato.
- Per approfondimenti su ubicazioni<!--ubicazione--> e contropartite, consultare la [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map)<!--ubicazione-->.
