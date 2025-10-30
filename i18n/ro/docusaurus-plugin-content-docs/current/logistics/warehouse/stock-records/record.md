---
title: Nuova registrazione
sidebar_position: 3
---

:::important A cosa serve
L'introduzione alle registrazioni di magazzino di Fluentis rappresenta un elemento cruciale per la gestione efficiente delle operazioni logistiche, permettendo una registrazione accurata dei movimenti di beni all'interno del sistema. Le registrazioni possono essere create automaticamente attraverso diverse procedure, come carico di documenti (ad esempio, DDT e fatture di acquisto) o scarico (tramite DDT e fattura di vendita). Questo processo non solo semplifica l'inserimento dei movimenti, ma garantisce anche la sincronizzazione delle informazioni tra i vari documenti operativi.

Ogni registrazione di magazzino permette all'operatore di specificare dettagli fondamentali quali magazzino, causale e data. La registrazione dell'articolo avviene attraverso una griglia che consente di indicare quantità e unità di misura, con l'opzione di gestire lotti e numeri di serie quando necessario. Inoltre, sono implementati diversi flag che governano la necessità di documenti obbligatori e il trattamento delle causali di contropartita, garantendo così la tracciabilità e la conformità delle operazioni di magazzino.

Un altro aspetto distintivo è la possibilità di personalizzare le registrazioni in base alle esigenze specifiche del magazzino, scegliendo tra gestioni per ubicazione, progetto o cliente/fornitore. Questa flessibilità consente di adattare il sistema alle varie configurazioni logistiche aziendali, rendendo Fluentis uno strumento potente per la gestione del magazzino
:::

La form si apre:
- tramite il percorso **Logistica > Magazzino  > Registrazioni > Nuova registrazione**  
oppure  
- cliccando sul pulsante **Nuovo** dalla form di ricerca **Registrazioni**.

## Creazione automatica della registrazione

Le registrazioni di magazzino possono essere create automaticamente mediante le *procedure di carico* di DDT di acquisto, fatture di acquisto, ricevimenti merci, mediante le *procedure di scarico* DDT di vendita, fattura di vendita, picking list, lista di prelievo materiali, DDT di consegna di conto lavoro, oppure mediante le *procedure di registrazione di segnalazioni di produzione e di rientri di conto lavoro*. 

## Creazione manuale della registrazione

L'utente può inserire anche manualmente le registrazioni di magazzino, impostando tutti i campi richiesti a seconda del tipo di articolo e del tipo di causale che si decide di utilizzare.

La finestra della nuova registrazione di magazzino consta di 2 tab: **Registrazione** e **Contropartita**.

:::note Nota
Il tab **Contropartita** risulta attivo solo se la causale che viene inserita nel primo tab ha una causale di contropartita associata nell'apposita tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates).     
:::

All'interno della registrazione di magazzino possono essere inseriti diversi movimenti di magazzino per articoli differenti e con gestioni diverse tra loro. 

## Registrazione

Questo tab è costituito da una testata e da 4 diverse griglie, la prima delle quali è quella al cui interno vengono inseriti gli articoli che vengono movimentati mediante la registrazione di magazzino; le altre 3 griglie vengono utilizzate a seconda di come sono impostate l'anagrafica dell'articolo e la causale di magazzino inserita in testata.

### Registrazione - sezione fissa

**Magazzino**: rappresenta il codice del magazzino sul quale effettuare la registrazione;  
**Causale di magazzino**: dato obbligatorio al fine dell'inserimento dei movimenti di magazzino. Si seleziona utilizzando l'apposita combo box, nella quale vengono proposte solo le causali legate al magazzino selezionato.       
**Data registrazione**: viene proposta in automatico uguale alla data corrente e identifica nello specifico il giorno in cui vengono effettuati i movimenti di magazzino che saranno poi inseriti nell'apposita griglia, quindi può anche essere modificata impostando per esempio una data precedente alla data corrente. Questa data deve però essere sempre compresa tra le date di Inizio e Fine Periodo inserite nel primo tab dei *Parametri iniziali di magazzino*;   
**Numero della registrazione**: viene proposta in automatico; è un progressivo per magazzino che si azzera ogni giorno, ripartendo automaticamente dal numero 1. Entrambi i dati sono editabili dall'utente;

:::note Nota
Dopo l'inserimento del primo articolo nella griglia, la data e il numero della registrazione diventano read-only.
:::

