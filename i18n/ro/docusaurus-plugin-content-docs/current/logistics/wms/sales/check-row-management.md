---
title: Gestione spunta e Conferma picking
sidebar_position: 2
---

## Gestione spunta

:::important A cosa serve
La gestione spunta del WMS di Fluentis è uno strumento progettato per confermare le righe del picking effettivamente prelevate dall'operatore in magazzino. Se almeno una riga è spuntata, le procedure di creazione del Documento di Trasporto (DDT) e della fattura considerano solo queste righe; in caso contrario, si considerano tutte le righe del picking. Questo sistema semplifica e velocizza la creazione dei documenti di trasporto e fatturazione, permettendo anche l'inserimento manuale di nuove righe di articoli. Inoltre, la gestione spunta permette di creare le Unità di Carico (UDC) durante la conferma delle righe del picking, raggruppando gli articoli in unità di carico. Una volta selezionata una riga e inseriti i dati necessari, è possibile creare e gestire nuove UDC con gli articoli confermati.
:::

A partire da un Picking esistente, si ha la possibilità di leggere gli articoli presenti e raggrupparli in UDC.    
Da wpf è poi possibile procedere alla creazione del DDT o della fattura.

:::note Nota
Nella form di **Gestione spunta** verranno visualizzati solamente i picking creati con un *tipo picking* con il flag *Unità di carico obbligatoria* abilitato nella tabella [Tipi picking](/docs/configurations/tables/logistics/picking-type/).
:::

La form si apre sul filtro dei picking, dove è possibile visualizzare tutti i picking in stato *Non evaso* o *Parzialmente evaso* e con un *tipo picking* con il flag *Unità di carico obbligatoria* attivato.     
I risultati possono essere filtrati per *Tipo picking*, *Numero*, *Data* e *Cliente*.    
Tramite il pulsante *Apri* è possibile aprire il picking selezionato.

La form principale si compone dei seguenti tab:

- **Articoli**
In questo tab sono visualizzate tutte le righe articoli presenti nel picking.

**Pulsanti specifici**
> **Dettaglio**: permette di posizionarsi sul tab **Articoli spuntati**;        
> **Conferma**: dopo aver selezionato una riga nel tab **Articoli**, apre il tab **Conferma** proponendo l’articolo selezionato.

- **Conferma**
Tramite il campo **Input code** (quindi utilizzando un lettore barcode) è possibile inserire i dati relativi al lotto, all'ubicazione, alla quantità di prelievo e all’articolo se lo si vuole variare rispetto a quello proposto.
L’utente può anche variare l’articolo spostandosi nel tab **Articoli**, dove sono visualizzate tutte le righe articoli presenti nel picking, selezionando quello di interesse e premendo il pulsante **Conferma** o spostandosi nuovamente nel tab **Conferma** per poter inserire i dati relativi all’articolo appena selezionato.      
Nel caso in cui l'utente confermi la riga, di un articolo gestito a lotti e per il quale non sia stato inserito il lotto, verrà mostrato un messaggio che ricorda di inserire il lotto. È presente nel tab anche il campo *Unità di carico* da valorizzare per poter procedere alla conferma dei dati. 

**Pulsanti specifici**
> **Dettaglio spunta**: permette di posizionarsi sul tab **Articoli spuntati**;        
> **Conferma**: permette di confermare i dati inseriti e successivamente di caricare i dati relativi alla riga successiva;          
> **Nuova UDC**: permette di creare una nuova *Unità di carico* dopo aver selezionato il tipo.         

Al di sotto della quantità prelievo, è presente una griglia in sola lettura con le seguenti colonne: *Quantità*, *Ubicazione* e *Lotto*. Questa si aggiorna dinamicamente ed ad esempio, se viene solo indicato l’articolo deve fare vedere tutte le ubicazioni con giacenza > 0 in cui c’è quell’articolo, se è indicato anche il lotto, deve far vedere tutte le ubicazioni con giacenza > 0 in cui c’è quell’articolo con quel lotto.

- **UDC**
Permette di visualizzare la composizione delle *Unità di carico* create per il picking corrente.          

**Pulsanti specifici**
> **Apri UDC**: permette di visualizzare il dettaglio dell'*Unità di carico* selezionata. Inoltre, l'ultima *Unità di carico* aperta verrà proposta come *Unità di carico* in cui inserire i inserire i prossimi articoli da confermare.            

- **Articoli spuntati**
Il tab **Articoli Spuntati** si popola solo dopo aver selezionato un articolo nel tab **Articoli** del Picking.
Quindi dalla lista articoli del Picking, si seleziona un articolo e nel tab **Articoli Spuntati** compaiono tutte le letture fatte dell’articolo selezionato.
Quando una riga *Picking* viene evasa completamente va in coda nel tab **Articoli** ed viene evidenziata in rosso. Selezionando quella riga e premendo il pulsante *Dettaglio spunta* verrà aperto il tab **Articoli spuntati** dove si potranno vedere le righe confermate, le quali possono anche essere cancellate tramite l'apposito pulsante *Cancella*. 
Da questo tab è possibile selezionare un articolo spuntato e cancellarlo.

