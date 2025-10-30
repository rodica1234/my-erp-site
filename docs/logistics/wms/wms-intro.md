---
title: Introduzione
sidebar_position: 1
---

L'adozione di un sistema di gestione del magazzino **WMS** è essenziale per le aziende che cercano di ottimizzare le proprie operazioni logistiche. 
Un **WMS**, come **Fluentis**, offre una serie di strumenti e funzionalità progettate per migliorare l'efficienza, la precisione e la tracciabilità all'interno del magazzino. Con **Fluentis WMS**, le aziende possono automatizzare processi chiave come la ricezione delle merci, lo stoccaggio, il picking, il confezionamento e la spedizione, riducendo gli errori umani e aumentando la produttività.

L'implementazione di un **WMS** consente di gestire in modo più efficace le scorte, riducendo il rischio di eccedenze o carenze. Inoltre, grazie alla visibilità in tempo reale delle operazioni, il **WMS** permette alle aziende di prendere decisioni informate e di rispondere rapidamente alle variazioni della domanda. La capacità di tracciare le merci durante tutto il loro ciclo di vita nel magazzino contribuisce anche a garantire la conformità normativa e a migliorare la soddisfazione del cliente.

In definitiva, l'utilizzo di un **WMS** aiuta le aziende a snellire le operazioni logistiche, ridurre i costi e migliorare la qualità del servizio, creando un vantaggio competitivo in un mercato sempre più dinamico e complesso.


## Moduli dell'area 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Acquisti</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Ricevimento merci</Link></p>
        <p>La funzione di ricevimento merci è cruciale per la gestione logistica, consentendo l’identificazione e il caricamento preciso delle merci in arrivo. Attraverso il sistema, gli operatori possono filtrare e selezionare gli ordini fornitori non evasi, generare il Documento di Trasporto (DDT) e gestire le unità di carico, se necessario. Questo processo assicura che ogni articolo venga registrato con le informazioni di lotto e quantità, migliorando l’efficienza del magazzino e garantendo un accurato controllo delle movimentazioni.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Logistica</Link>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Carico articolo</Link></p>
        <p>La funzione di carico merci consente di registrare in modo preciso l’arrivo degli articoli nei magazzini.</p>
        <p><Link to="/docs/logistics/wms/logistics/unload-item" className="bold-link">Scarico articolo</Link></p>
        <p>La funzione di scarico merci è progettata per facilitare il prelievo degli articoli da un magazzino.</p>
        <p><Link to="/docs/logistics/wms/logistics/move-item" className="bold-link">Sposta articolo</Link></p>
        <p>La funzione sposta articolo consente di creare un movimento di spostamento di un articolo da una specifica ubicazione ad un’altra.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-adjustment" className="bold-link">Rettifica articolo</Link></p>
        <p>Questa procedura è utilizzata per creare delle rettifiche positive o negative di un articolo.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-stocks" className="bold-link">Giacenza articolo</Link></p>
        <p>La funzione di giacenza articolo consente agli operatori di visualizzare rapidamente le giacenze di magazzino per ogni articolo registrato.</p>
        <p><Link to="/docs/logistics/wms/logistics/inventory" className="bold-link">Inventario</Link></p>
        <p>Questa procedura consente di registrare e gestire le giacenze fisiche degli articoli, facilitando e velocizzando il conteggio.</p>
        <p><Link to="/docs/logistics/wms/logistics/confirm-picking" className="bold-link">Conferma picking</Link></p>
        <p>Questo strumento permette di gestire efficacemente il trasferimento degli articoli spuntati tra diversi magazzini o ubicazioni, creando automaticamente i movimenti di magazzino necessari per lo spostamento.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">UDC</Link>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Carico/Sposta UDC</Link></p>
        <p>La funzione consente di caricare o spostare unità di carico tramite scansione del codice a barre, semplificando e velocizzando le operazioni logistiche.</p>
        <p><Link to="/docs/logistics/wms/udc/load-move-udc-multiple" className="bold-link">Carico/Sposta UDC multiplo</Link></p>
        <p>Permette di gestire simultaneamente più unità di carico, migliorando l'efficienza delle operazioni di magazzino in modo da caricare o spostare più UDC contemporaneamente.</p>
        <p><Link to="/docs/logistics/wms/udc/loading-unit-picking-list" className="bold-link">Liste di prelievo / Packing List</Link></p>
        <p>Consente di creare un picking di unità di carico, facilitando la preparazione delle spedizioni direttamente collegate agli ordini cliente.</p>
        <p><Link to="/docs/logistics/wms/udc/loading-unit-transfer-list" className="bold-link">Liste trasferimento UDC</Link></p>
        <p>Consente di gestire le movimentazioni delle unità di carico all'interno dei magazzini, facilitando l'organizzazione e la tracciabilità delle UDC durante i trasferimenti tra diverse ubicazioni.</p>
        <p><Link to="/docs/logistics/wms/udc/confirm-packing-list" className="bold-link">Conferma prelievo UDC</Link></p>
        <p>La funzione è utilizzata per confermare le liste di prelievo e creare i movimenti di magazzino di scarico.</p>
        <p><Link to="/docs/logistics/wms/udc/confirm-transfer" className="bold-link">Conferma trasferimento UDC</Link></p>
        <p>Questa procedura destinata a confermare le liste di trasferimento esistenti e a gestire i movimenti di magazzino correlati.</p>
        <p><Link to="/docs/logistics/wms/udc/move-loading-unit-item" className="bold-link">Spostamento articoli tra due unità di carico</Link></p>
        <p>Questa funzione permette di trasferire facilmente articoli da un'unità di carico di partenza a una di destinazione.</p>
        <p><Link to="/docs/logistics/wms/udc/loading-unit-adjustment" className="bold-link">Rettifica unità di carico</Link></p>
        <p>Permette di apportare modifiche agli articoli contenuti in un'unità di carico, consentendo rettifiche positive e negative.</p> 
        <p><Link to="/docs/logistics/wms/udc/loading-unit-inventory" className="bold-link">Inventario unità di carico</Link></p>
        <p>Questa procedura consente di effettuare un inventario accurato delle unità di carico presenti a magazzino.</p>      
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Vendite</Link>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Gestione spunta</Link></p>
        <p>La gestione spunta del WMS di Fluentis permette agli operatori di confermare le righe del picking e di raggruppare gli articoli in unità di carico, ottimizzando così le operazioni di movimentazione in magazzino. Grazie a questa funzionalità, è possibile creare e gestire efficacemente le UDC durante il prelievo, garantendo un controllo accurato e una maggiore efficienza operativa.</p>
    </div>
</div>

## Per iniziare ad utilizzare   

la **Gestione UDC**:
- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare       
- definire i [*Parametri iniziali di magazzino*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- creare un dipendente nella tabella [Dipendenti](/docs/project-management/registers/employee/new-employee/)
- [configurare](https://docs.fluentis.com/FluentisErp/docs/logistics/wms/configuration) l'app **Fluentis WMS**
- definire i [*Parametri Carico/Scarico per utente*](/docs/configurations/parameters/general-parameters/deliverynotes-grouping)        
- definire i [*Barcode Tokenizer*](/docs/configurations/tables/general-settings/barcode-tokenizer)  