Dopo aver inserito questi dati, l'utente può procedere all'inserimento dei movimenti nella griglia degli articoli. Tuttavia esistono altri dati di testata che si possono compilare, e precisamente:

**Documento interno**: in questo campo l'utente può dare una specifica ulteriore riguardo al motivo per cui vene creata la registrazione. Se la registrazione è stata creata in automatico dalla registrazione di una *Segnalazione di produzione*, in questo campo compare l'indicazione riguardante il numero della segnalazione e la fase per cui la stessa è stata effettuata; nel campo data del **Documento interno** l'utente può specificare la data relativa al documento in base al quale sta inserendo la registrazione. Se la registrazione è stata creata in automatico tramite il *carico* o lo *scarico* di un documento, in questo campo viene impostata automaticamente la data di inserimento del documento.  
Se la registrazione è stata creata in automatico dalla registrazione di una *Segnalazione di produzione*, in questo campo compare la data di effettivo inizio dell'ordine di produzione per cui è stata effettuata la segnalazione di produzione.  

**Versione**: tramite questa combo box l'utente può impostare una versione diversa da quella di default, proposta comunque in automatico dalla procedura;

**Conto**: in questi 3 campi vengono specificati i relativi dati del Cliente/Fornitore: *conto*, *sottoconto*, *ragione sociale*.  
Se la registrazione è stata creata in automatico tramite il *carico* o lo *scarico* di un documento, in questo campo vengono impostati automaticamente i dati del cliente o del fornitore intestatario del documento stesso.

**Documento di riferimento**: in questo campo l'utente può specificare il documento che ha generato la registrazione stessa.  
Se la registrazione è stata creata in automatico tramite il *carico* o lo *scarico* di un documento, in questo campo viene impostata automaticamente una descrizione parametrica del documento, in cui compaiono anche la descrizione del tipo di documento ed il suo numero.  
Se la registrazione è stata creata in automatico dalla registrazione di una *Segnalazione di produzione*, in questo campo compare il numero dell'ordine di produzione per cui è stata effettuata la segnalazione di produzione.  

**Progetto**: con un doppio click si apre un *Help progetti* che permette di collegare un progetto all'intera registrazione che si sta inserendo. Essa viene poi replicata in ciascuna delle righe articolo inserite nella griglia;

**Nota**: in questo campo è possibile inserire una nota libera relativa alla registrazione di magazzino.

Come già sopra specificato, l'utente può passare a questo punto all'inserimento dei movimenti nella prima griglia, quella che conterrà gli articoli da movimentare.

### Articoli

In questa prima griglia l'utente può inserire, usando il *Help articoli*, la lista di articoli da movimentare.

**Numero movimento**: in questa colonna compare il numero progressivo del movimento. Esso parte sempre da 1 ed è un semplice progressivo che si azzera non appena si apre un'altra registrazione di magazzino. Il campo è read-only e non consente il recupero manuale dei numeri di movimento, nel caso di eliminazione manuale di righe movimento.

**Classe**: in questo campo, tramite l'apposita combo box, è possibile selezionare la classe dell'articolo;

**Codice articolo**: in questa colonna è possibile digitare manualmente il codice oppure usando il *Help Articoli*;

**Variante**: tramite questa combo box l'utente può selezionare ed inserire una delle varianti dell'articolo. Se l'articolo non presenta varianti, la combo box risulta disattivata;

**Unità di misura**: in questa colonna compare, in read-only, il codice dell'unità di misura gestionale dell'articolo;

**Unità di misura alternativa**: in questa colonna l'utente può selezionare, tramite l'apposita combo box, il codice di una delle unità di misura alternative dell'articolo, ove presenti, al fine di eseguire il movimento imputando la quantità nell'unità di misura alternativa prescelta. La quantità gestionale verrebbe in questo caso calcolata automaticamente in base al fattore di conversione impostato nel *Anagrafica articolo* > tab *UM Alternative*;

**Quantità movimento**: in questa colonna l'utente deve obbligatoriamente inserire la quantità del movimento, espressa nell'unità di misura gestionale nel caso in cui la colonna *U.M. alt.* risulti vuota; in caso contrario la quantità sarebbe espressa nell'unità di misura alternativa inserita nella colonna *U.M. alt.*. Dopo che l'utente ha inserito il codice dell'articolo e l'ha fatto riconoscere come valido alla procedura, la quantità movimento viene inserita automaticamente come uguale a 1; a questo punto l'utente la può modificare. La quantità del movimento va sempre inserita in valore assoluto, in quanto il fatto che si tratti di un movimento di carico oppure di scarico è determinato dal tipo di causale utilizzata;

