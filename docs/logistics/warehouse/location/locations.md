---
title: Ubicazioni
sidebar_position: 1
---


:::important A cosa serve
La gestione delle ubicazioni in Fluentis è un elemento cruciale per l'ottimizzazione delle operazioni di magazzino. Questo modulo consente agli utenti di strutturare le ubicazioni di stoccaggio all'interno dei magazzini secondo uno schema gerarchico, facilmente modificabile per adattarsi alle esigenze aziendali. Ogni ubicazione può essere definita in base a vari parametri, inclusi il tipo di ubicazione (ad esempio, area, ripiano, scaffale, sezione) e le sue caratteristiche fisiche come larghezza, altezza e capacità di carico.

Grazie alla creazione di un albero delle ubicazioni, gli operatori possono inserire nuove ramificazioni e visualizzare il contenuto di ciascuna ubicazione, con dettagli sugli articoli e le quantità in giacenza. La sezione degli attributi dell'ubicazione permette ulteriormente una personalizzazione, consentendo di definire requisiti specifici per le singole ubicazioni.

Questa gestione efficiente delle ubicazioni non solo migliora il controllo delle giacenze, ma supporta anche la logistica operativa, contribuendo a una gestione più agile e efficace delle scorte all'interno dell'azienda.
:::

La form consente all'operatore di creare e gestire l’albero delle ubicazioni di magazzino.

Attraverso i filtri è possibile fare una ricerca mirata secondo i parametri e visualizzare il risultato dell'interrogazione nelle griglie dei risultati. Tali risultati possono essere raggruppati per vari parametri per facilitare la lettura dei dati. L'unico parametro di filtro obbligatorio è quello del magazzino.

I risultati della ricerca sono suddivisi in due sezioni: una prima sezione in cui sono inserite le informazioni relative alle ubicazioni del magazzino, mentre nella seconda è presente il dettaglio degli articoli e attributi relativi all’ubicazione selezionata.

*Le informazioni relative alla prima sezione della finestra, nel dettaglio sono:*

**Ubicazione**: Indica l’ubicazione di magazzino;

**Codice**: indica il codice dell’ubicazione di magazzino;

**Descrizione**: indica la descrizione dell’ubicazione di magazzino;

**Tipo ubicazione**: indica il codice del tipo dell’ubicazione di magazzino;

**Descrizione tipo ubicazione**: indica la descrizione del tipo dell’ubicazione di magazzino;

**Stato ubicazione**: indica il codice dello stato dell’ubicazione di magazzino;

**Descrizione stato ubicazione**: indica la descrizione dello stato dell’ubicazione di magazzino;

**Ubicazione gruppo**: indica che si tratta di un’ubicazione di gruppo.

Nella seconda parte della finestra nel tab *Attributi dell’ubicazione* è possibile andare ad inserire una serie di dati relativi all’ubicazione.

**Larghezza**: indica la larghezza dell'ubicazione; 

**Altezza**: indica l'altezza dell'ubicazione; 

**Profondità**: indica la profondità dell'ubicazione; 

**Portata**: indica la portata dell'ubicazione; 

**Priorità**: indica la priorità dell'ubicazione; 

**Numero strati**: indica il numero massimo di strati che è possibile caricare nell'ubicazione; 

**Tipo unità di carico**: indica il tipo di unità di carico che è possibile caricare nell'ubicazione;

**Numero unità di carico**: indica il numero di unità di carico che è possibile caricare nell'ubicazione;

**Scorta minima**: indica la scorta minima per quell'ubicazione;

**Scorta massima**: indica la scorta massima per quell'ubicazione.
  
Inoltre, nell'expander *Parametri* possono essere anche attivati i seguenti flag relativi alla singola ubicazione:

**Mono articolo**: se attivo indica che l’ubicazione è mono articolo; quindi, non sarà possibile movimentare su quell’ubicazione un articolo diverso da quello già presente;

**Mono lotto**: se attivo indica che l’ubicazione è mono lotto; quindi, non sarà possibile movimentare su quell’ubicazione uno stesso articolo con lotto diverso da quello già presente;

**Attiva**: se attivo, indica che l’ubicazione è attiva;

**Bloccata**: se attivo, indica che l’ubicazione è bloccata (quindi è una giacenza non disponibile);

**Prenotata**: se attivo, indica che l’ubicazione è prenotata;

**Di stock**: se attivo, indica che l’ubicazione è di tipo di stock (usato nelle personalizzazioni);

**Di pick**: se attivo, indica che l’ubicazione è di tipo di picking (usato nelle personalizzazioni);

**Obsoleta**: se attivo, indica che l’ubicazione è obsoleta.

Nel tab **Articoli** è possibile vedere quali sono gli articoli caricati su quell’ubicazione.

*Pulsanti specifici*:

> **Ricerca**: permette di ricercare i dati;   
> **Cancella ubicazione**: permette di cancellare una riga delle ubicazioni;   
> **Inserisci ubicazione figlia**: questo pulsante compare nella Ribbon bar dopo aver effettuato la ricerca; permette di inserire una nuova ubicazione figlia rispetto alla riga selezionata;   
> **Inserisci ubicazione padre**: questo pulsante compare nella Ribbon bar dopo aver effettuato la ricerca; permette di inserire una nuova ubicazione padre rispetto alla riga selezionata;   
> **Replica attributi**: questo pulsante compare nella Ribbon bar dopo aver effettuato la ricerca; permette di replicare gli attributi.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).