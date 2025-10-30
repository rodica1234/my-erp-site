---
title: Anagrafica lotti e Tracciabilità
sidebar_position: 3
---

:::important A cosa serve
L'anagrafica lotti di Fluentis rappresenta uno strumento indispensabile per la gestione precisa e dettagliata dei lotti all'interno di un sistema di tracciabilità dei prodotti. Questa funzionalità consente agli utenti di cercare e visualizzare i dettagli specifici di ogni lotto mediante un semplice doppio clic, facilitando così il monitoraggio e la gestione delle giacenze.

All'interno della scheda dedicata a ogni singolo lotto, gli utenti possono modificare varie informazioni cruciali, come il fornitore, il codice lotto fornito dal fornitore, note specifiche, e lo stato del lotto. Quest'ultimo, che può essere agevolmente aggiornato, gioca un ruolo fondamentale nel determinare la possibilità di utilizzo del lotto stesso nei documenti di vendita e nelle registrazioni di magazzino. Non solo, ma il sistema prevede anche la gestione di vari stati lotto, che incidono direttamente sulla disponibilità operativa del lotto.

Un aspetto distintivo dell'anagrafica lotti è la sezione che consente di visualizzare storicamente i documenti di carico e scarico che hanno coinvolto il lotto, mantenendo così una tracciabilità accurata nel tempo, inoltre, è possibile visualizzare la giacenza attuale suddivisa per magazzino. Grazie a queste funzionalità, l'anagrafica lotti di Fluentis non solo semplifica la gestione operativa, ma contribuisce anche a garantire la compliance normativa in settori dove la tracciabilità è essenziale, come alimentare e farmaceutico.
:::

## Anagrafica lotti

La form visualizza il dettaglio del lotto e si compone di 4 diverse sezioni: 

### Testata lotto

In questa sezione vengono visualizzati, con la possibilità di modificarne alcuni, i dati principali relativi al lotto ed in particolare:

**Articolo**: nei 3 campi relativi vengono visualizzati classe, codice e descrizione dell'articolo a cui è riferito il lotto. Si tratta sicuramente di un articolo con il flag *Gestione lotti* attivato nell'*Anagrafica articolo* >  tab *Lotti/SN*, altrimenti non sarebbe stato possibile eseguire il carico del lotto per l'articolo stesso;

**Variante**: nei 2 campi relativi vengono visualizzati codice e descrizione della variante dell'articolo a cui è riferito il lotto, se presente;

**Lotto**: in questo campo compare il Codice del lotto. Si tratta di un campo editabile da parte dell'utente, nonostante durante le operazioni di carico possa essere generato automaticamente in base ad alcune regole che vengono impostate nel *Tipo codice lotto* agganciato all'articolo. Si inserisce dapprima un codice e una descrizione del *tipo codice lotto*, si salva la riga e poi si decide quali parametri si vogliono utilizzare per la composizione del *tipo codice lotto* appena creato. Per ogni parametro utilizzato si può decidere da quanti caratteri deve essere formato ed eventualmente anche il carattere di riempimento da utilizzare. Per esempio, con il parametro *Numero progressivo* impostando come carattere di riempimento lo '0' e come Lunghezza '5' verranno creati lotti con come primo numero lo 00000, poi lo 00001, poi lo 00002 e così via. Il *tipo codice lotto* deve poi essere agganciato all'anagrafica articolo nell'apposito campo situato nel tab *Lotti/SerialNumber*, in modo tale che nelle procedure che creano automaticamente il codice lotto per l'articolo in questione il lotto stesso venga generato appunto secondo le regole impostate nel *tipo codice lotto* agganciato all'articolo. Il campo è alfanumerico e può raggiungere la lunghezza di 50 caratteri come limite massimo. Non si tratta dell'identificativo del lotto, in quanto è possibile effettuare più carichi in diversi momenti dello stesso lotto; in questo caso comparirebbero più righe con lo stesso *Codice Lotto* all'interno della griglia della *Ricerca Lotti*;

**Fornitore**: in questo campo si andrà ad indicare il conto/sottoconto/descrizione del fornitore;