**Quantità gestionale**: in questa colonna compare, in rea-only, la quantità espressa nell'unità di misura gestionale dell'articolo. Essa è identica alla quantità movimento nel caso in la colonna *U.M. alt.* risulti vuota; in caso contrario la colonna diventa editabile e l'utente deve inserire la quantità gestionale manualmente, vedendo poi calcolata automaticamente la quantità movimento, che avrebbe quindi un valore pari alla quantità gestionale divisa o moltiplicata (a seconda di quanto impostato nei *Parametri Iniziali di Magazzino*) per il fattore di conversione impostato nel nel *Anagrafica articolo* > tab *UM Alternative*;

**Importo movimento**: in questa colonna compare in automatico il valore di *costo ultimo, costo medio, costo standard o prezzo di vendita*, a seconda dell'impostazione della causale di magazzino utilizzata nella registrazione.  
Se nella causale vi sia come costo proposto l'indicazione *Nessuno*, la procedura propone come costo della registrazione un valore pari a zero.  
Se la colonna *U.M. alt.* risulti vuota, l'importo movimento risulta sempre identico all'importo gestionale; diversamente, in questa colonna sarebbe da inserire l'importo unitario dell'articolo in base alla unità di misura alternativa inserita nella riga del movimento.  
Se nei *Parametri Iniziali di Magazzino* sia attivato, per l'anno in corso, il flag *Mostra tooltip di giacenza in registrazioni*, la procedura visualizza, in una tooltip, la giacenza di quell'articolo sul magazzino su cui si sta creando il movimento, esattamente nel momento in cui l'utente sta inserendo o modificando la quantità stessa.  
Se la giacenza non sia sufficiente e nei *Parametri Iniziali di Magazzino* sia disattivato, per l'anno in corso, il flag ‘*Permetti giacenza negativa*' per quel magazzino, la riga di movimento non verrà salvata.

**Importo gestionale**: in questa colonna compare in automatico il valore di *costo ultimo, costo medio, costo standard, o prezzo di vendita*, a seconda dell'impostazione della causale di magazzino utilizzata nella registrazione.  
Nel caso nella causale vi sia come costo proposto l'indicazione *Nessuno*, la procedura propone come costo della registrazione un valore pari a zero.  
Nel caso in la colonna *U.M. alt.* risulti vuota, l'importo gestionale risulta sempre identico all'importo movimento; diversamente, in questa colonna, sempre comunque read-only, verrebbe calcolato il valore unitario del movimento in base all'unità di misura gestionale, tramite la seguente formula: *Importo movimento * Quantità movimento / Quantità gestionale*;

**Progetto**: in questa colonna l'utente può inserire, tramite l'apposito *Help progetti* che si esplode con un doppio click sul campo giallo, la commessa di vendita che deve essere associata alla riga del movimento;

**Importo totale**: in questa colonna compare, non editabile, l'importo totale della riga del movimento. Esso risulta dalla moltiplicazione della quantità gestionale per l'importo gestionale;

**Descrizione articolo**: in questa colonna compare la descrizione dell'articolo. Essa viene impostata automaticamente non appena viene riconosciuto dalla griglia l'articolo inserito dall'utente;

**Descrizione variante**: in questa colonna compare la descrizione della variante dell'articolo. Essa viene impostata automaticamente non appena viene riconosciuto dalla griglia il codice della variante dell'articolo inserito dall'utente;

**Note**: in questo campo è possibile inserire una nota libera relativamente alla singola riga della registrazione di magazzino;

**Ubicazione**: in questo campo viene specificata l'ubicazione da cui verrà scaricato o su cui verrà caricato l'articolo, in base ovviamente al tipo di causale di magazzino (carico / scarico);   

**Peso netto**: viene riportato il Peso netto totale delle righe articolo. Viene riportato il peso netto di anagrafica articolo moltiplicato per la quantità di riga;

**Peso lordo**: viene riportato il Peso lordo totale delle righe articolo. Viene riportato il peso lordo di anagrafica articolo moltiplicato per la quantità di riga;

