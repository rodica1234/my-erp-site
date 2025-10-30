---
title: Ricerca Picking
sidebar_position: 2
---

La form si apre tramite il percorso **Logistica > Picking**.

import SearchForm from './../../import/sections/search-form.md'

<SearchForm />

*Pulsanti specifici*  
**DDT**: esegue la procedura per creare il documento DDT partendo da un picking.  
**Fattura**: esegue la procedura per creare il documento fattura partendo da un picking. 

In fase di creazione *DDT* e *Fattura* da picking, è stato aggiunto un nuovo flag: **Utilizza magazzino e causale da tipo DDT** e **Utilizza magazzino e causale da tipo Fattura**.       
Se attivo fa si che la procedura utilizzerà per le righe del DDT / Fattura magazzino e causale presi da quelli indicati nel tipo DDT / Fattura.         
Ovviamente deve esserci giacenze disponibile nel magazzino / ubicazione preso dalla causale DDT/fattura.        

Sempre da questa form è possibile [Creare un nuovo picking](/docs/logistics/picking/picking-management), cliccando sul pulsante **Nuovo**. 