**Produttore**: in questo campo si andrà ad indicare il nomignolo/ragione sociale del produttore;

**Codice fornitore**: in questo campo compare il codice del *Lotto fornitore*, quindi di solito il nome che il fornitore attribuisce al lotto. Si tratta di un campo editabile da parte dell'utente e non generabile automaticamente durante le operazioni di carico. Anch'esso può raggiungere la lunghezza di 50 caratteri come limite massimo e può essere identico anche per lotti diversi di articoli diversi;

**Tipo report etichetta**: in questo campo viene inserito il tipo ri etichetta da stampare per questo lotto;

**Data inizio**: in questo campo compare di solito la data in cui è stato caricato il lotto, editabile dall'utente. Se il lotto è stato caricato tramite la registrazione di magazzino, questa data viene proposta identica alla data in cui è stata creata la registrazione; se il lotto è stato caricato tramite carico di una DDT di acquisto o registrazione rientro di conto lavoro, questa data viene impostata come uguale alla data del DDT di acquisto o di conto lavoro (a meno che all'interno del DDT l'utente non l'abbia modificata manualmente); se il lotto è stato caricato tramite registrazione di una segnalazione di produzione, questa data viene proposta come identica alla data della segnalazione di produzione;

**Data scadenza**: in questo campo compare la data di scadenza del lotto, editabile dall'utente, che viene calcolata, in sede di creazione del lotto e quindi di carico del relativo movimento di magazzino, partendo dalla data di inizio e sommando i giorni di validità del lotto inseriti nel tab *Lotti/SerialNumber* dell'anagrafica articolo;

**Quantità iniziale**: in questo campo compare la quantità iniziale caricata per il lotto tramite il primo documento che ha caricato il lotto stesso;

**Numero colli**: indica il numero di colli del lotto caricato;

**Note**: in questo campo compaiono le note inserite nella registrazione di magazzino contestualmente al carico del lotto. Il campo è editabile dall'utente e visualizzabile anche nella Ricerca Lotti, come sopra specificato;

**Stato lotto**: la combo visualizza lo stato del lotto. Esso è modificabile dall'utente e richiama dati provenienti dall'apposita tabella *Stati lotto*. Lo stato del lotto determina la possibilità di utilizzare o meno il lotto nei documenti di vendita, di produzione e nelle registrazioni di scarico di magazzino. Si tratta comunque di una gestione non vincolante, l'utente non è quindi obbligato a sfruttare la funzionalità della tabella *Stati lotto*;

**Valutazione lotto**: la combo visualizza il dato relativo valutazione del lotto. Esso è modificabile dall'utente e richiama dati provenienti dall'apposita tabella *Valutazione lotto*. Questo dato ha funzioni puramente descrittive, senza avere quindi nessuna influenza particolare su procedure, risultando quindi anch'esso facoltativo;

**Lotto vendibile**: il flag, se attivo, evidenzia che il lotto è disponibile per essere prelevato all'interno dei documenti di vendita, di produzione o nelle registrazioni di magazzino. Si tratta praticamente di una possibilità che ha l'utente per definire la possibilità di prelevare o meno un lotto, in alternativa alla gestione, più complessa ed articolata, degli stati lotto;

**Chiuso**: il flag, se attivato, fa si che la quantità di quel lotto non venga considerata per il calcolo della giacenza e della disponibilità. Questo flag può solo essere attivato manualmente.        

### Carico

In questa sezione vengono visualizzati i dati fondamentali dei documenti che hanno contribuito ad effettuare il carico del lotto. Generalmente compare sempre il dettaglio della *Registrazione di magazzino* che ha caricato il lotto; se questa è stata generata tramite il carico di un documento (bolla, rientro, etc.), allora compare una riga in cui escono i dettagli anche di questo documento.

*Con doppio click sulla riga del documento è possibile, in accordo con i diritti dell'utente, aprire in sola visualizzazione il documento relativo*.

**Quantità**: in questo campo viene visualizzata la quantità del lotto che è stata impegnata nel documento;

**Unità di misura**: indica l'unità di misura che è stata utilizzata nel documento;

**Numero colli**: indica il numero di colli;

