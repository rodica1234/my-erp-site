---
title: Anagrafica Serial Number
sidebar_position: 8
---

:::important A cosa serve
L'anagrafica serial number di Fluentis è un modulo essenziale per la gestione dettagliata dei serial number, consentendo alle aziende di tenere traccia di articoli singoli attraverso un codice identificativo unico. Questa funzionalità risponde a esigenze specifiche di rintracciabilità e sicurezza, particolarmente importante per articoli critici o ad alto valore, dove è fondamentale monitorare ogni singolo pezzo piuttosto che semplicemente una quantità complessiva.

L'utente ha la possibilità di ricercare un serial number specifico e visualizzarne i dettagli con un semplice doppio clic. In questa sezione, è possibile modificare informazioni chiave come il codice cliente, il codice fornitore, e lo stato del serial number, che può essere annullato, chiuso forzatamente o prenotato. Inoltre, l'anagrafica fornisce dettagli sui documenti di carico e scarico associati al serial number, permettendo un'analisi completa del suo utilizzo nel tempo.

L'approccio sistematico alla gestione dei serial numbers non solo ottimizza i processi interni, ma garantisce anche la compliance alle normative vigenti, facendo di quest'anagrafica uno strumento indispensabile per le aziende moderne che puntano a massimizzare l'efficienza operativa e la qualità del servizio.
:::

Questa finestra visualizza il dettaglio del lotto e si compone di 4 diverse sezioni: 

### Testata Serial Number

In questa sezione vengono visualizzati, con la possibilità di modificarne alcuni, i dati principali relativi al lotto ed in particolare:

**Articolo**: nei 3 campi relativi vengono visualizzati classe, codice e descrizione dell'articolo a cui è riferito il Serial Number. Si tratta sicuramente di un articolo con il flag *Gestione SN* attivato nell'*Anagrafica articolo* >  tab *Lotti/SN*, altrimenti non sarebbe stato possibile eseguire il carico del lotto per l'articolo stesso;

**Variante**: nei 2 campi relativi vengono visualizzati codice e descrizione della variante dell'articolo a cui è riferito il Serial Number, se presente;

**Codice Lotto**: in questo campo compare il codice del Lotto di cui fa parte il Serial Number. L'articolo a cui è riferito il Serial Number potrebbe infatti essere gestito anche a Lotti; quindi in questo caso un lotto di 100 pezzi, per esempio, potrebbe essere composto di 100 diversi Serial Number. Lo stesso Serial Number potrebbe inoltre appartenere a lotti diversi dello stesso articolo, oppure a lotti di articoli diversi;

**Tipo lotto**: indica il tipo lotto utilizzato;

**Tipo codice lotto**: indica il tipo codice lotto con cui è stato generato il lotto;

**Codice Serial Number**: in questo campo compare il Codice del Serial Number. Si tratta di un campo editabile da parte dell'utente, nonostante durante le operazioni di carico possa essere generato automaticamente in base ad alcune regole che vengono impostate nel *Tipo Serial Number* agganciato all'articolo. Si inserisce dapprima un codice e una descrizione del *tipo codice Serial Number*, si salva la riga e poi si decide quali parametri si vogliono utilizzare per la composizione del tipo codice lotto appena creato. Per ogni parametro utilizzato si può decidere da quanti caratteri deve essere formato ed eventualmente anche il carattere di riempimento da utilizzare. Per esempio, con il parametro 'Numero progressivo' impostando come carattere di riempimento lo '0' e come Lunghezza '5' verranno creati Serial Number con come primo numero lo 00000, poi lo 00001, poi lo 00002 e così via. Il *tipo codice Serial Number* deve poi essere agganciato all'anagrafica articolo nell'apposito campo situato nel tab *Lotti/SerialNumber*, in modo tale che nelle procedure che creano automaticamente il codice *Serial Number* per l'articolo in questione, il Serial Number stesso venga generato appunto secondo le regole impostate nel *tipo codice Serial Number* agganciato all'articolo. Il campo è alfanumerico e può raggiungere la lunghezza di 50 caratteri come limite massimo;

**Tipo Serial Number**: indica il tipo codice Serial Number con cui è stato generato il Serial Number;

**Data inizio**: in questo campo compare di solito la data in cui è stato caricato il Serial Number, editabile dall'utente. Se il Serial Number è stato caricato tramite la registrazione di magazzino, questa data viene proposta identica alla data in cui è stata creata la registrazione; se il Serial Number è stato caricato tramite carico di una DDT di acquisto o registrazione rientro di conto lavoro, questa data viene impostata come uguale alla data del DDT di acquisto o di conto lavoro (a meno che all'interno del DDT l'utente non l'abbia modificata manualmente); se il Serial Number è stato caricato tramite registrazione di una segnalazione di produzione, questa data viene proposta come identica alla data della segnalazione di produzione;

