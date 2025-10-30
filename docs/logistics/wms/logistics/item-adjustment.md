---
title: Rettifica articolo
sidebar_position: 4
---

:::important A cosa serve
La funzione di **rettifica articolo** è utilizzata per correggere le giacenze degli articoli nel magazzino, permettendo all’operatore di apportare rettifiche positive o negative. Grazie a un'interfaccia chiara, l'operatore può cercare l’articolo da rettificare, visualizzare le informazioni correlate e modificare la quantità direttamente in griglia. Confermando la modifica, il sistema genera automaticamente i movimenti di rettifica, assicurando un aggiornamento preciso delle giacenze.
:::

Questa procedura è utilizzata per creare delle rettifiche positive o negative di un articolo.          
La form presenta una griglia che muta le proprie colonne sulla base dei filtri inseriti per la ricerca.        
Ad esempio, nel caso in cui venga letto solo il codice di un'ubicazione, tramite il pulsante **Ricerca** verranno visualizzati nella griglia sottostante i risultati della ricerca con la valorizzazione delle seguenti colonne:

> **Articolo**: indica il codice dell'articolo;     
> **Unità di misura**: indica l'unità di misura articolo;     
> **Quantità**: indica la quantità che l'operatore può variare manualmente oppure tramite i pulsanti **+** e **-**;        
> **Giacenza**: indica la giacenza dell'articolo calcolata sulla base dei movimenti di magazzino;       
> **Giacenza (FC)**: si attiva solo se il flag *Default WMS* è abilitato nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item). Questo valore indica la giacenza espressa nell'unità di misura alternativa, calcolata utilizzando il fattore di conversione;               
> **Lotto**: indica il lotto dell'articolo;       
> **Descrizione articolo**: indica la descrizione dell'articolo.    

Mentre, leggendo l'articolo da rettificare, tramite il pulsante **Ricerca** verranno visualizzati nella griglia sottostante i risultati della ricerca con la valorizzazione delle seguenti colonne:

> **Ubicazione**: indica l'ubicazione dell'articolo;        
> **Unità di misura**: indica l'unità di misura articolo;     
> **Quantità**: indica la quantità che l'operatore può variare manualmente oppure tramite i pulsanti **+** e **-**;        
> **Giacenza**: indica la giacenza dell'articolo calcolata sulla base dei movimenti di magazzino;       
> **Giacenza (FC)**: si attiva solo se il flag *Default WMS* è abilitato nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item). Questo valore indica la giacenza espressa nell'unità di misura alternativa, calcolata utilizzando il fattore di conversione;                      
> **Lotto**: indica il lotto dell'articolo.       

:::note **Giacenza** e **Giacenza (FC)**
È importante ricordare che, se il flag *Default WMS* è attivo nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-item), i valori nei campi **Giacenza** e **Giacenza (FC)** saranno espressi nell'unità di misura alternativa corrispondente. Tuttavia, se l'articolo è gestito a lotti, i valori nei campi **Giacenza** e **Giacenza (FC)** saranno espressi nell'unità di misura principale dell'articolo, anche se il flag "Default WMS" è attivo.
:::

Per poter procedere con la rettifica è necessario che nella griglia dei risultati sia presente un solo record.     
A questo punto l'operatore non dovrà far altro che variare la quantità manualmente, modificando il valore direttamente in griglia, oppure tramite i pulsanti **+** e **-**; dopo di che con la pressione del pulsante **Conferma** verranno creati i relativi movimenti di rettifica positivi o negativi.

Inoltre, è possibile stampare anche l'etichetta del codice articolo tramite il pulsante **Stampa** o visualizzare l'anteprima direttamente sul terminale con il pulsante **Anteprima**.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

I parametri sono inseriti due volte poiché la form utilizza sia una causale di carico per le rettifiche positive, che una di causale di scarico per le rettifiche negative.     

:::note Nota
Se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