**Data inserimento**: indica la data di inserimento;

**Stato Lotto**: indica lo stato del lotto;

**Chiuso forzatamente**: se attivo, indica che il lotto è stato chiuso forzatamente;

**Documento di riferimento**: in questo campo viene visualizzato il tipo di documento che ha generato il carico del lotto;

**Numero**: in questo campo viene visualizzato il numero del documento;

**Data inserimento**: in questo campo viene visualizzata la data del documento;

**Magazzino**: in questi campi compaiono il codice e la descrizione del magazzino su cui è stato caricato il lotto;

**Ubicazione**: in questi campi compaiono il codice e la descrizione dell'ubicazione;

**Causale**: in questi campi compaiono il codice e la descrizione della causale utilizzata per la creazione di quel movimento di carico;

**Cliente/Fornitore**: in questi campi compaiono conto, sottoconto e descrizione relative al cliente o fornitore;

**Progetto**: in questo campo compare la commessa di vendita, editabile dall'utente, legata al lotto. Di solito si tratta della commessa di vendita agganciata alla riga dell'articolo che è stata caricata e che ha caricato il lotto stesso;

### Altri documenti di carico

In questa sezione vengono visualizzati i dati fondamentali degli altri eventuali documenti in cui il lotto è stato impegnato, in relazione al documento selezionato nella griglia superiore.         
Le righe vengono visualizzate quando un movimento di lotto viene ereditato da un altro documento, cioè quando più documenti fanno riferimento alle stesse righe di movimento di lotto.    
Esempio: i movimenti di lotto delle bolle di consegna di acquisto possono essere ereditati dalle fatture di acquisto.         
Nella prima griglia sono visualizzate le righe principali (sorgenti) dei movimenti di lotto provenienti dai documenti, mentre nella seconda griglia sono visualizzate le righe dei movimenti di lotto provenienti da documenti che derivano dalla riga presente nella griglia superiore (quindi ereditate).

### Scarico

In questa sezione vengono visualizzati i dati fondamentali di tutti i documenti, in ordine cronologico, che impegnano il lotto. 

**Quantità**: in questo campo viene visualizzata la quantità del lotto che è stata impegnata nel documento;

**Unità di misura**: indica l'unità di misura che è stata utilizzata nel documento;

**Data inserimento**: indica la data di inserimento;

**Stato Lotto**: indica lo stato del lotto;

**Documento**: in questo campo viene visualizzato il tipo di documento che ha per primo impegnato il lotto. Esso può essere un ordine di produzione, un ordine cliente, una DDT di vendita, una fattura di vendita, una lista di prelievo, una DDT di consegna di conto lavoro, un rientro di conto lavoro;

**Numero**: in questo campo viene visualizzato il numero del documento;

**Data**: in questo campo viene visualizzata la data del documento;

*Con doppio click sulla riga del documento è possibile, in accordo con i diritti dell'utente, aprire in sola visualizzazione il documento relativo*.

**Magazzino**: in questi campi compaiono il codice e la descrizione del magazzino su cui è stato caricato il lotto;

**Ubicazione**: in questi campi compaiono il codice e la descrizione dell'ubicazione;

**Causale**: in questi campi compaiono il codice e la descrizione della causale utilizzata per la creazione di quel movimento di carico;

**Cliente/Fornitore**: in questi campi compaiono conto, sottoconto e descrizione relative al cliente o fornitore;

**Progetto**: in questo campo compare la commessa di vendita, editabile dall'utente, legata al lotto. Di solito si tratta della commessa di vendita agganciata alla riga dell'articolo che è stata caricata e che ha caricato il lotto stesso;

### Altri documenti di scarico

In questa sezione vengono visualizzati i dati fondamentali degli altri eventuali documenti in cui il lotto è stato impegnato, in relazione al documento selezionato nella griglia superiore.              
Le righe vengono visualizzate quando un movimento di lotto viene ereditato da un altro documento, cioè quando più documenti fanno riferimento alle stesse righe di movimento di lotto.      
Esempio: i movimenti di lotto dei materiali di un ordine di produzione possono essere ereditati dai materiali degli articoli segnalati, i movimenti di lotto degli ordini di vendita possono essere ereditati in picking, nelle bolle di consegna (DDT) o nelle fatture di vendita.                   
Nella prima griglia sono visualizzate le righe principali (sorgenti) dei movimenti di lotto provenienti dai documenti, mentre nella seconda griglia sono visualizzate le righe dei movimenti di lotto provenienti da documenti che derivano dalla riga presente nella griglia superiore (quindi ereditate).

