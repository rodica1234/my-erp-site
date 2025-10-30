---
title: Introduzione
sidebar_position: 1
---

Il modulo consente all'operatore di creare le liste inventariali, popolarle e confrontare i dati sulle giacenze fisiche con le giacenze logiche. Il sistema, in modo automatico e secondo i parametri inseriti dall'utente, procederà all'allineamento delle giacenze logiche con quelle fisiche allineando quindi il magazzino informatico a quello fisico. Una volta effettuata questa operazione sarà poi possibile passare alla valorizzazione del magazzino.

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventari fisici</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventari fisici</Link></p>
        <p>Permette agli operatori di creare liste inventariali, effettuare rilevazioni delle giacenze fisiche e confrontare i dati ottenuti con le giacenze logiche presenti nel sistema. Attraverso un processo automatizzato, Fluentis facilita l'allineamento tra le giacenze fisiche e quelle logiche, garantendo così un'accurata ottimizzazione della gestione delle risorse.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Differenze inventariali</Link></p>
        <p>Garantisce un efficace allineamento tra le giacenze fisiche e logiche all'interno del magazzino. Questa funzionalità consente agli operatori di gestire e registrare le discrepanze identificate in modo sistematico, assicurando che ogni movimento di magazzino sia tracciato e contabilizzato in modo accurato.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Storico chiusura</Link></p>
        <p>Consente un accesso ai dati storicizzati relativi alle chiusure di magazzino, permettendo agli operatori di monitorare e analizzare le variazioni delle giacenze nel tempo. Questa funzionalità consente di consultare informazioni dettagliate come il costo ultimo, il costo medio e le giacenze di magazzino, tutte realizzate tramite la procedura di valorizzazione.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Storico magazzino</Link></p>
        <p>Permette agli utenti di consultare i dati storicizzati relativi alle operazioni di magazzino. Questa funzionalità consente di visualizzare un archivio dettagliato delle chiusure e delle valorizzazioni effettuate nel tempo, offrendo la possibilità di analizzare informazioni come il costo ultimo e medio di ciascun articolo, nonché le giacenze specifiche associate a ogni chiusura.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorizzazione magazzino</Link></p>
        <p>Permette agli operatori di effettuare chiusure di magazzino a una data specificata, registrando le rimanenze e consentendo l'allineamento delle informazioni logistiche con quelle contabili, garantendo così una gestione accurata delle risorse e dei costi associati.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventario quantità valorizzato</Link></p>
        <p>Garantisce alle aziende di avere una visione chiara e dettagliata delle proprie scorte. Attraverso questo report, gli utenti possono accedere a informazioni complete non solo sulle quantità fisiche degli articoli presenti in magazzino, ma anche sul loro valore</p>
    </div>
</div>

## Per iniziare ad utilizzare   

gli **Inventari fisici**:
- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)        
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare       
- definire i [*Parametri iniziali di magazzino*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          
- definire i [*Parametri differenze inventariali*](/docs/configurations/parameters/logistics/stock-difference/)           
- definire un [*Tipo lista inventariale*](/docs/configurations/tables/logistics/stock-lists-types/)        
- creare un dipendente nella tabella [Dipendenti](/docs/project-management/registers/employee/new-employee/)


## Collegamenti con altri moduli
Dalle [*Registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) è possibile visualizzare i risultati dell'**inventario** e delle **chiusure di magazzino**.
