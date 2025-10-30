---
title: Liste di Trasferimento UDC (versione WPF e WMS)
sidebar_position: 2
---

### Liste di Trasferimento UDC (versione WPF)

:::important A cosa serve
La Lista Trasferimento UDC di Fluentis è uno strumento progettato per gestire le movimentazioni delle Unità Di Carico (UDC) all'interno dei propri magazzini, offrendo un metodo sistematico e intuitivo per il trasferimento di merce. A differenza della Lista di Prelievo UDC, che è utilizzata per la spedizione ai clienti, la lista di trasferimento si concentra sull'ottimizzazione dei flussi interni delle UDC tra le varie ubicazioni del magazzino.

Per creare una nuova lista di trasferimento, gli utenti devono semplicemente inserire i dettagli necessari, come la tipologia di picking, il magazzino di origine e l'utente coinvolto. La selezione delle unità di carico da trasferire può essere effettuata facilmente attraverso l'interfaccia, anche in questo caso grazie al pulsante Help UDC, che assiste nella ricerca delle UDC da includere nel trasferimento.

Questa procedura consente anche di visualizzare gli articoli collegati a specifici ordini cliente, fornendo una panoramica chiara dei dettagli delle UDC selezionate. Una volta completata la lista di trasferimento, è possibile generare un DDT (Documento di Trasporto) direttamente dalla lista stessa, garantendo che tutte le informazioni relative agli articoli e alle unità di carico siano riportate in modo accurato e completo. Questo approccio non solo semplifica la gestione delle movimentazioni interne, ma contribuisce anche a mantenere una tracciabilità precisa delle scorte.
:::

Le **Liste di Trasferimento UDC** sono molto simili alle [Liste di prelievo UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la differenza che vengono utilizzate nel caso di movimentazioni di UDC all’interno dei propri magazzini, mentre **Liste di prelievo UDC / Packing list** sono impiegate nel caso in cui si voglia spedire la merce ad un cliente.     

Dalla maschera di **Ricerca** è possibile ricercare le liste precedentemente inserite.     

Per creare una nuova lista cliccare **Nuovo**.          
I dati obbligatori da inserire sono:         
**Tipo picking**: inserire la tipologia di [picking](/docs/logistics/picking/picking-management) da utilizzare;       
**Utente**: inserire il dipendente codificato che crea il documento;      
**Utente per conf.**: inserire il dipendente che ha il diritto di confermare la lista.    

Dopo aver inserito questi dati e gli altri se necessario è possibile salvare la Lista di trasferimento. Dato che si tratta di un trasferimento, è necessario inserire anche il **Magazzino di partenza** e il **Magazzino di destinazione**.       

*Pulsanti specifici presenti nella form di dettaglio:*

> **Cancella UDC**: permette di cancellare un'unità di carico presente nella lista;      
> **Rollback trasferimento**: permette di fare la rollback del movimento di conferma trasferimento; quindi, viene cancellato il movimento di carico creato con la conferma del traferimento e viene sostituito con un movimento di carico sul magazzino di partenza;         
> **Help UDC**: permette di aggiungere nuove uni di carico tramite l'help.

*Pulsanti specifici presenti nel filtro:*

> **Gestione UDC**: selezionando una Lista di trasferimento e cliccando questo bottone viene aperta la maschera **Gestione UDC** in cui vengono proposti le UDC disponibili per il trasferimento. E' possibile trasferire l'UDC con il pulsante **Sposta UDC**.             
> **DDT**: crea il DDT dalla **Liste di Trasferimento UDC** selezionata.    

Per tutte le informazioni su come utilizzare questa form da WMS consultare le [Liste di Trasferimento UDC](/docs/logistics/wms/udc/loading-unit-transfer-list)

### Liste trasferimento UDC (versione WMS)

:::important A cosa serve
La funzione Liste di Trasferimento UDC del WMS di Fluentis consente di gestire le movimentazioni delle unità di carico all'interno dei magazzini, facilitando l'organizzazione e la tracciabilità delle UDC durante i trasferimenti tra diverse ubicazioni.        
Questa funzionalità permette di creare e modificare liste di trasferimento in modo efficiente, migliorando così la gestione logistica interna
:::

Questa procedura è utilizzata per la creazione di liste di trasferimento con unità di carico.         
Le **Liste di Trasferimento UDC** sono molto simili alle [Liste di prelievo UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la differenza che vengono utilizzate nel caso di movimentazioni di unità di carico all’interno dei propri magazzini, mentre **Liste di prelievo UDC / Packing list** sono impiegate nel caso in cui si voglia spedire la merce ad un cliente.          
Nella form di filtro è possibile ricercare le liste di interesse filtrando: per *tipo*, *data inserimento*, *data spedizione* e anche per lo *stato* della lista di prelievo; una volta selezionata, è possibile aprire la lista con il pulsante **Apri**, all’interno della quale, l’utente ha la possibilità di modificare le unità di carico contenute nel tab **Dettaglio UDC**.       
In questo tab è possibile: selezionare un’unità di carico esistente ed eliminarla dalla lista con il pulsante **Cancella UDC**; oppure, aggiungerne una nuova semplicemente leggendo il relativo barcode.            
Una volta ultimate le modifiche è necessario salvare la lista tramite il pulsante **Salva**.           
Dal filtro è possibile anche creare una nuova lista con il pulsante **Nuovo**.        
In automatico vengono proposte: la *data odierna* ed il *magazzino d partenza* indicato nella tabella [Parametri Magazzino Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping); quindi l'operatore dovrà inserire i dati relativi a magazzino ed ubicazione di destinazione.           
Inoltre, con l’inserimento del *tipo picking* viene proposto anche il numero della lista.        
A questo punto, l’utente può inserire, nel tab *Dettaglio UDC*, le unità di carico da aggiungere alla lista tramite la lettura dei relativi barcode.          
Ultimato l’inserimento sarà sufficiente salvare la lista con l’apposito pulsante **Salva**.
Sempre dal tab di filtro, è possibile: aprire una lista selezionata in sola visualizzazione con il pulsante **Visualizzazione**, ed eliminarne una con il pulsante **Elimina**.

Il relativo movimento di magazzino verrà generato solo tramite la procedura di [Conferma trasferimento](/docs/logistics/wms/udc/confirm-transfer). 

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Per questo parametro la casuale di magazzino può essere lasciata vuota.

:::note Nota
Se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente, un solo magazzino, viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