**Pulsanti specifici**
> **Cancella**: permette di eliminare la riga selezionata.

:::note Nota
Nel caso in cui sia necessario avere la possibilità di sovra evadere la quantità indicata nel picking, è necessario abilitare il flag **Sovraevadibile** presente nella tabella [Tipi picking](/docs/configurations/tables/logistics/picking-type/).
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

I parametri sono ripetuti poiché la form utilizza una causale di scarico (senza contropartita), per scaricare gli articoli prelevati, ed una di carico per caricarli all’interno delle unità di carico appena create. Per la causale di carico è importante indicare anche una ubicazione di default che verrà utilizzata per caricare l'unità di carico appena creata.    
                                         
Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).


## Conferma Picking

:::important A cosa serve
A partire da un Picking esistente, senza l’utilizzo però delle unità di carico, che invece vengono create utilizzando la form di [Gestione spunta](/docs/logistics/wms/sales/check-row-management), con la form di **Conferma Picking** è possibile confermare le singole righe del picking, per movimentare gli articoli tra due magazzini o ubicazioni, creando direttamente i movimenti di magazzino di spostamento.
Successivamente, da wpf, è poi possibile procedere alla creazione del DDT o della fattura.
:::

:::note Nota
Nella form di **Conferma Picking** verranno visualizzati solamente i picking creati con un *tipo picking* con il flag *Unità di carico obbligatoria* disattivato nella tabella [Tipi picking](/docs/configurations/tables/logistics/picking-type/).
:::

La form si apre sul filtro dei picking, dove è possibile visualizzare tutti i picking in stato *Non evaso* o *Parzialmente evaso* e con un *tipo picking* con il flag *Unità di carico obbligatoria* disattivato.     
I risultati possono essere filtrati per *Tipo picking*, *Numero*, *Data* e *Cliente*.    
Tramite il pulsante *Apri* è possibile aprire il picking selezionato.

La form principale si compone dei seguenti tab:

- **Articoli**
In questo tab sono visualizzate tutte le righe articoli presenti nel picking.

**Pulsanti specifici**
> **Dettaglio**: permette di posizionarsi sul tab **Articoli spuntati**;        
> **Conferma**: dopo aver selezionato una riga nel tab **Articoli**, apre il tab **Conferma** proponendo l’articolo selezionato.

- **Conferma**
Tramite il campo **Input code** (quindi utilizzando un lettore barcode) è possibile inserire i dati relativi al lotto, all'ubicazione, alla quantità di prelievo e all’articolo se lo si vuole variare rispetto a quello proposto.
Nel caso in cui l'utente confermi la riga, di un articolo gestito a lotti e per il quale non sia stato inserito il lotto, verrà mostrato un messaggio che ricorda di inserire il lotto. 

**Pulsanti specifici**
> **Dettaglio**: permette di posizionarsi sul tab **Articoli spuntati**;        
> **Conferma**: permette di confermare i dati inseriti e successivamente di caricare i dati relativi alla riga successiva;          

Al di sotto della quantità prelievo, è presente una griglia in sola lettura con le seguenti colonne: *Quantità*, *Ubicazione* e *Lotto*. Questa si aggiorna dinamicamente ed ad esempio, se viene solo indicato l’articolo deve fare vedere tutte le ubicazioni con giacenza > 0 in cui c’è quell’articolo, se è indicato anche il lotto, deve far vedere tutte le ubicazioni con giacenza > 0 in cui c’è quell’articolo con quel lotto.

- **Articoli spuntati**       
Il tab **Articoli Spuntati** si popola solo dopo aver selezionato un articolo nel tab **Articoli** del Picking.
Quindi dalla lista articoli del Picking, si seleziona un articolo e nel tab **Articoli Spuntati** compaiono tutte le letture fatte dell’articolo selezionato.
Quando una riga *Picking* viene evasa completamente va in coda nel tab **Articoli** ed viene evidenziata in rosso. Selezionando quella riga e premendo il pulsante *Dettaglio* verrà aperto il tab **Articoli spuntati** dove si potranno vedere le righe confermate, le quali possono anche essere cancellate tramite l'apposito pulsante *Cancella*. 
Da questo tab è possibile selezionare un articolo spuntato e cancellarlo.

**Pulsanti specifici**
> **Cancella**: permette di eliminare la riga selezionata.

:::note Nota
Nel caso in cui sia necessario avere la possibilità di sovra evadere la quantità indicata nel picking, è necessario abilitare il flag **Sovraevadibile** presente nella tabella [Tipi picking](/docs/configurations/tables/logistics/picking-type/).
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note Nota
È importante ricordare che la causale utilizzata dovrà essere una causale di scarico con una causale di carico in contropartita.
:::

Per ogni Picking verrà creata un’unica registrazione di scarico con in contropartita un’unica registrazione di carico che contiene i movimenti di tutti gli articoli spuntati. 

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
