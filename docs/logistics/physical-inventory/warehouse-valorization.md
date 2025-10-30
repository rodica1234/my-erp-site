---
title: Valorizzazione magazzino
sidebar_position: 6
---

:::important A cosa serve
L'introduzione alla valorizzazione di magazzino di Fluentis è un elemento fondamentale nella gestione delle scorte e nella determinazione del valore dei beni stoccati. Questa funzionalità consente agli operatori di effettuare chiusure di magazzino a una data specificata, registrando le rimanenze e consentendo l'allineamento delle informazioni logistiche con quelle contabili, garantendo così una gestione accurata delle risorse e dei costi associati.

La procedura di valorizzazione permette di configurare diversi parametri, come la causale di movimentazione per le rimanenze, e offre la flessibilità di selezionare i criteri di valorizzazione adeguati, come il costo ultimo o il costo medio. In questo modo, è possibile tenere conto delle movimentazioni effettuate nel corso dell'anno per ciascun magazzino, ottenendo così una panoramica dettagliata e aggiornata del valore delle scorte.

Inoltre, la procedura non solo esegue la chiusura di magazzino, ma crea automaticamente una registrazione di apertura per il giorno successivo, garantendo la continuità delle operazioni logistiche. Gli utenti possono anche monitorare le chiusure effettuate attraverso uno storico, che riporta i dati relativi ai costi e alle quantità valorizzate, facilitando così analisi e decisioni strategiche per il miglioramento delle performance aziendali.
:::

La procedura permette di effettuare la chiusura di magazzino ad una certa data che deve essere inserita dall'utente nel campo **Data chiusura**.
Di default, come **Data chiusura** è proposta la data odierna.
Inoltre, la procedura creerà anche un movimento di apertura con tutte le rimanenze con data uguale a **Data chiusura** più un giorno, utilizzando la causale presente nelle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates) con il flag **Rimanenze** attivo.

*Pulsanti specifici*  
> **Chiusura**: permette di lanciare la procedura di chiusura che effettua una serie di controlli sulla congruenza dei dati di magazzino segnalando eventuali errori che dovranno poi essere corretti manualmente dall'operatore prima di procedere nuovamente; nel caso in cui non vi sia nessun errore la procedura effettuerà la chiusura di magazzino alla **Data chiusura** e l'apertura il giorno successivo con le rimanenze;             
> **Crea valorizzazione**: è utilizzato nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità (vedasi documentazione sottostante);      
> **Ripristina chiusura**: permette di ripristinare l'ultima chiusura effettuata;     
> **Allineamento con la contabilità**: è utilizzato nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità (vedasi documentazione sottostante).

:::note CONSIGLIATO
L’attività di chiusura del magazzino è consigliata in particolare nel caso in cui vi sia un elevato numero di movimenti, perchè questa permette di mantenere nell’archivio i movimenti per una consultazione, ma allo stesso tempo le elaborazioni di calcolo giacenza, disponibilità e costi vengono snellite in quanto i calcoli partiranno dal giorno successivo all’ultima chiusura effettuata.
:::

<u>Le seguenti procedure sono specifiche per localizzazioni estere come Romania e Croazia.</u> 

## Crea valorizzazione

La procedura **Crea valorizzazione** calcola i prezzi e modifica i valori nei movimenti di magazzino.        
Viene utilizzata nei casi di documenti di magazzino incompleti, non finalizzati o non conciliati.     
Questo accade principalmente a causa di dati insufficienti (prezzo e quantità) durante l'inserimento dei documenti di magazzino, errori del fornitore o inserimenti errati dell'utente, ritardi nella consegna dei documenti di magazzino o inserimenti successivi di modifiche nei documenti esistenti.     
Avviando questa procedura, l'applicazione ricalcola nuovamente i nuovi valori degli articoli (FIFO) e li inserisce direttamente nel documento esistente.      
Quindi, ricapitolando, la procedura modifica i valori nei documenti esistenti, non crea nuovi documenti che rimuovono/aumentano il valore. Di conseguenza, la procedura è irreversibile e non è possibile ripristinare i dati esistenti prima dell'esecuzione della procedura.      
Questa funzionalità si applica principalmente al periodo durante il quale viene eseguita la valorizzazione.      
Il ricalcolo (FIFO) e la modifica dei valori nei documenti iniziano dalla data di chiusura del magazzino.     

:::danger ATTENZIONE
È importante prestare molta attenzione alle impostazioni nei [Parametri iniziali magazzino](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), specialmente se la data di chiusura del magazzino è nell'anno precedente.       
:::

Ad esempio, la Data inizio è il 01.10.2023, mentre la data odierna potrebbe essere, ad esempio, il 28.3.2024.       
Avviando la procedura **Crea valorizzazione**, i valori nei documenti di magazzino sarebbero modificati dal 01.10.2023 fino alla data odierna. Quindi, poiché il 2023 è passato ed è probabilmente già chiuso finanziariamente, i valori nei documenti di magazzino dal 1.10.2023 al 31.12.2023 verrebbero modificati, alterando notevolmente i report già conclusi per il 2023.      

## Allineamento con la contabilità

La procedura di **Allineamento con la contabilità** viene eseguita dopo la procedura di **Crea valorizzazione**.        
Dopo che la procedura di **Crea valorizzazione** è stata completata e i valori nei documenti di magazzino sono stati modificati, è necessario apportare modifiche anche ai documenti contabili correlati.        
In questa fase, la procedura di **Allineamento con la contabilità** allinea le modifiche apportate dalla valorizzazione del magazzino e modifica i valori nei registri contabili per garantire l'allineamento finanziario con i valori nei documenti di magazzino.       

:::danger ATTENZIONE
Anche questa procedura è irreversibile e modifica gli importi nei documenti esistenti.        
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
