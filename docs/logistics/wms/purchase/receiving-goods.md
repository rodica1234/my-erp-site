---
title: Ricevimento merci
sidebar_position: 1
---

:::important A cosa serve
Il modulo di ricevimento merci è uno strumento essenziale per la gestione efficace dei flussi di magazzino. Questa funzione permette l'identificazione tempestiva dei materiali in arrivo, garantendo un carico preciso e organizzato delle merci. Il processo inizia con la selezione degli ordini fornitori non evasi o parzialmente evasi, facilitata da filtri dettagliati che permettono di visualizzare gli articoli in attesa di ricevimento.

Una volta selezionati gli ordini, l'operatore può generare il Documento di Trasporto (DDT) di acquisto, inserendo i dettagli relativi agli articoli da caricare. Il sistema supporta anche la creazione di unità di carico (UDC) nel caso in cui queste siano gestite, migliorando ulteriormente l'organizzazione e la tracciabilità delle merci ricevute. Attraverso l'inserimento dei dati relativi ai lotti, alle quantità e ad altre informazioni pertinenti, il modulo garantisce un controllo completo sulle movimentazioni di magazzino.
:::

Questa procedura è utilizzata in fase di ricevimento della merce, per l’identificazione articoli, la creazione e il carico del DDT di acquisto.

La form si apre sul filtro degli ordini fornitori, dove è possibile visualizzare tutti gli ordini in stato *Non evaso* e *Parzialmente evaso*. 
I risultati possono essere filtrati per *Numero*, *Tipo ordine*, *Anno*, *Articolo* e *Fornitore*.
Dopo aver selezionato uno o più ordini fornitore, è possibile visualizzare gli articoli non evasi e parzialmente evasi utilizzando il pulsante *Visualizza*, mentre tramite il pulsante *Creazione DDT acquisto* è possibile iniziare ad inserire gli articoli che saranno presenti nel DDT.

La form principale si compone dei seguenti tab:

- **Creazione DDT acquisto**
Dopo aver selezionato l'ordine fornitore, tramite il pulsante *Creazione DDT acquisto* è possibile aprire la form sul tab *Creazione DDT acquisto*, dove il focus sarà posizionato direttamente sul campo **DDT** in modo da inserire per prima cosa il numero del documento.      
Come [Tipo DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) da utilizzare verrà proposto quello indicato nel [Tipo ordine fornitore](/docs/configurations/tables/purchase/purchase-orders-type/) dell’ordine utilizzato. Se non indicato viene proposto il primo [Tipo DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) presente in tabella e l’utente potrà modificalo manualmente.        
Inoltre, verranno visualizzate le informazioni relative al primo articolo presente sull'ordine, oltre alle informazioni di testata dell'ordine stesso.

> **Magazzino**: indica il magazzino in cui verranno effettuate le movimentazioni;          
> **Causale magazzino**: indica la causale di magazzino con cui verranno effettuate le movimentazioni;     
> **Tipo DDT**: indica il tipo di DDT con cui verrà creata il documento di trasporto;                
> **Data**: indica la data del DDT che si sta creando; di default viene proposta quella odierna;     
> **Ordine**: indica il numero di ordine fornitore;           
> **Articolo**: indica classe, codice e descrizione dell'articolo che si sta per confermare;           
> **N. Riga**: indica il numero di riga dell'articolo nell'ordine fornitore;          
> **Barcode**: permette di leggere i barcode tramite apposito lettore per effettuare diverse operazioni;      
> **Lotto Fornitore**: permette di inserire il numero di lotto del fornitore;     
> **LT**: permette di generare il numero di lotto interno;           
> **Data scadenza**: indica la data scadenza del lotto;          
> **Quantità ordinata**: indica la quantità ordinata;    
> **Quantità residua**: indica la quantità residua;       
> **Quantità**: indica la quantità che si vuole caricare a magazzino;    
> **Ubicazione proposta**: indica l'ubicazione proposta;              
> **Ubicazione**: permette di inserire un'ubicazione variando quella proposta.

