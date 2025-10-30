---
title: Giacenza articolo
sidebar_position: 5
---

:::important A cosa serve
La funzione di **giacenza articolo** consente agli operatori di visualizzare rapidamente le giacenze di magazzino per ogni articolo registrato. Attraverso una griglia interattiva, è possibile estrapolare informazioni dettagliate riguardanti la giacenza gestionale, le unità di misura e i lotti. Inoltre, la funzione consente di analizzare le giacenze raggruppate per articolato, ubicazione o progetto, offrendo così una visione completa della disponibilità dei materiali. Questa procedura facilita il monitoraggio delle scorte e consente una gestione più accurata e informata delle operazioni di magazzino, contribuendo così a ottimizzare l'efficienza logistica complessiva.
:::

Questa procedura è utilizzata per visualizzare la giacenza di un articolo.     
La form presenta una griglia che muta le proprie colonne sulla base dei filtri inseriti per la ricerca. 

Ad esempio, nel caso in cui venga letto solo il codice di un'ubicazione, tramite il pulsante **Ricerca** verranno visualizzati nella griglia sottostante i risultati della ricerca con la valorizzazione delle seguenti colonne:

> **Articolo**: indica il codice dell'articolo;     
> **Giacenza (Gest.)**: indica la giacenza nell'unità di misura gestionale (principale);      
> **Unità di misura**: indica l'unità di misura articolo;          
> **Giacenza**: viene valorizzata solo se il flag *Default WMS* è abilitato nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item). Questo valore indica la giacenza espressa nell'unità di misura alternativa, calcolata sulla base dei movimenti di magazzino;         
> **Giacenza (FC)**: viene valorizzata solo se il flag *Default WMS* è abilitato nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item). Questo valore indica la giacenza espressa nell'unità di misura alternativa, calcolata utilizzando il fattore di conversione;               
> **Lotto**: indica il lotto dell'articolo;       
> **Descrizione articolo**: indica la descrizione dell'articolo;      
> **Variante**: indica il codice variante dell'articolo;    
> **Descrizione variante**: indica la descrizione della variante dell'articolo.     

Mentre, leggendo l'articolo da rettificare, tramite il pulsante **Ricerca** verranno visualizzati nella griglia sottostante i risultati della ricerca con la valorizzazione delle seguenti colonne:

> **Ubicazione**: indica l'ubicazione dell'articolo;        
> **Articolo**: indica il codice dell'articolo;     
> **Giacenza (Gest.)**: indica la giacenza nell'unità di misura gestionale (principale);      
> **Unità di misura**: indica l'unità di misura articolo;          
> **Giacenza**: viene valorizzata solo se il flag *Default WMS* è abilitato nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item). Questo valore indica la giacenza espressa nell'unità di misura alternativa, calcolata sulla base dei movimenti di magazzino;         
> **Giacenza (FC)**: viene valorizzata solo se il flag *Default WMS* è abilitato nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item). Questo valore indica la giacenza espressa nell'unità di misura alternativa, calcolata utilizzando il fattore di conversione;               
> **Lotto**: indica il lotto dell'articolo;       
> **Variante**: indica il codice variante dell'articolo;    
> **Descrizione variante**: indica la descrizione della variante dell'articolo.     

:::note Nota
Le colonne facenti riferimento alla giacenza sono tre: 
- *Giacenza (Gest.)* - (gestionale) 
- *Giacenza*  
- *Giacenza(FC)* - (FC = Fattore di conversione)

Nel caso di utilizzo del flag **Default WMS** presente nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item), la prima risulta valorizzata con l'unità di misura principale dell'articolo, la seconda risulta popolata con la giacenza espressa nell'unità di misura alternativa dell'articolo e data dalla somma dei movimenti, mentre la terza è data dalla giacenza espressa nell'unità di misura alternativa ma calcolata con il fattore di conversione.
Nel caso in cui, il flag **Default WMS** non sia abilitato, le colonne *Giacenza* e *Giacenza(FC)* non verranno valorizzate.
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Questo parametro va inserito solo se si vuole filtrare le giacenze per uno specifico magazzino (la casuale può essere lasciata vuota), altrimenti se non viene inserito verranno visualizzare le giacenze di tutti i magazzini.

:::note Nota
Se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
