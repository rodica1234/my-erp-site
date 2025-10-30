---
title: Calendario
sidebar_position: 4
---

:::important A cosa serve
Il **planning** delle spedizioni è uno strumento fondamentale per ottimizzare la gestione logistica all'interno di un'azienda. Esso consente di pianificare, monitorare e coordinare tutte le attività legate alla spedizione delle merci, garantendo una distribuzione efficiente delle risorse e un'ottimizzazione dei tempi.      
Grazie alla visualizzazione di dati cruciali come orari, vettori, automezzi e clienti, il **planning** facilita la programmazione delle attività quotidiane, riducendo i ritardi e migliorando la puntualità delle consegne. Inoltre, integrando funzionalità come la gestione dei periodi di inattività e l'aggiornamento dello stato delle spedizioni, offre un quadro completo e aggiornato delle operazioni logistiche, favorendo una migliore capacità decisionale e una maggiore efficienza operativa.
:::

Il calendario delle spedizioni si trova in: Logistica > Spedizioni > Calendario

Il **calendario delle spedizioni** mostra tutte le spedizioni inserite a sistema, raggruppate in vista timeline in base a autista/vettore/automezzo/cliente/nessun raggruppamento.              
All'apertura l'intervallo visualizzato sarà data odierna + 7 giorni se sono presenti spedizioni in tal periodo, altrimenti verrà mostrato il primo intervallo successivo in cui sono presenti spedizioni. 

Oltre alle spedizioni, nel caledario sono mostrati i periodi di inattività degli automezzi e dei vettori. 

Nella colonna a sinistra sono presenti i dati relativi a **autista/vettore/automezzo/cliente in base al raggruppamento scelto**, e nella griglia del calendario sono posizionate le varie spedizioni.            
Anche se la durata della spedizione è anche solo di un'ora, nel calendario questa verrà mostrata come giornaliera, per facilitarne la visualizzazione. Nel caso si volesse invece avere una vista più puntuale, dalla ribbon bar cliccare su **Vista timeline oraria**.                    
In questo modo la spedizione verrà mostrata con la dimensione effettivamente corrispondente alla sua durata. Questa opzione può essere utile nel caso si utilizzi lo zoom in/zoom out (ctrl + scroll del mouse) per andare nel massimo dettaglio orario della giornata.               
Per tornare alla visualizzazione delle spedizioni in modalità giornaliera, cliccare sul bottone **Vista timeline giornaliera** nella ribbon bar.

Nella ribbon sono inoltre presenti i seguenti pulsanti: 

- Ricerca: effettua un refresh della visualizzazione

- Visualizza per vettore: nella colonna a sinistra verranno mostrati prima tutti i vettori e le relative spedizioni; se nelle righe di groupage non è presente il vettore, verrà considerato il vettore presente nella testata della spedizione. 
>> Se il vettore non è indicato da alcuna parte, in coda alla lista dei vettori mostrati, verranno elencati i relativi autisti; se non presenti gli autisti nelle righe di groupage, verrà considerato l'autista presenti nella testata della spedizione. 
>> Se l'autista non è indicato da alcuna parte, in coda alla lista dei vettori mostrati, verranno elencati i clienti.

- Visualizza per autista: nella colonna a sinistra verranno mostrati prima tutti gli autisti e le relative spedizioni; se nelle righe di groupage non è presente l'autista verrà considerato il l'autista presente nella testata della spedizione. 
>> Se l'autista non è indicato da alcuna parte, in coda alla lista degli autisti mostrati, verranno elencati i relativi vettori; se non presenti i vettori nelle righe di groupage, verrà considerato il vettore presente nella testata della spedizione. 
>> Se il vettore non è indicato da alcuna parte, in coda alla lista degli autisti mostrati, verranno elencati i clienti.

- Visualizza per cliente: nella colonna a sinistra verranno mostrati tutti i clienti; se non presenti, ci sarà una voce di tipo "altro" che raggrupperà tutte le spedizioni senza cliente assegnato. 

- Visualizza per automezzo: nella colonna a sinistra verranno mostrati tutti gli automezzi; se nelle righe di groupage non è presente l'automezzo, verrà considerato l'automezzo presente nella testata della spedizione. 
>> se non presente, ci sarà una voce di tipo "altro" che raggrupperà tutte le spedizioni senza automezzo assegnato. 

- Nessun raggruppamento: verrà mostrato un calendario per tipo spedizione.

Con il tasto destro è possibile inserire una nuova spedizione, oppure un periodo di inattività per autista o automezzo. 

A sinistra sono presenti i filtri per: 
- tipo trasporto: mittente, destinatario, vettore
- automezzo
- targa
- numero di tracking
- cliente
- vettore
- autista
- Riferimento ordini cliente
- Sito produttivo

I colori delle spedizioni rappresentano lo [Stato della spedizione](/docs/configurations/tables/logistics/shipping-states).       
Con tasto destro sulla spedizione, è possibile avanzare lo stato. 

I colori assegnati all'elenco di autisti/automezzi/vettori/clienti sono casuali e vengono assegnati all'apertura del calendario, fino al prossimo cambio vista.