**Data scadenza**: in questo campo compare la data di scadenza del Serial Number, editabile dall'utente, che viene calcolata, in sede di creazione del lotto e quindi di carico del relativo movimento di magazzino, partendo dalla data di inizio e sommando i giorni di validità del Serial Number inseriti nel tab Lotti/SN dell'anagrafica articolo;

**Codice cliente**: in questo campo compare il codice del *Lotto cliente*, quindi di solito il nome che il cliente attribuisce al lotto. Si tratta di un campo editabile da parte dell'utente e non generabile automaticamente durante le operazioni di carico. Anch'esso può raggiungere la lunghezza di 50 caratteri come limite massimo e può essere identico anche per lotti diversi di articoli diversi;

**Codice fornitore**: in questo campo compare il codice del *Lotto fornitore*, quindi di solito il nome che il fornitore attribuisce al lotto. Si tratta di un campo editabile da parte dell'utente e non generabile automaticamente durante le operazioni di carico. Anch'esso può raggiungere la lunghezza di 50 caratteri come limite massimo e può essere identico anche per lotti diversi di articoli diversi;

**Fornitore**: in questo campo si andrà ad indicare il conto/sottoconto/descrizione del fornitore;

**Annullato**: se attivo, indica che il Serial number è stato annullato;

**Chiuso forzatamente**: se attivo, indica che il Serial number è chiuso forzatamente;

**Prenotata**: se attivo, indica che il Serial number è stato prenotato.

### Carico

In questa sezione vengono visualizzati i dati fondamentali dei documenti che hanno contribuito ad effettuare il carico del Serial Number. Generalmente compare sempre il dettaglio della *Registrazione di magazzino* che ha caricato il Serial Number.

*Con doppio click sulla riga del documento è possibile, in accordo con i diritti dell'utente, aprire il documento relativo*.

**Quantità**: in questo campo viene visualizzata la quantità del lotto che è stata impegnata nel documento;

**Unità di misura**: indica l'unità di misura che è stata utilizzata nel documento;

**Numero colli**: indica il numero di colli;

**Data inserimento**: indica la data di inserimento;

**Chiuso forzatamente**: se attivo, indica che il Serial Number è stato chiuso forzatamente;

**Documento di riferimento**: in questo campo viene visualizzato il tipo di documento che ha generato il carico del Serial Number. Esso può essere una registrazione di magazzino, un DDT di acquisto oppure un rientro di conto lavoro;

**Registrazione**: in questi campi compaiono il numero e la data del documento;

**Magazzino**: in questi campi compaiono il codice e la descrizione del magazzino su cui è stato caricato il Serial Number;

**Ubicazione**: in questi campi compaiono il codice e la descrizione dell'ubicazione;

**Causale**: in questi campi compaiono il codice e la descrizione della causale utilizzata per la creazione di quel movimento di carico;

**Cliente/Fornitore**: in questi campi compaiono conto, sottoconto e descrizione relative al cliente o fornitore.

### Scarico

In questa sezione vengono visualizzati i dati fondamentali del primo documento, in ordine cronologico, che ha impegnato il Serial Number. Questi dati sono visualizzati in una griglia in cui compaiono le seguenti colonne:

**Quantità**: in questo campo viene visualizzata la quantità del lotto che è stata impegnata nel documento;

**Unità di misura**: indica l'unità di misura che è stata utilizzata nel documento;

**Data inserimento**: indica la data di inserimento;

**Documento di riferimento**: in questo campo viene visualizzato il tipo di documento che ha per primo impegnato il Serial Number. Esso può essere un ordine di produzione, un ordine cliente, una DDT di vendita, una fattura di vendita, una lista di prelievo, una DDT di consegna di conto lavoro, un rientro di conto lavoro;

**Registrazione**: in questi campi compaiono il numero e la data del documento;

**Magazzino**: in questi campi compaiono il codice e la descrizione del magazzino su cui è stato caricato il Serial Number;

**Ubicazione**: in questi campi compaiono il codice e la descrizione dell'ubicazione;

**Causale**: in questi campi compaiono il codice e la descrizione della causale utilizzata per la creazione di quel movimento di carico;

**Cliente/Fornitore**: in questi campi compaiono conto, sottoconto e descrizione relative al cliente o fornitore.

*Con doppio click sulla riga del documento è possibile, in accordo con i diritti dell'utente, aprire il documento relativo*.