Nel momento in cui l'utente procede al salvataggio della riga del movimento, la procedura può eseguire correttamente il salvataggio e rendere disponibile la riga successiva per l'inserimento di un nuovo movimento, oppure può imporre all'utente di completare l'inserimento tramite il carico dei lotti e/o dei serial numbers nelle apposite griglie sottostanti.

### Lotti e Serial number

**Lotti**

In questa griglia, attiva solo se la causale di magazzino utilizzata ha il flag *Gestione lotti* attivato e se anche l'articolo è designato come articolo gestito a lotti, l'utente deve obbligatoriamente inserire le informazioni legate al lotto o ai lotti da movimentare.

Come sappiamo, la registrazione di magazzino può essere di carico o di scarico; a seconda dei 2 diversi casi, la griglia dei lotti ha differenti utilizzi ed impostazioni.

> *1° caso: Registrazione di carico*

Nel momento in cui l'utente procede al salvataggio della riga del movimento, la procedura lascia in update la riga stessa, invitando l'utente a spostarsi nella griglia *Lotti* ed a indicare i dettagli dei lotti da caricare.

Le colonne presenti nella griglia sono le seguenti:

**Tipo codice lotto**: in questa colonna viene inserito il tipo codice lotto inserito nell'anagrafica articolo;

**Tipo lotto**: in questa colonna può essere opzionalmente inserito dall'utente il Tipo Lotto, tramite l'apposita combo box, che attinge dall'omonima tabella. Si tratta di un dato comunque non obbligatorio;

**Numero Lotti**: in questa colonna viene inserito il codice del lotto da caricare, costruito in base alle regole impostate nei *Parametri Iniziali di Magazzino* associate al *Tipo codice lotto* inserito. Il campo è di colore giallo in quanto l'utente potrebbe decidere di eseguire un nuovo carico di un lotto già esistente nel database; in questo caso con un doppio click sul campo giallo avrebbe modo, tramite un apposito *Help lotti*, di scegliere il lotto da caricare filtrandolo tra i lotti gestiti sino a quel momento nel database e nella società in cui sta lavorando;

**Codice lotto fornitore**: in questa colonna viene inserito manualmente il codice del lotto fornitore, quindi di solito il nome che il fornitore attribuisce al lotto. Si tratta di un campo non generabile automaticamente durante le operazioni di carico e non obbligatorio. Nel caso in cui il Codice Lotto venga inserito attingendo dall'*Help Lotti*, questa colonna verrebbe compilata automaticamente con il Lotto Fornitore agganciato al lotto prescelto;

**Data inizio**: in questo campo compare la stessa data della registrazione di magazzino, editabile dall'utente. Nel caso in cui il Codice Lotto venga inserito attingendo dall''Help Lotti', questa colonna verrebbe compilata automaticamente con la data di inizio del lotto prescelto;

**Data scadenza**: in questo campo compare la data di scadenza del lotto, editabile dall'utente, che viene calcolata, partendo dalla data di inizio e sommando i giorni di validità del lotto inseriti nel tab *Lotti/SN* dell'anagrafica articolo. Nel caso in cui il Codice Lotto venga inserito attingendo dall'*Help Lotti*, questa colonna verrebbe compilata automaticamente con la data di scadenza del lotto prescelto;

**Quantità**: in questo campo compare la quantità che si vuole attribuire al lotto inserito. Nel caso di creazione del lotto tramite la pressione del tasto ‘Auto', la quantità viene riempita automaticamente con la quantità contenuta nella riga del movimento; essa è però editabile dall'utente, il quale potrebbe quindi decidere di modificare la quantità, diminuendola, ed eseguendo poi un'ulteriore pressione sul tasto ‘Auto' ma sulla riga sottostante: in tal modo creerebbe un nuovo lotto, con caratteristiche simili al lotto già inserito ma con Codice Lotto diverso;

**Chiuso**: se attivo, evidenzia che il lotto è stato completamente scaricato dal magazzino. Logicamente nel caso di carico del lotto il flag risulta sempre disattivato;

**Lotto vendibile**(Lotto Vendibile): se attivo, evidenzia che il lotto è disponibile per essere prelevato all'interno dei documenti di vendita, di produzione o nelle registrazioni di magazzino. Si tratta praticamente di una possibilità che ha l'utente per definire la possibilità di prelevare o meno un lotto, in alternativa alla gestione, più complessa ed articolata, degli stati lotto. Quindi nel caso del carico automatico del lotto, il flag risulta attivo di default, anche se l'utente può decidere già in questa fase di disattivarlo, rendendo quindi già indisponibile il lotto stesso;