In fase di creazione del DDT, il magazzino e la causale verranno proposti nel seguente modo:
- Se il magazzino riportato nell'ordine di acquisto è uno dei magazzini presenti nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) per quell’utente, la procedura lo propone.          
- Se il magazzino riportato nell’ordine di acquisto non è uno dei magazzini presenti nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) per quell’utente, la procedura lascia vuoti sia il campo del magazzino sia quello della causale di magazzino. In questo caso l’utente deve inserirli manualmente per poter proseguire, e quando prova a inserirli la procedura mostra un messaggio di conferma prima di poter proseguire: se clicca SÌ, può inserire uno dei magazzini presenti nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) per quell’utente; altrimenti se clicca NO, i campi magazzino e tipologia magazzino rimangono vuoti.      
- Se nell’ordine di acquisto non è specificato il magazzino e nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) per quell’utente è presente un solo magazzino, la procedura proporrà automaticamente quel magazzino e la relativa causale; mentre, se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) per quell’utente sono presenti più magazzini, la procedura lascia vuoti sia il campo magazzino sia il campo della causale, e quando l’utente potrà scegliere tra quelli presenti nei parametri senza senza la necessità di mostrare alcun messaggio.

Tramite il campo **Input code** (quindi utilizzando un lettore barcode) è possibile inserire i dati relativi al lotto, all'ubicazione, alla quantità rilevata e all’articolo nel caso in cui si volesse caricarne un altro rispetto a quello proposto, ma comunque presente negli ordini precedentemente selezionati.       
Dopo aver inserito i dati relativi all'articolo corrente, è possibile confermarli tramite il pulsante **Conferma**.     
Una volta confermate tutte le righe dell’ordine si viene posizionati automaticamente sul tab **Dettaglio DDT**, dove utilizzando il pulsante **Chiudi** è possibile salvare il DDT ed effettuare il relativo movimento di magazzino.

**Pulsanti specifici**
> **Conferma**: permette di confermare i dati inseriti per l'articolo selezionato;           
> **Conf+Stp**: permette di confermare i dati inseriti per l'articolo ed inoltre, apre un pop up che da la possibilità di stampare le etichette;       
> **Stampa**: permette di stampare le etichette;       
> **Chiudi**: permette di salvare il DDT creato e creare i relativi movimenti di magazzino;        
> **Prossimo oggetto**: permette di passare al prossimo articolo presente nell'ordine fornitore;       
> **Precedente oggetto**: permette di passare all'articolo precedente presente nell'ordine fornitore.

- **Dettagli DDT**       
In questa form vengono riportate tutte le informazioni relative alle righe create.

**Pulsanti specifici**
> **Cancella articoli**: permette di cancellare la riga selezionata dal DDT.   

- **Dettagli dell'ordine**: 
In questa form vengono riportate tutte le informazioni relative all'ordine fornitore considerato.

## **Ricevimento merci con unità di carico**

Nel caso in cui, l’articolo fosse gestito con unità di carico, e quindi, nel tab [confezionamento](/docs/erp-home/registers/items/create-new-item) dell’anagrafica articolo deve essere presente almeno una riga con il flag **Unità di carico obbligatoria** attivo, la priorità e la quantità.     
La procedura di ricevimento merci dovrà considerare la riga scegliendo quella con priorità più alta tra quelle di quel cliente fornitore (se indicato, altrimenti scegliere tra quelle senza), ma comunque con il flag Unità di carico obbligatoria attivo.     

Quindi, dopo aver inserito tutti i dati relativi all’articolo come descritto precedentemente per il caso senza UDC, quando viene premuto il pulsante **Conferma** la procedura aprirà una nuova form dedicata alla creazione delle unità di carico; dove verranno precaricati i dati dell’articolo, come: *classe*, *codice* e *descrizione articolo*, con eventuale *variante* e *lotto*.     

La **quantità residua**, inizialmente, sarà pari al valore indicato nella form principale nel campo quantità; questa poi, verrà aggiornata dinamicamente ad ogni inserimento di una nuova riga nella tabella.    
La tabella inizialmente è vuota, mentre sono già inseriti i valori sottostanti: 
> **Numero**: indica il numero di unità di carico di quel tipo;         
> **Tipo UDC**: indica il tipo di unità di carico;       
> **Numero dell’unità di carico**: indica il numero univoco dell'unità di carico;         
> **Quantità**: indica la quantità contenuta in quella unità di carico.

