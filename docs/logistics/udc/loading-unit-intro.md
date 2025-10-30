---
title: Introduzione
sidebar_position: 1
---

Il modulo delle UDC consente all'operatore di gestire le unità di carico, la loro creazione, la loro movimentazione nel magazzino e la loro vendita. 
Le UDC possono essere create manualmente oppure da WMS Mobile. Normalmente le UDC sono utilizzate dalle aziende che gestiscono il magazzino in bancali oppure che, in fase di vendita, creano una UDC di spedizione con all'interno tutti gli articoli da spedire.

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">UDC</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Gestione UDC</Link></p>
        <p>Consente agli operatori di gestire l'intero ciclo di vita delle UDC, dalla loro creazione alla movimentazione, fino alla vendita. Le UDC possono essere create manualmente o tramite WMS Mobile, rendendo il sistema versatile e adattabile alle diverse necessità operative.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista di prelievo UDC / Packing list</Link></p>
        <p>Offre un metodo innovativo per gestire il prelievo di unità di carico, in contrapposizione alla tradizionale procedura di picking che si basa su singoli articoli. Questa funzionalità è particolarmente utile quando si desidera spedire merce a un cliente, consentendo di raggruppare articoli all'interno di unità di carico predefinite.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista di trasferimento UDC</Link></p>
        <p>Permette gestire le movimentazioni delle Unità Di Carico all'interno dei propri magazzini, offrendo un metodo sistematico e intuitivo per il trasferimento di merce. A differenza della Lista di Prelievo UDC, che è utilizzata per la spedizione ai clienti, la lista di trasferimento si concentra sull'ottimizzazione dei flussi interni delle UDC tra le varie ubicazioni del magazzino.</p>
    </div>
</div>

## Per iniziare ad utilizzare   

la **Gestione UDC**:
- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) e definirne i parametri nel tab [Confezionamento](/docs/erp-home/registers/items/create-new-item)        
- definire un [*Tipo gruppo UDC*](/docs/configurations/tables/logistics/loading-unit-group-type/)        
- definire un [*Tipo UDC*](/docs/configurations/tables/logistics/loading-unit-types/)  
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare       
- definire i [*Parametri iniziali di magazzino*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- creare un dipendente nella tabella [Dipendenti](/docs/project-management/registers/employee/new-employee/)

inoltre, per **Lista di prelievo UDC / Packing list** e **Lista di trasferimento UDC**:
- definire un [*Tipo picking*](/docs/configurations/tables/logistics/picking-type/)      

## Collegamenti con altri moduli
Questi sono strettamente collegati all'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item), alle [*Registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) ed a tutti i documenti che generano movimenti di carico e scarico con le unità di carico.   