**Nota**: in questo campo l'utente può inserire una nota relativa al lotto che sta caricando. Nel caso in cui il Codice Lotto venga inserito attingendo dall'*Help Lotti*, questa colonna verrebbe compilata automaticamente con la nota legata al lotto prescelto.

Dopo aver completato l'inserimento dei lotti nella griglia *Lotti*, facendo in modo che la quantità della riga del movimento sia pari alla somma delle quantità dei lotti caricati, l'utente può provvedere a salvare la riga del movimento senza più ricevere messaggi di errore dalla procedura.

> *2° caso: Registrazione di scarico*

Nel momento in cui l'utente procede al salvataggio della riga del movimento, la procedura lascia in ‘update' la riga stessa, invitando l'utente a spostarsi nella griglia Lotti ed a indicare i dettagli dei lotti da scaricare.

Le colonne presenti nella griglia sono le seguenti:

**Numero Lotti**: in questa colonna con un doppio click sul campo giallo l'utente ha modo, tramite l'apposito *Help lotti*, di scegliere il lotto da scaricare filtrandolo tra i lotti disponibili nel magazzino della registrazione;

**Codice lotto fornitore**: questa colonna viene compilata automaticamente con il *Lotto fornitore* agganciato al lotto prescelto;

**Data inizio**: in questo campo compare la data di inizio del lotto prescelto;

**Data scadenza**: in questo campo compare la data di scadenza del lotto prescelto;

**Quantità**: in questo campo compare la quantità che si vuole scaricare del lotto prescelto. Essa è editabile dall'utente, il quale potrebbe quindi decidere di modificare la quantità, diminuendola, ed eseguendo poi un'ulteriore ricerca tramite l'help lotti ma sulla riga sottostante;

**Ubicazione**: in questo campo viene visualizzata l'ubicazione in cui è caricato il lotto prescelto.

Dopo aver completato l'inserimento dei lotti da scaricare nella griglia *Lotti*, facendo in modo che la quantità della riga del movimento sia pari alla somma delle quantità dei lotti scaricati, l'utente può provvedere a salvare la riga del movimento senza più ricevere messaggi di errore dalla procedura.

**Numeri seriali**

In questa griglia, attiva solo se la causale di magazzino utilizzata ha il flag *Gest. lotti* attivato e se anche l'articolo è designato come articolo gestito a serial numbers, l'utente deve obbligatoriamente inserire le informazioni legate ai serial numbers da movimentare.

Come sappiamo, la registrazione di magazzino può essere di carico o di scarico; a seconda dei 2 diversi casi, la griglia Numeri Seriali ha differenti utilizzi ed impostazioni.

> *1° caso: Registrazione di carico*

Nel momento in cui l'utente procede al salvataggio della riga del movimento, la procedura lascia in ‘update' la riga stessa, invitando l'utente a spostarsi nella griglia Numeri Seriali ed a indicare i dettagli dei Serial Numbers da caricare.

Le colonne presenti nella griglia sono le seguenti:

**Tipo Serial Number**: in questa colonna viene inserito automaticamente, il tipo codice SN inserito nell'anagrafica articolo. Esso è comunque modificabile dall'utente

**Serial Number**: in questa colonna viene inserito il codice del Serial Number da caricare, costruito in base alle regole impostate nei *Parametri Iniziali di Magazzino* associate al tipo codice SN inserito. Esso è comunque editabile dall'utente.

**Cliente Serial Number**: indica il Serial Number utilizzato dal cliente;

**Fornitore Serial Number**: indica il Serial Number utilizzato dal fornitore;

**Data inizio**: indica la data inizio di validità del Serial Number;

**Data scadenza**: indica la data di scadenza del Serial Number;

**Data ultima modifica**: indica la data di ultima modifica;

**Annullato**: indica che il Serial Number si trova in stato annullato;

**Chiuso forazatamente**: indica che il Serial Number è stato chiuso forzatamente;
 
**Lotto**: indica il numero di lotto corrispondente a quel Serial Number.