Il focus del cursore, invece, è posizionato sul campo riferimento fornitore, in modo da permettere all’operatore di inserire in maniera semplice e veloce il valore.       
Una volta inserito questo valore (non obbligatorio), sarà sufficiente premere il pulsante **Avanti** per inserire la riga all’interno della tabella ed aggiornare il valore della quantità residua.      
Dopo ogni click sul tasto **Avanti**, il focus viene riposizionato sempre nel campo riferimento fornitore.     
Selezionando una delle righe della tabella e premendo il pulsante cancella, questa viene eliminata andando ad aggiornare la quantità residua.      
L’operatore può anche modificare una riga già inserita. Selezionando la riga in tabella, vengono riportati tutti i dati nei campi sottostanti dove l’utente può modificarli e tramite il pulsante Avanti applicarli alla riga della tabella.        
Una volta ultimato l’inserimento e la conferma di tutte le righe, con il pulsante **chiudi** si ritornerà alla form principale, dalla quale premendo il pulsante **chiudi** verranno creati i relativi movimenti di magazzino relativi al DDT appena caricato e alla creazione delle unità di carico collegate.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

Nello specifico sono utilizzati nel seguente modo:

> ReceivingGoodsCreateDocument: dopo aver selezionato **Ricevimento merci** e premuto il pulsante **Creazione DDT acquisto** il magazzino e la causale indicati in questo parametro vengono usati nelle righe degli articoli del DDT appena creato.
> LoadingUnitCreationFromPurchaseDeliveryNoteItem: dopo aver selezionato **Ricevimento merci** e premuto il pulsante **Creazione DDT acquisto** il magazzino e la causale indicati in questo parametro vengono usati nella creazione e il carico delle unità di carico appena create. Questo parametro è necessario solo nel caso in cui vengano utilizzare le unità di carico.

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

## **Ricevimento merci con creazione etichette**

Nel caso in cui fosse necessario creare le etichette per gli articoli che si stanno per caricare, dopo aver inserito tutti i dati relativi all’articolo come descritto precedentemente, l’operatore dovrà premere il pulsante **Conferma + Stampa** e la procedura aprirà una nuova form dedicata alla creazione delle etichette.       
In questa form il focus è già posizionato sulla quantità che verrà inserita in ogni etichetta in modo che l’utente possa immediatamente modificarla.      
Inoltre, può anche decide il numero di etichette con una certa quantità.     
Una volta inseriti i dati correttamente l’operatore dovrà premere il pulsante avanti per inserire la riga con le etichette nella griglia centrale e contemporaneamente verrà aggiornata la **Quantità residua** (inizialmente, sarà pari al valore indicato nella form principale nel campo quantità). Nel caso di errori possibile selezionare una riga ed eliminarla con il pulsante **Cancella**.        
Una volta terminate tutte le etichette sarà possibile stamparle con il relativo pulsante e poi tramite il pulsante chiudi si potrà ritornare alla form principale di creazione del DDT, dalla quale l’operatore potrà proseguire con nuove righe.      
Anche in questo caso l’operatore può richiamare la riga confermata in precedenza e riaprirla con il pulsante conferma più stampa per modificarne le etichette.      
Concluse le modifiche con il pulsante chiudi verrà creato il DDT di acquisto con i relativi movimenti di magazzino.     

In questo caso i **Parametri carico/scarico** sono gli stessi visti nei casi precedenti.

## **Ricevimento merci con unità di misura alternative**

La gestione dell’unità di misura alternativa viene abilitata se il flag **Default WMS** presente nel [tab UM alternative dell’anagrafica dell’articolo](/docs/erp-home/registers/items/create-new-item) è attivo.        
In quel caso nella form del ricevimento vengono visualizzati anche i campi dell’unità di misura e quantità alternative, dove il fattore di conversione (CF) utilizzato è calcolato dividendo la quantità gestionale (UM Gest) presente nell’ordine fornitore per la quantità alternativa (UM Alt) (se coincide con quella che ha il flag default WMS) sempre presente nell'ordine fornitore: **CF = UM Gest / UM Alt**          
Quindi all'interno della form, quando viene modificata la quantità alternativa, la quantità gestionale sarà calcolata moltiplicando la quantità alternativa per il fattore di conversione calcolato in precedenza; mentre, se viene modificata la quantità gestionale, la quantità alternativa sarà calcolata dividendo la quantità gestionale per il fattore di conversione.

In questo caso i **Parametri carico/scarico** sono gli stessi visti nei casi precedenti.