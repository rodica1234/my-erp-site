---
title: Introduzione
sidebar_position: 0
---

Nella gestione logistica di Fluentis, gli articoli possono essere tracciati e gestiti sia attraverso **Lotti** che **Serial number**. I lotti rappresentano gruppi omogenei di articoli, sia in entrata che in uscita, consentendo una gestione efficace delle scorte e garantendo la rintracciabilità nel corso del processo produttivo e distributivo. Ogni lotto viene identificato da un codice univoco, che permette di reperire informazioni dettagliate relative alle specifiche del lotto stesso, inclusi dati essenziali per la conformità normativa.

D’altra parte, i numeri seriali sono utilizzati per identificare in modo univoco ciascun pezzo, risultando particolarmente utili per articoli di alto valore o critici. Questo approccio consente una gestione precisa, che facilita il monitoraggio e la registrazione di ogni singolo articolo in magazzino. L'integrazione di questi sistemi all'interno della piattaforma Fluentis ottimizza la tracciabilità e migliora l'efficienza operativa nella gestione dell'inventario.         

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-register">Anagrafica lotti</Link>
        <p>L'anagrafica lotti di Fluentis è uno strumento fondamentale per la gestione e tracciabilità dei lotti.</p> 
        <p>Gli utenti possono facilmente cercare e visualizzare i dettagli di ogni lotto con un semplice doppio clic, facilitando il monitoraggio delle giacenze.</p> 
        <p>Il sistema gestisce vari stati lotto, influenzando la disponibilità operativa.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Anagrafica serial number</Link>
        <p>L'anagrafica serial number di Fluentis è un modulo fondamentale per la gestione dei serial number, che consente alle aziende di tracciare articoli singoli tramite un codice identificativo unico.</p> 
        <p>Questa funzionalità è cruciale per esigenze di rintracciabilità e sicurezza, specialmente per articoli critici o di alto valore. L'anagrafica include anche informazioni sui documenti di carico e scarico associati, fornendo un'analisi completa dell'utilizzo nel tempo.</p> 
        <p>Questo approccio sistematico ottimizza i processi interni e assicura la compliance alle normative, rendendo l'anagrafica uno strumento indispensabile per le aziende moderne orientate all'efficienza operativa e alla qualità del servizio.</p>
    </div>
</div>

## Per iniziare ad utilizzare   

l'**Anagrafica lotti**:
- definire un [*Tipo codice lotto*](/docs/configurations/tables/logistics/lot-codes-types)      
- definire i parametri per il singolo articolo nel tab [*Lotti e Serial number*](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articolo        
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare
- creare un documento o una [*Registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) di carico o scarico con un articolo gestito a lotti in modo da poter visualizzare il risultato nell'**Anagrafica lotto**

l'**Anagrafica Serial number**:
- definire un [*Tipo codice serial number*](/docs/configurations/tables/logistics/serial-numbers-code-type)      
- definire i parametri per il singolo articolo nel tab [*Lotti e Serial number*](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articolo        
- definire correttamente le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare
- creare un documento o una [*Registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) di carico o scarico con un articolo gestito a serial number in modo da poter visualizzare il risultato nell'**Anagrafica Serial number**

## Collegamenti con altri moduli
Questi sono strettamente collegati all'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item), alle [*Registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) ed a tutti i documenti che generano movimenti di carico e scarico.   
