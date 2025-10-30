---
title: Nuovo automezzo
sidebar_position: 2
---

La tabella si trova sul percorso **Logistica > Automezzi > Nuovo automezzo**.

In questa tabella è possibile codificare i diversi *Automezzi* utilizzati e le dimensioni di ciascuno di essi.

Un esempio di utilizzo degli automezzi codificati in questa tabella lo si trova nei [Piani di Carico](/docs/logistics/load-plans/create-plan/), nel tabulatore *Preparazione piano di carico*.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Automezzi**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Automezzi**

Per poter inserire nuovi *Automezzi* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: 

- **Tipo automezzo**: indica la tipologia del mezzo inserita nella tabella [Tipo automezzo](/docs/configurations/tables/logistics/motorvehicle-Type);          
- **Codice**: indica il codice del mezzo;       
- **Targa**: indica il numero di targa del mezzo;      
- **Data registrazione**: indica la data di registrazione del mezzo;          
- **Tipo carburanti autoveicolo**: indica il [Tipo di carburante](/docs/configurations/tables/logistics/motorvehicle-gas-type) usato dal mezzo.

Inoltre è possibile inserire non obbligatori, tra cui:

- **Marca**: indica la marca del mezzo presente nella tabella [Marchi automezzi](/docs/configurations/tables/logistics/motorvehicle-brands);             
- **Modello**: indica il modello del mezzo presente nella tabella [Marchi automezzi](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Data inizio**: indica la data di inizio di utilizzo dell'automezzo;     
- **Data scadenza contratto**: indica la data di scadenza del contratto dell'automezzo;     
- **Data chiusura**: indica la data dalla quale non è più possibile utilizzare l'automezzo;     
- **Descrizione**: permette di inserire una descrizione libera dell'automezzo;       
- **Conto**: permette di inserire il conto del cliente dell'automezzo;        
- **Proprietà autoveicolo**: permette di indicare la tipologia [Proprietà dell'autoveicolo](/docs/configurations/tables/logistics/motorvehicle-ownership);        
- **Autista assegnato**: permette di indicare l'[Autista assegnato](/docs/logistics/motorvehicles/motorvehicle-drivers) all'automezzo;        
- **Filiale aziendale**: permette di indicare la filiale aziendale;        
- **Progetto**: permette di indicare il progetto assegnato all'automezzo.        

Una volta terminato l'inserimento dei valori di testata, nella parte inferiore della form sono presenti i seguenti tab:

**Dettagli** dell'automezzo, che contiene i seguenti valori:

- **Vano**: indica il vano dell'automezzo;                  
- **Targa**: indica la targa dell'automezzo;             
- **Unità di misura portata**: indica la capacità massima dell'automezzo espressa nell'**Unità di misura portata**;         
- **Portata massima**: indica la capacità massima dell'automezzo espressa nell'**Unità di misura portata**;                  
- **Unità di misura dimensioni**: indica l'unità di misura con cui sono espresse **Altezza**, **Larghezza**, **Profondità** e le relative tolleranze;      
- **Altezza**: indica l'altezza dell'automezzo espresso nell'**Unità di misura dimensioni**;         
- **Larghezza**: indica la larghezza dell'automezzo espresso nell'**Unità di misura dimensioni**;                 
- **Profondità**: indica la profondità dell'automezzo espresso nell'**Unità di misura dimensioni**;                 
- **Tolleranza in altezza**: indica la tolleranza in altezza dell'automezzo espresso nell'**Unità di misura dimensioni**;           
- **Tolleranza in larghezza**: indica la tolleranza in larghezza dell'automezzo espresso nell'**Unità di misura dimensioni**;       
- **UM volume**: indica l'unità di misura con cui è espresso il **Volume**;                    
- **Volume**: indica il volume dell'automezzo espresso nell'**Unità di misura volume**;                 
- **Numero unità di carico contenibili**: indica il numero massimo di unità di carico che possono essere contenute nell'automezzo;
- **Numero strati**: indica il numero di strati che possono essere caricati nell'automezzo.

**Periodo inattività automezzo** che permette di inserire i periodi di inattività del mezzo, i quali verranno riportati nel [Planning](/docs/logistics/shipping/calendar).
Quindi si possono inserire i seguenti valori:

- **Descrizione**: permette di indicare la descrizione del periodo di inattività dell'automezzo;          
- **Da data**: permette di indicare la data di inizio del periodo di inattività dell'automezzo;          
- **A data**: permette di indicare la data di fine del periodo di inattività dell'automezzo;          
- **Motivo**: permette di inserire la motivazione codificata in [Motivi di assenza del conducente](/docs/configurations/tables/logistics/driver-off-time-reasons/)

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
