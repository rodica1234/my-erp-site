---
title: Inventario
sidebar_position: 6
---

:::important A cosa serve
La funzione di **inventario** consente una gestione completa e dettagliata delle giacenze di magazzino. Gli operatori possono creare inventari specifici inserendo il numero, la data dell'inventario e altre informazioni rilevanti, compresi note e dettagli sull'operatore. Attraverso la creazione di liste inventariali, è possibile assegnare compiti a diversi operatori per facilitare il processo di conteggio. Durante l'inventario, il sistema supporta l'inserimento dei dati attraverso lettori di codici a barre, permettendo di registrare rapidamente le quantità rilevate e gestire eventuali articoli a lotto. Al termine dell'inventario, il sistema effettua automaticamente la rettifica delle quantità logiche rispetto a quelle fisiche, garantendo un allineamento accurato e tempestivo delle giacenze.
:::

Questa procedura è utilizzata per popolare una lista inventariale creata in wpf con gli articoli letti tramite barcode.  

L'operatore, tramite WMS, potrà ricercare l’inventario di riferimento e premendo il pulsante *ricerca*, visualizzerà solamente le liste inventariali associate a sé stesso.        
Selezionando la lista e premendo il pulsante *modifica*, viene aperta la form di inserimento dove: leggendo l’articolo e la sua ubicazione verranno caricati i relativi dati e l’operatore dovrà inserire la quantità.           
Premendo il pulsante conferma, la procedura compilerà in tempo reale la lista inventariale con i dati appena inseriti.         
Nel caso in cui l'articolo letto sia gestito a lotti, verrà visualizzato anche il relativo campo in cui andare ad inserire il lotto che dovrà essere inventariato.         
Se un articolo viene letto una seconda volta (stessa Classe/Codice/Lotto (se gestito a lotti)) e indicato nella stessa ubicazione della prima, compare un pop-up che chiede se **Aggiungere** o **Sostituire** la quantità letta in precedenza.

Una volta ultimate le liste inventariali, da Fluentis verranno creati tutti i movimenti di rettifica attraverso la procedura di [Differenze inventariali](/docs/logistics/physical-inventory/stock-difference).         

Per l'utilizzo di questa form, non è necessario inserire nessun parametro nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

:::note Nota
È possibile variare il comportamento della lista inventariale relativamente all'ubicazione tramite il flag **Mantieni ubicazione** nella tabella dei [Tipi liste inventariali](/docs/configurations/tables/logistics/stock-lists-types). Questo se attivo, fa in modo che in fase di inventario con il WMS l'ubicazione inserita non verrà variata fino a quando non sarà letta un'altra ubicazione; nel caso in cui invece, fosse disattivato, l'ubicazione dovrà essere inserita ogni volta prima della conferma dell'articolo.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