**Tipo documento**: in questo campo viene visualizzato il tipo di documento all'interno del quale è presente il lotto, in relazione al documento selezionato nella griglia superiore. Esso può essere una DDT di vendita, una fattura di vendita, una lista di prelievo, una DDT di consegna di conto lavoro, un rientro di conto lavoro;

**Numero**: in questo campo viene visualizzato il numero del documento;

**Data**: in questo campo viene visualizzata la data del documento.

*Con doppio click sulla riga del documento è possibile, in accordo con i diritti dell'utente, aprire in sola visualizzazione il documento relativo*.

### Visualizzazione Giacenze

In questo tab è possibile visualizzare la giacenza del lotto suddivisa per magazzino.

La griglia si compone dei seguenti campi:

**Codice**: indica il codice del magazzino;

**Descrizione**: indica la descrizione del magazzino;

**Unità di misura**: indica l'unità di misura;

**Quantità totale caricata**: indica la quantità totale caricata di quell'articolo per quel lotto;

**Quantità giacenza**: indica la giacenza attuale di quell'articolo per quel lotto;

**Quantità disponibile**: indica la giacenza disponibile di quell'articolo per quel lotto.


## Tracciabilità lotto

:::important A cosa serve
La tracciabilità lotto di Fluentis è un modulo progettato per garantire una gestione efficiente e precisa dei lotti di prodotti all'interno del ciclo produttivo e logistico. Questa funzionalità permette agli utenti di monitorare e registrare il percorso di ogni lotto, dal momento della produzione o acquisto fino alla sua utilizzazione finale, contribuendo a una gestione trasparente e sicura dei materiali.

Utilizzando la sezione dedicata alla tracciabilità, gli utenti possono generare report dettagliati per i lotti selezionati, non solo per visualizzare le informazioni relative al lotto stesso, ma anche per analizzare in quali articoli è stato impiegato e quali materie prime hanno contribuito alla sua produzione. Questo processo è facilitato da una serie di filtri personalizzabili che consentono di adattare la ricerca alle specifiche esigenze aziendali.

Due dei principali strumenti di tracciabilità includono:

Tracciabilità Impiego: che permette di visualizzare tutti gli articoli nei quali è stato utilizzato il lotto in questione, garantendo così una verifica dettagliata della tracciabilità verso l'alto.
Tracciabilità Composizione: che consente di verificare quali articoli gestiti a lotti sono stati impiegati per la produzione del lotto selezionato, fornendo una chiara visione della tracciabilità verso il basso.

Attraverso questa funzionalità di tracciabilità lotto, Fluentis offre una soluzione robusta per le aziende, specialmente in settori come quello alimentare e farmaceutico, dove la rintracciabilità è fondamentale per la sicurezza e la compliance alle normative vigenti.
:::

Questa form permette di stampare un report contenente il dettaglio della tracciabilità del lotto selezionato.

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.

Da notare che all'interno della sezione dedicata ai filtri sono presenti i seguenti flags:

- **Tracciabilità impiego**: se attivo, permette di visualizzate in quali articoli è stato utilizzato il lotto dell'articolo che stiamo considerando; quindi, verifica la tracciabilità verso l'alto;      
- **Tracciabilità composizione**: se attivo, permette di visualizzate quali articoli (gestiti a lotti) sono stati utilizzato per la produzione del lotto dell'articolo che stiamo considerando; quindi, verifica la tracciabilità verso il basso.      

Questi due flags, di default sono sempre attivi, ma l'utente può attivarli o disattivarla a seconda delle esigenze.

Dopo aver selezionato il lotto di interesse, basterà cliccare su stampa oppure su anteprima di stampa per poter visualizzare il report ocn i risultati cercati.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

