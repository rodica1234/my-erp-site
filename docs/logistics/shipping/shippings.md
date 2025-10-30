---
title: Spedizioni
sidebar_position: 3
---

:::important A cosa serve
La gestione delle **Spedizioni** in Fluentis rappresenta un significativo avanzamento nella gestione logistica e operativa per le aziende che utilizzano questa piattaforma ERP. Questa è stata progettata per ottimizzare e semplificare il processo di spedizione, offrendo un controllo più efficiente e integrato di tutte le attività logistiche.
Il sistema di gestione delle spedizioni in Fluentis introduce anche la possibilità di creare groupage, un processo logistico attraverso cui le spedizioni di diversi clienti o fornitori vengono raggruppate in un'unica unità di trasporto. 

Questo metodo di consolidamento offre vari benefici:

- **Riduzione dei Costi**: La creazione di groupage permette di ottimizzare l'uso degli spazi di carico e di ridurre i costi di trasporto per unità di merce spedita. È particolarmente vantaggioso per le aziende che spediscono merci in quantità inferiori al carico completo.
- **Efficienza Operativa**: Consolidare più spedizioni in un unico carico semplifica la gestione delle operazioni e riduce i tempi di transito, migliorando l'efficienza complessiva del processo logistico.
- **Flessibilità e Scalabilità**: Le aziende possono facilmente adattare la loro strategia di spedizione in base alla domanda e alle variazioni del mercato, sfruttando la flessibilità offerta dai groupage per gestire picchi di spedizione o avere più controllo sui tempi di consegna.

In sintesi, questa funzionalità per la gestione delle spedizioni di Fluentis offre alle aziende un potente strumento per ottimizzare la logistica, migliorare l'efficienza e ridurre i costi, mantenendo al contempo un alto livello di servizio e soddisfazione del cliente.
:::

La form **Nuova Spedizione** si apre:  
- tramite il percorso **Logistica > Spedizioni > Nuova Spedizione**  
oppure  
- tramite il pulsante **Nuovo** che si trova nella form [Ricerca Spedizioni](/docs/logistics/shipping/search-shippings).

Nella form di inserimento vengono proposti automaticamente la **Data** e **Anno** corrente, ma possono essere modificati.

## **1. Dati obbligatori**

- **Tipo di spedizione**: indica il tipo di spedizione e automaticamente viene inserito anche il *numero* della spedizione. Questo è predefinito in *Configurazione > Tabelle > Logistica > [Tipi di spedizione](/docs/configurations/tables/logistics/shipping-type)*.       
- **Stato di spedizione**: predefinito in *Configurazione > Tabelle > Logistica > [Stati di spedizione](/docs/configurations/tables/logistics/shipping-states)*.        
- **Trasporto tramite**: l'utente può scegliere tra le seguenti voci: *Mittente*, *Destinatario* e *Vettore*.
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente e al tipo di spedizione che contiene la numerazione.       
- **Vettore**: permette di indicare il vettore che effettuerà la spedizione.
- **Cliente**: permette di indicare il cliente della spedizione.

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati:
- **Data inizio**: permette di indicare la data di inizio della spedizione;      
- **Data fine**: permette di indicare la data di fine della spedizione;    
- **Ore pianificate**: indica il totale delle ore necessarie per la spedizione. Viene calcolato automaticamente sulla base della data inizio e fine;

Le informazioni relative al mezzo e all'autista:
- **Automezzo**: permette di selezionare il mezzo con il quale verrà effettuata la spedizione tra quelli indicati nella tabella [Automezzi](/docs/logistics/motorvehicles/motorvehicle);
- **Autista assegnato**: permette di selezionare l'autista che effettuerà la spedizione tra quelli indicati nella tabella [Autisti](//docs/logistics/motorvehicles/motorvehicle-drivers);       
- **Volume**: permette di indicare il volume della spedizione e la relativa unità di misura;
- **Peso netto**: permette di indicare il peso netto della spedizione e la relativa unità di misura;
- **Peso lordo**: permette di indicare il peso lordo della spedizione e la relativa unità di misura;

Le informazioni relative ai beni:
- **Aspetto esteriore dei beni**: permette di selezionare l'aspetto esteriore della merce spedita tra quelli indicati nella tabella [Aspetto esteriore beni](/docs/configurations/tables/logistics/type-of-packaging/);
- **Numero tracking**: permette di indicare il numero di tracking della spedizione. Questo verrà proposto di default per tutte le spedizioni inserite nel tab **gruopage**;
- **Numero totale di colli**: permette di indicare il numero di colli della spedizione.