Dopo aver completato l'inserimento dei lotti nella griglia *Numeri Seriali*, facendo in modo che la quantità della riga del movimento sia pari al numero dei Serial Numbers inseriti nella griglia, l'utente può provvedere a salvare la riga del movimento senza più ricevere messaggi di errore dalla procedura.

> *2° caso: Registrazione di scarico*

Nel momento in cui l'utente procede al salvataggio della riga del movimento, la procedura lascia in update la riga stessa, invitando l'utente a spostarsi nella griglia Numeri Seriali ed a indicare i dettagli dei Serial Numbers da scaricare.

Le colonne presenti nella griglia sono le seguenti:

**Serial Number**: in questa colonna l'utente deve inserire, tramite un doppio click sul campo giallo, i Serial Numbers da scaricare, attingendo dall'apposito *Help Serial Numbers*.

**Data inserimento**: indica la data inserimento del Serial Number;

**Cliente Serial Number**: indica il Serial Number utilizzato dal cliente;

**Fornitore Serial Number**: indica il Serial Number utilizzato dal fornitore;

**Data ultima modifica**: indica la data di ultima modifica;

**Data inizio**: indica la data inizio di validità del Serial Number;

**Annullato**: indica che il Serial Number si trova in stato annullato;

**Lotto**: indica il numero di lotto corrispondente a quel Serial Number.

Dopo aver completato l'inserimento dei lotti da scaricare nella griglia *Numeri Seriali*, facendo in modo che la quantità della riga del movimento sia pari al numero dei Serial Numbers inseriti nella griglia, l'utente può provvedere a salvare la riga del movimento senza più ricevere messaggi di errore dalla procedura.

### Centri di Costo

In questa griglia l'utente può agganciare alla riga movimento uno o più centri di costo, attribuendo quindi differenti quantità del movimento a differenti centri di costo.

La griglia si compone di una colonna in cui compare un campo di colore giallo, sul quale l'utente può, esercitando un doppio click, aprire l'**Help Centri di Costo*, mediante in quale può inserire il centro di costo nella riga della griglia, completando poi la riga con la quantità a cui questo centro di costo deve essere riferito. Se la somma delle quantità inserite nella righe della griglia dei centri di costo è diversa dalla quantità gestionale della riga movimento, la procedura dà un avviso e impedisce di salvare il movimento.

### Extra Data

Si rinvia alla documentazione relativa agli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Contropartita

Questo tab è esattamente identico al tab *Registrazione*, ma risulta attivo solo se la causale di magazzino impostata nel tab *Registrazione* presenta un magazzino e una causale di contropartita.  
Le causali di contropartita vengono impostate nel caso in cui si voglia gestire un doppio movimento di magazzino, con una sola registrazione. Quindi è possibile, nella tabella delle causali di magazzino, impostare una causale di carico come contropartita di una causale di scarico e vicevesa.

Nel tab *Contropartita* vengono quindi riportati esattamente tutti i dati impostati all'interno del tab *Registrazione*, con la possibilità per l'utente di modificare solo alcuni dei dati di testata: Documento interno, Documento di riferimento, Commessa di vendita.

I dati della riga del movimento devono invece essere identici tra i 2 tab; stesso discorso per le griglie Lotti, Numeri di Serie, Varianti e Centri di Costo del singolo movimento. Solo il campo dell'ubicazione è editabile all'interno del tab contropartita.

C'è un caso **particolare** in cui nel tab *Registrazione* viene inserito un articolo e nel tab *Contropartita* ne vengono inseriti altri: ciò accade solo quando la causale di contropartita agganciata alla causale principale ha attivato il flag *Distinta Base*, flag che consente all'utente di caricare l'articolo nel tab *Registrazione* (quindi utilizzando una causale di carico) e vedere la sua distinta base inserita nel tab *Contropartita*, all'interno del quale sarà quindi presente una causale di scarico. Ovviamente può essere gestito anche il viceversa.

Una situazione **particolare** che richiede la gestione di causali con la contropartita agganciata è riconducibile allo *scarico automatico del DDT di consegna di conto lavoro*, che esegue lo scarico dei materiali da consegnare al terzista dal magazzino materie prime (o semilavorati, a seconda dei casi) con conseguente ed immediato carico sul magazzino del terzista degli stessi materiali, che dovranno da lui poi essere utilizzati per produrre ciò che gli è stato richiesto tramite l'ordine di conto lavoro.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).