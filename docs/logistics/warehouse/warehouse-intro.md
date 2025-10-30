---
title: Introduzione
sidebar_position: 1
---

Le registrazioni di magazzino rappresentano un elemento cruciale nella gestione operativa delle merci, consentendo un monitoraggio accurato dei movimenti e delle giacenze.     
Questo processo è fondamentale per garantire che le quantità di articoli in entrata e in uscita siano sempre aggiornate e corrispondano alla realtà fisica del magazzino.     
In concomitanza, la gestione delle ubicazioni offre un ulteriore livello di precisione, consentendo di classificare gli articoli in diverse aree, come ripiani e sezioni, all'interno di un magazzino. Utilizzando uno schema d'albero modificabile, gli operatori possono assegnare tipologie di ubicazione specifiche e definire parametri chiave come larghezza, altezza e capacità, migliorando l'efficienza nella movimentazione e nel prelievo degli articoli.       
La corretta integrazione delle registrazioni di magazzino con le informazioni sulle ubicazioni consente di ottimizzare il flusso delle merci e di facilitare una gestione logistica fluida e reattiva.

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/record">Magazzino</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Registrazioni</Link></p>
        <p>Garantisce la gestione efficiente delle operazioni logistiche, permettendo una registrazione accurata dei movimenti all'interno del sistema. Le registrazioni possono essere create automaticamente attraverso diverse procedure, come carico di documenti (ad esempio, DDT e fatture di acquisto) o scarico (tramite DDT e fattura di vendita). Questo processo non solo semplifica l'inserimento dei movimenti, ma garantisce anche la sincronizzazione delle informazioni tra i vari documenti operativi.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Ubicazioni</Link></p>
        <p>Consente agli utenti di strutturare le ubicazioni di stoccaggio all'interno dei magazzini secondo uno schema gerarchico, facilmente modificabile per adattarsi alle esigenze aziendali. Ogni ubicazione può essere definita in base a vari parametri, inclusi il tipo di ubicazione (ad esempio, area, ripiano, scaffale, sezione) e le sue caratteristiche fisiche come larghezza, altezza e capacità di carico.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Stampe gestionali</Link></p>
        <p>Queste stampe permettono agli operatori di effettuare controlli accurati e di prendere decisioni informate riguardo all'approvvigionamento, alla gestione delle giacenze e all'analisi dei movimenti di articoli. Grazie a report personalizzabili e a diversi filtri, gli utenti possono ottenere informazioni dettagliate su:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Articoli non movimentati</Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Stampe etichette</Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Sottoscorta</Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Indice di rotazione</Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Stampe contabili</Link></p>
        <p>Queste stampe forniscono report dettagliati sui movimenti in entrata e uscita, permettendo una registrazione accurata delle transazioni. Ogni template di stampa può essere personalizzato per ottenere informazioni specifiche, garantendo la conformità e la trasparenza nella gestione dei beni. gli utenti possono tracciare i movimenti e gestire le registrazioni contabili con facilità, attraverso strumenti come:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection"className="bold-link">Selezione movimenti</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Giornale di magazzino</Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Brogliaccio di magazzino</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Schede di movimentazione</Link></p>
    </div>
</div>

## Per iniziare ad utilizzare   

le **Registrazioni di magazzino**:
- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)        
- definire i [*Magazzini*](/docs/configurations/tables/logistics/warehouses)    
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare       
- definire i [*Parametri iniziali di magazzino*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          

le **Ubicazioni**:
- definire i [*Tipi ubicazioni*](/docs/configurations/tables/logistics/locations-types)  
- definire gli [*Stato ubicazioni*](/docs/configurations/tables/logistics/location-status)                
- definire l'albero delle [Ubicazioni](/docs/logistics/warehouse/location/locations)


## Collegamenti con altri moduli
Le [*Registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) sono legate a tutti i documenti che generano movimenti di carico e/o scarico.