Le informazioni relative alla valuta:
- **Divisa**: sezione contenente i dati relativi alla [Divisa](/docs/guide/common/glossary/glossary-intro#currency)
- **Data valuta**: indica la [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date)

Le informazioni relative a destinatario e destinazione:
- **Sito produttivo**: permette di scegliere il sito produttivo da cui verrà effettuata la spedizione e riporta in automatico l'indirizzo associato al *Contatto* (inserito nel *Sito di Produzione*) nel l'Indirizzo del luogo di carico della spedizione;
- **Indirizzo del luogo di carico**: all'apertura della form, questo campo viene valorizzato di default con l'indirizzo della società, dal quale normalmente dovrebbero partire le merci. È anche possibile modificarlo manualmente; 
- **Indirizzo del luogo di destinazione**: permette di indicare il luogo di destinazione della spedizione.

Le informazioni relative alla spedizione:
- **Spedizione**: permette di indicare i dati relativi alla [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment);
- **Porto**: permette di indicare i dati relativi al [Porto](/docs/guide/common/glossary/glossary-intro#carriage);
- **Imballo**: permette di indicare i dati relativi all'[Imballo](/docs/guide/common/glossary/glossary-intro#packing).

Eventuali note:
- **Nota**: permette di inserire una nota libera;         
- **Nota iniziale**: permette di inserire un'ulteriore nota libera.     

Informazioni relative allo stato di evasione della spedizione:
- **Stato evasione**: quando la spedizione è evasa tramite i documenti DDT o fatture, il suo stato evasione cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*; l'utente può forzare l'evasione di un ordine non totalmente evaso indicando lo stato *Evaso forzatamente*;
- **Data chiusura**: indica la data di evasione del documento.

## **3. Groupage**

In questo tab vengono inserite tutte le informazioni relative al **gruopage**.      
Questo consiste nel raggruppare diverse spedizioni di merci provenienti da mittenti differenti, ma destinate alla stessa area geografica, in un unico carico o container. In questo modo, è possibile sfruttare al meglio lo spazio disponibile nei mezzi di trasporto (come camion, container marittimi o aerei) e offrire un servizio più economico rispetto alla spedizione di singole partite di merci.

### Spedizioni groupage

In questa griglia vengono inserite le informazioni relative alle spedizioni contenute in questo **groupage**, quindi per inserire una nuova spedizione nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar. 

Le colonne disponibili sono le seguenti e raggruppate per:

Spedizione 
- **Numero riga**: indica il numero delle riga della spedizione e viene inserito automaticamente;
- **Data inizio**: indica la data / ora di inizio della spedizione;
- **Data fine**: indica la data / ora di fine della spedizione;
- **Ore pianificate**: indica la durata in ore della spedizione e viene calcolato automaticamente in base alla data inizio e fine;
- **Numero di tracking**: indica il numero di tracking della singola spedizione; se indicato nel tab testata, il numero di tracking viene proposto in tutte le spedizioni create, ovviamente può sempre essere modificato manualmente dall'utente.

Indirizzo del luogo di carico
- **Provenienza**: indica la ragione sociale / nome del luogo di carico;         
- **CAP**: indica il CAP del luogo di carico;
- **Città**: indica la città del luogo di carico;
- **Provincia**: indica la provincia del luogo di carico;
- **Indirizzo del luogo di carico**: indica l'indirizzo del luogo di carico. Questo viene valorizzato di default con l'indirizzo della società, dal quale normalmente dovrebbero partire le merci, indicato anche nella testata del documento.

Indirizzo del luogo di destinazione
- **Destinazione**: indica la ragione sociale / nome del luogo di destinazione;            
- **CAP**: indica il CAP del luogo di destinazione;
- **Città**: indica la città del luogo di destinazione;
- **Provincia**: indica la provincia del luogo di destinazione;
- **Indirizzo del luogo di destinazione**: indica l'indirizzo del luogo di destinazione. Questo viene valorizzato in automatico prendendolo dall'anagrafica del cliente, ma può comunque essere modificato manualmente dall'utente.

Automezzo
- **Automezzo**: indica l'automezzo con il quale verrà effettuata la spedizione;
- **Autista assegnato**: indica l'autista che effettuerà la spedizione.

Inoltre, per ciascuna riga del groupage, è possibile aprire espandere il relativo dettaglio di riga cliccando sul **+**, in modo da poter gestire anche i seguenti campi relativamente al luogo di carico:
- **Telefono**: permette di inserire il numero di telefono relativo al luogo di carico;
- **E-mail**: permette di inserire l'indirizzo e-mail relativo al luogo di carico;
- **Note**: permette di inserire una nota libera relativa al luogo di carico;
e alla destinazione:
- **Telefono**: permette di inserire il numero di telefono relativo alla destinazione;
- **E-mail**: permette di inserire l'indirizzo e-mail relativo alla destinazione;
- **Note**: permette di inserire una nota libera relativa alla destinazione.

### Articoli di spedizione

In questa sezione vengono visualizzati tutti gli articoli contenuti all'interno della spedizione selezionata nel gruopage.         
Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.            
In alternativa, è anche possibile aggiungere gli articoli prendendoli direttamente dagli ordini clienti tramite la procedura **Trasferimento articoli**.           
Premendo il pulsante **Trasferimento articoli**, si apre la form denominata **Collegamento degli ordini di vendita**, nella quale di default viene già proposto il cliente della spedizione nel relativo filtro. Quindi premendo il pulsante **Ricerca** verranno visualizzati sulla griglia di destra tutti gli articoli degli ordini non evasi e parzialmente evasi di quel cliente.        
Sulla parte sinistra della form, sono visualizzate le griglie relative alle *spedizioni goupage* e agli *articoli di spedizione* con i dati inseriti nel form principale del gruopage.         
A questo punto, l'utente può, con il drag & drop, trascinare gli articoli dalla griglia di destra direttamente sulla singola spedizione ed in automatico verranno inseriti nella griglia *articoli di spedizione* relativa a quella spedizione.
Inoltre, è anche possibile aggiungere articoli proveniente da ordini di altri clienti, semplicemente andando a variare il valore del filtro *Cliente* e premendo nuovamente **Ricerca**.
Una volta terminato di aggiungere tutti gli articoli, l'utente premendo il pulsante **Acquisizione** confermerà tutte le modifiche.       

#### Campi specifici     
- **Numero riga**: indica il numero riga dell'articolo inserito nel gruopage; 
- **Classe**: indica la classe dell'articolo; 
- **Articolo**: indica il codice dell'articolo; 
- **Variante articolo**: indica la variante dell'articolo; 
- **Descrizione variante**: indica la descrizione variante dell'articolo; 
- **Unità di misura**: indica l'unità di misura dell'articolo;
- **Marca**: visualizza il valore della marca inserita nell'anagrafica articoli;
- **Quantità**: indica la quantità dell'articolo;
- **Unità di misura alternativa**: indica l'unità di misura alternativa dell'articolo;           
- **Quantità alternativa**: indica la quantità dell'articolo;            
- **Volume**: indica il volume dell'articolo;             
- **Peso netto**: indica il peso netto dell'articolo;
- **Peso lordo**: indica il peso lordo dell'articolo;
- **Conto ordine cliente**: visualizza il conto dell'ordine cliente a cui appartiene l'articolo;
- **Tipo ordine cliente**: visualizza il tipo dell'ordine cliente a cui appartiene l'articolo;
- **Data ordine cliente**: visualizza la data dell'ordine cliente a cui appartiene l'articolo;
- **Fattura o DDT**: visualizza il riferimento della fattura / DDT rispettivamente creati premendo i pulsanti **Fattura** o **DDT**; il valore viene visualizzato nel formato tipo documento / data documento / numero documento;
- **Riferimento picking**: visualizza il riferimento del picking creato premendo il pulsante **Picking**; il valore viene visualizzato nel formato tipo documento / data documento / numero documento.

#### Pulsanti specifici  
> - **Nuova groupage**: permette di inserire una nuova spedizione nel gruopage; 
> - **Elimina groupage**: permette di eliminare la spedizione selezionata dal gruopage; 
> - **Trasferimento articoli**: permette di aggiungere gli articoli alla spedizione prendendoli direttamente dagli ordini clienti;
> - **DDT**: permette di creare automaticamente i [DDT](/docs/sales/sales-delivery-notes/general-overview) per le spedizioni selezionare nel gruopage;
> - **Fattura**: permette di creare automaticamente le [Fatture](/docs/sales/sales-invoices/general-overview) per le spedizioni selezionare nel gruopage;
> - **Picking**: permette di creare automaticamente i [Picking](/docs/logistics/picking/picking-intro) per le spedizioni selezionare nel gruopage.  

## **4. Riepiloghi**

Nei Riepiloghi sono presentate le informazioni relative ai costi dell'intero documento.

### Spese

In questa griglia è possibile inserire eventuali spese che devono essere inserite in positivo, eventuali sconti in negativo.

Questi elementi vengono applicati alla totalità del documento e non sono distribuiti tra le righe degli articoli. Possono includere costi aggiuntivi, sconti globali, o maggiorazioni applicate all'intero documento. 

Per inserire una nuova spesa è necessario compilare i seguenti dati:

- **Numero riga**: indica il numero riga della spesa inserita, viene compilato automaticamente;
- **Tipo spesa / Descrizione**: permette di scegliere le tipologie di spesa predefiniti nella tabella [Tipi spese](/docs/configurations/tables/general-settings/expenses-types/);
- **Importo spesa**: indica il valore della spesa espresso nella divisa del documento;
- **Descrizione spesa**: Dettaglio dichiarazioni: viene inserita l'eventuale dichiarazione d'intento valida per il cliente;
- **Imposta**: premette di scegliete dell'aliquota IVA, predefinite nella tabella [Aliquote/Modalità IVA](/docs/configurations/tables/finance/vat-rates/).

Sulla destra della form sono presenti i seguenti campi:

- **Note**: permette di inserire una nota libera;
- **Importo totale**: permette di visualizzare l'importo totale della spedizione dato dalla somma dei valori inseriti nella tabella *Spese*.
