---
title: Ricerca UDC e Visualizzazione trasferimenti UDC
sidebar_position: 2
---

:::important A cosa serve
La gestione delle Unità Di Carico (UDC) in Fluentis consente agli operatori di gestire l'intero ciclo di vita delle UDC, dalla loro creazione alla movimentazione, fino alla vendita. Le UDC possono essere create manualmente o tramite WMS Mobile, rendendo il sistema versatile e adattabile alle diverse necessità operative.

La procedura di gestione offre un filtro dettagliato per visualizzare tutte le UDC create, consentendo di controllare lo stato di carico e scarico delle unità. Ogni UDC è identificata da una chiave univoca composta da anno, gruppo e numero, e le informazioni relative a dimensioni e peso possono essere modificate in base alle esigenze specifiche.

Inoltre, il modulo consente di gestire il dettaglio articoli all'interno di ogni UDC, facilitando l'associazione con ordini clienti e la registrazione dei movimenti di magazzino. Operazioni come il carico, lo scarico, e il trasferimento di UDC tra ubicazioni sono gestite con flessibilità, assicurando che i dati siano sempre aggiornati e accurati. Grazie a queste funzionalità, la gestione UDC di Fluentis contribuisce a migliorare l'efficienza operativa e la tracciabilità delle giacenze.
:::

### Ricerca UDC

La form si apre tramite il percorso **Logistica > Gestione UDC**.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

:::note Nota
In apertura della form i flag *Carico* e *Scarico*, presenti nel filtro, non sono spuntati, quindi verranno visualizzate solo le UDC che non sono ancora state caricate.
Mentre attivando il flag *Carico* verranno visualizzate solo le UDC caricate e abilitando anche il flag *Scarico* si vedranno solo le UDC che sono state anche scaricate.
:::

Nel caso in cui un'*Unità di carico* sia stata inserita in una *lista di consegna o di trasferimento*, nella griglia dei risultati vengono visualizzati il numero e la data della lista. 

Inoltre, è interessante notare che è anche possibile ricercare le UDC per ordine cliente a cui sono state collegate.

Da questa form, è possibile effettuare il carico delle UDC selezionandole e premendo il tasto **Carico UDC** e anche lo scarico (solo se già caricata e presente in una lista) tramite il pulsante **Scarico UDC**.

:::note ATTENZIONE
Se si desidera trasferire articoli dal magazzino direttamente all'interno dell'unità di carico, utilizzando una causale di carico per inserire gli articoli nell'unità e una contropartita di scarico per rimuoverli dal magazzino, è importante ricordare di spostare prima gli articoli nell'ubicazione indicata nella causale di contropartita.
:::

*Pulsanti specifici*:

> **Nuovo**: il pulsante permette di [Creare un nuovo UDC](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> **Reso cliente**: permette di creare una nuova *Unità di carico*, utilizzando come *Tipo UDC* quella con il flag *Per Reso* abilitato e tutte le altre proprietà sono copiate dall'*Unità di carico* originale; questo pulsante si abilita solo per righe che sono caricate e consegnate;  
> **Inserimento ordini in UDC**: permette di inserire gli articoli di un ordine cliente all'interno di una *Unità di carico*. Questa procedura crea un legame tra l'UDC e l'Ordine cliente;  
> **Carico UDC**: esegue la procedura di creazione di registrazione/movimento di carico dell'*Unità di carico*;          
> **Scarico UDC**: esegue la procedura di creazione di registrazione/movimento di scarico dell'*Unità di carico*; questo è abilitato solamente se l'*Unità di carico* è presente in una lista di prelievo UDC;            
> **Visualizza registrazione di carico**: apre la registrazione di magazzino del carico UDC;  
> **Visualizza registrazione di scarico**: apre la registrazione di magazzino dello scarico UDC;  
> **Rollback carico UDC**: se l'UDC è caricata esegue il rollback della registrazione di magazzino di carico;  
> **Rollback scarico UDC**: se l'UDC è caricata e scaricata esegue il rollback della registrazione di magazzino di scarico;  
> **Aggiungi/togli articoli**: permette all'utente di aggiungere o rimuovere un articolo dall'*Unità di carico* selezionata; inoltre, l'utente ha la possibilità di rimuovere un articolo da un'altra *Unità di carico* e di aggiungerlo a quella selezionata. questo pulsante è abilitato per le righe caricate, non consegnate, non legate a *Picking* o *Liste di trasferimento* e non legate a dichiarazioni di produzione;    
> **Sposta UDC**: permette di spostare l'UDC da un'ubicazione ad un'altra;  
> **Rollback stampa**: permette di settare il flag di stampa a "False"; questo pulsante è abilitato solo per le righe non caricate e non legate a dichiarazioni di produzione.      

### Visualizzazione trasferimenti UDC

La procedura è stata disegnata per permettere all'utente di interrogare facilmente il magazzino UDC con lo scopo di tenere sotto controllo le giacenze e avere in un tempo di interrogazione minimo tutte le informazioni relative alle UDC presenti a magazzino e che sono state trasferite o meno tra magazzini.
