---
title: Introduzione
sidebar_position: 1
---

Questo nuovo strumento è stato sviluppato per ottimizzare e semplificare il processo di spedizione, consentendo un controllo più efficace e integrato di tutte le attività logistiche.
La **gestione spedizioni** di Fluentis include la funzione di **groupage**, che permette di consolidare diverse spedizioni di merci provenienti da vari mittenti ma dirette verso la stessa area geografica in un unico carico o container.       
Ciò consente di utilizzare in modo più efficiente lo spazio disponibile sui mezzi di trasporto, come camion, container marittimi o aerei, e di offrire un servizio più economico rispetto alla spedizione di singole merci.         
In aggiunta, è stato implementato un **avanzato strumento di pianificazione** che consente di visualizzare le spedizioni per mezzo, autista, vettore e cliente. Grazie a una semplice funzionalità di drag & drop, gli operatori possono facilmente organizzare le spedizioni, anticipandole o posticipandole, e modificare il mezzo o l'autista incaricato, garantendo una gestione più flessibile e reattiva.

## Moduli dell'area 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Spedizioni</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Spedizioni</Link></p>
        <p>Tramite la gestione groupage, è possibile raggruppare le spedizioni di diversi clienti o fornitori in un'unica unità di trasporto.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendario</Link></p>
        <p>Consente di pianificare e gestire in modo efficiente le attività operative e logistiche, ottimizzando le risorse e migliorando il coordinamento delle spedizioni.</p>
    </div>
</div>

## Per iniziare ad utilizzare   

le **Spedizioni**:
- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) 
- definire un [*Tipi di spedizione*](/docs/configurations/tables/logistics/shipping-type)        
- definire un [*Stati di spedizione*](/docs/configurations/tables/logistics/shipping-states)     
- definire gli [*Automezzi*](/docs/logistics/motorvehicles/motorvehicle)   
- definire gli [*Autisti automezzo*](/docs/logistics/motorvehicles/motorvehicle-drivers)      
- definire i [*Motivi di fermo autoveicolo*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)     
- definire i [*Motivi di assenza del conducente*](/docs/configurations/tables/logistics/driver-off-time-reasons) 
- definire le [*Patenti di guida automezzi*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)     
- definire il tipo [*Proprietà automezzi*](/docs/configurations/tables/logistics/motorvehicle-ownership)   
- definire i [*Marchi automezzi*](/docs/configurations/tables/logistics/motorvehicle-brands)   
- definire i [*Tipo carburante automezzo*](/docs/configurations/tables/logistics/motorvehicle-gas-type)  
- definire i [*Tipi automezzi*](/docs/configurations/tables/logistics/motorvehicle-Type)  

## Collegamenti con altri moduli
Questi sono strettamente collegati all'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) e agli [*Ordini clienti*](/docs/sales/sales-orders/settings) dato che è possibile aggiungere gli articoli direttamente da un ordine.           
Inoltre da una spedizione è possibile creare direttamente [*DDT*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn), [*Fatture*](/docs/sales/sales-invoices/general-overview) di vendita ed anche [Picking](/docs/logistics/picking/picking-intro). 