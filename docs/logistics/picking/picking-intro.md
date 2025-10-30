---
title: Introduzione
sidebar_position: 1
---

L'introduzione alla gestione picking di Fluentis si concentra sulla creazione e gestione efficiente delle liste di prelievo per ottimizzare le operazioni logistiche all'interno delle aziende. Il sistema permette di generare picking da singoli articoli attraverso procedure semplici e veloci, come l'inserimento automatico degli articoli tramite ordini clienti che facilita il processo di evasione.
I picking possono essere introdotti manualmente oppure automaticamente per esempio dai piani di carico. A partire dal Picking è possibile creare un documento di trasporto o la fattura.
La gestione picking di Fluentis rappresenta un elemento cruciale per l'ottimizzazione delle operazioni logistiche, garantendo efficienza e un elevato livello di controllo sui processi di prelievo e movimentazione degli articoli.

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-management">Picking</Link>
        <p>Questa funzionalità consente agli utenti di generare liste di prelievo in modo efficiente, partendo dalle diverse tipologie di picking configurabili nel sistema. Attraverso la creazione di un picking, gli operatori possono selezionare gli articoli da evadere, definendo dettagli cruciali come la quantità e la ubicazione di prelievo.</p> 
    </div>
</div>

## Per iniziare ad utilizzare   

il **Picking**:
- definire un [*Tipo picking*](/docs/configurations/tables/logistics/picking-type/)      
- definire i [*Parametri picking*](//docs/configurations/parameters/logistics/picking-parameters/)        
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare
- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)

## Collegamenti con altri moduli
E' possibile generare un picking manualmente, ma anche da una [Liste prelievo materilali](/docs/production/pp-production-in-progress/picking-materials-list).
Inoltre da un picking è possibile creare direttamente [DDT](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) e [Fatture](/docs/sales/sales-invoices/general-overview) di vendita.   