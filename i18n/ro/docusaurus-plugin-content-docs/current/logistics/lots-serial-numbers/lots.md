---
title: Ricerca lotti
sidebar_position: 2
---

La form si apre tramite il percorso **Logistica > Anagrafica lotti** e consente di ricercare tutti i lotti con lo scopo di visualizzarli e modificarli.

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.

Per aprire i dettagli di un documento, basterà selezionarlo e fare doppio click con il mouse, oppure cliccare sul pulsante **Modifica**.

#### Pulsanti specifici

> **Modifica**: il pulsante permette di [Modificare un lotto inserito](/docs/logistics/lots-serial-numbers/lots-register);    
> **Cancella**: permette la cancellazione del lotto se questo non è referenziato in alcun documento. 

#### Filtri specifici  

**Tutti**: attivando questo flag l'utente può filtrare tutti i lotti presenti nel database;  
**Non chiusi**: attivando questo flag l'utente può filtrare solo i lotti aperti, ovvero solo i lotti di cui esiste ancora una giacenza a magazzino;  
**Chiusi**: attivando questo flag l'utente può filtrare solo i lotti chiusi, ovvero solo i lotti la cui giacenza risulta uguale a zero.  

#### Campi specifici  
*Nota*: Click sul segno **+** per aprire il dettaglio della riga.

**Chiuso**: il flag, se attivo, evidenzia che la giacenza è uguale a zero;  
**Quantità**: la colonna visualizza la quantità iniziale del lotto per ciascun magazzino;  
**Quantità disponibile**: la colonna visualizza la quantità disponibile per ciascun magazzino del lotto, ossia la quantità in giacenza meno la quantità impegnata nei vari documenti. La quantità disponibile può anche essere visualizzata come uguale a zero nel caso in cui il lotto si trovi in uno stato 'non disponibile per prelievi automatici';  
**Stato lotto**: la colonna visualizza lo stato del lotto. Si tratta di un dato che potrebbe anche non essere gestito;  
**Magazzino**: la colonna visualizza il codice del magazzino su cui si trova il lotto.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).