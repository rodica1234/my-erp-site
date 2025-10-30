---
title: LOGISTICA
sidebar_position: 1
---

L' area Logistica di **Fluentis ERP** ingloba tutte le funzionalità di un vero dipartimento di logistica, in grado di seguire e tracciare la movimentazione delle merci a magazzino e di tutti gli articoli all'interno e all'esterno dell'organizzazione aziendale.
In tale area confluiscono i documenti relativi al ciclo passivo e attivo, nonché le movimentazioni interne relative ai processi di trasformazione produttiva.

## Moduli dell'area 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/items/items-intro">Articoli</Link>
        <p><Link to="/docs/logistics/items/items-intro" className="bold-link">Articoli</Link></p>
        <p>Garantisce la gestione dettagliata degli articoli, garantendo una tracciabilità e una gestione efficace delle scorte all'interno del magazzino.</p>
        <p><Link to="/docs/logistics/items/stocks-visualization" className="bold-link">Visualizzazione giacenze</Link></p>
        <p>Permette di controllare facilmente le giacenze di magazzino, confrontando le quantità fisiche con quelle logiche.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/warehouse/warehouse-intro">Magazzino</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Registrazioni</Link></p>
        <p>Permette di gestire movimenti di carico e scarico, garantendo la tracciabilità delle giacenze.</p>
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Ubicazioni</Link></p>
        <p>Permette di associare articoli a posizioni specifiche nel magazzino, migliorando l'efficienza logistica.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Stampe gestionali</Link></p>
        <p>Forniscono report dettagliati sulle giacenze e le scorte, facilitando la gestione e il monitoraggio degli articoli.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Stampe contabili</Link></p>
        <p>Forniscono un riepilogo dei movimenti di magazzino, supportando la registrazione e il controllo delle transazioni.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-serial-number-intro">Lotti e Serial number</Link>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Anagrafica lotti</Link></p>
        <p>Permette di cercare e visualizzare i dettagli dei lotti visualizzando i relativi movimenti di carico e scarico.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Tracciabilità lotto</Link></p>
        <p>Genera report sullo stato e sull'uso dei lotti, sia in avanti che indietro nella catena produttiva.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Creazione lotto da lotto</Link></p>
        <p>Crea un nuovo lotto a partire da uno esistente, gestendo i dettagli necessari per il carico e lo scarico.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Creazione lotto da lotto con cambio articolo</Link></p>
        <p>crea un nuovo lotto cambiando contestualmente anche l'articolo di riferimento, gestendo i relativi lotti.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/serial-number-register" className="bold-link">Anagrafica serial number</Link></p>
        <p>Permette di gestire e tracciare ogni singolo pezzo attraverso un codice univoco, particolarmente utile per articoli ad alto valore o critici.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-intro">Picking</Link>
        <p><Link to="/docs/logistics/picking/picking-management" className="bold-link">Picking</Link></p>
        <p>Permette di creare liste di prelievo, facilitando la selezione degli articoli da spedire ai clienti o da movimentare internamente.</p>
        <p><Link to="/docs/logistics/picking/unload-picking" className="bold-link">Scarico picking</Link></p>
        <p>Crea le movimentazioni di magazzino, generando registrazioni precise per i picking selezionati.</p>
        <p><Link to="/docs/logistics/picking/unload-check-row-management" className="bold-link">Scarico da spunta</Link></p>
        <p>Esegue lo scarico delle righe di picking selezionate, facilitando la movimentazione delle merci in base alle righe spuntate.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">UDC</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Gestione UDC</Link></p>
        <p>Permette di creare, caricare e scaricare le unità di carico, garantendo un controllo efficace delle movimentazioni di magazzino.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista di prelievo UDC / Packing list</Link></p>
        <p>Consente di gestire il picking di unità di carico per la spedizione, facilitando l'organizzazione degli articoli da spedire ai clienti.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista di trasferimento UDC</Link></p>
        <p>Permette di movimentare le unità di carico all'interno del magazzino, semplificando la gestione delle scorte.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventari fisici</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventari fisici</Link></p>
        <p>Creare liste inventariali e confronta le giacenze fisiche con quelle logiche, assicurando un allineamento tra i dati.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Differenze inventariali</Link></p>
        <p>Permette di calcolare le discrepanze tra quantità logica e fisica, generando registrazioni di rettifica per allineare le giacenze.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Storico chiusura</Link></p>
        <p>Raccoglie dati relativi alle chiusure di magazzino, permettendo di consultare informazioni storicizzate sulle valutazioni e giacenze.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Storico magazzino</Link></p>
        <p>Registra gli inventari valorizzati, consentendo una consultazione dettagliata delle giacenze nel tempo.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorizzazione magazzino</Link></p>
        <p>Permette di chiudere il magazzino a una certa data, creando movimenti di apertura con le rimanenze.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventario quantità valorizzato</Link></p>
        <p>Genera report dettagliati sull'inventario, includendo le quantità e i valori degli articoli sulla base di costi medi o ultimi.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/load-plans/search-plan">Piani di carico</Link>
        <p><Link to="/docs/logistics/load-plans/search-plan" className="bold-link">Piani di carico</Link></p>
        <p>Ottimizza la disposizione e la sistemazione delle merci all'interno di un mezzo di trasporto, garantendo stabilità, sicurezza ed efficienza durante il trasporto.</p>
     </div>
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Spedizioni</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Spedizioni</Link></p>
        <p>Tramite la gestione groupage, è possibile raggruppare le spedizioni di diversi clienti o fornitori in un'unica unità di trasporto.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendario</Link></p>
        <p>Consente di pianificare e gestire in modo efficiente le attività operative e logistiche, ottimizzando le risorse e migliorando il coordinamento delle spedizioni.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/motorvehicles/motorvehicle-management">Automezzi</Link>
        <p><Link to="/docs/logistics/motorvehicles/motorvehicle" className="bold-link">Gestione automezzo</Link></p>
        <p>Fondamentale per ottimizzare l'uso, la manutenzione e la sicurezza dei veicoli aziendali.</p>
        <p><Link to="/docs/logistics/motorvehicles/material-consumption/material-consumption-filter" className="bold-link">Consumo materiali</Link></p>
        <p>Gestisce i movimenti realizzati per il consumo dei materiali legati agli automezzi.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">WMS</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Acquisti</Link></p>
        <p>Consente l’identificazione e il caricamento preciso delle merci in arrivo generando il Documento di Trasporto (DDT) e se necessario, di gestire anche le unità di carico.</p>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Logistica</Link></p>
        <p>Permette gestire tutte le movimentazioni di magazzino e di verifica giacenze ed inventario. </p>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">UDC</Link></p>
        <p>Permette gestire tutte le movimentazioni di magazzino che impiegano unità di carico.</p>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Vendita</Link></p>
        <p>Permette gestire di gestire le spedizioni della merce ai clienti.</p>
    </div>
</div>







