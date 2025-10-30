---
title: Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo
sidebar_position: 5
---

### Creazione lotto da lotto


:::important A cosa serve
La procedura di Creazione Lotto da Lotto di Fluentis è un'importante funzionalità che permette di generare un nuovo lotto a partire da un lotto esistente dello stesso articolo. Questa operazione è fondamentale per gestire in modo efficace il magazzino e per rispondere tempestivamente alle esigenze di produzione e logistica.

La procedura è strutturata in tre sezioni principali: un filtro per la selezione dei dati, una griglia che visualizza le informazioni relative al lotto scelto e una sezione dedicata ai dati del nuovo lotto. Gli utenti possono inserire informazioni cruciali come la quantità iniziale, il numero di colli, e le causali di scarico e carico per completare la registrazione del nuovo lotto. L'implementazione di questa procedura non solo semplifica la movimentazione dei lotti, ma aiuta anche a mantenere una tracciabilità accurata all'interno del sistema, garantendo i requisiti di qualità e conformità normativa.
:::

Questa form permette di creare un nuovo lotto, di uno stesso articolo, partendo dal vecchio lotto.

La form si compone di 3 sezioni distinte:

- filtro: in cui è possibile filtrare i dati desiderati e tramite il pulsante **Ricerca** presente nella *Ribbon bar* possono essere visualizzati i dati nella griglia sottostante;     
- griglia dei risultati: contenente tutte le informazioni relative al lotto cercato;          
- dati nuovo lotto: in questa sezione, sottostante alla griglia dei risultati, sono contenuti i dati relativi al nuovo lotto.

Di seguito sono riportati i dati relativi al nuovo lotto da creare:

> **Quantità iniziale lotto di destinazione**: indica la quantità iniziale che avrà il lotto di destinazione;         
> **Numero colli lotto di destinazione**: indica il numero di colli che avrà il lotto di destinazione;              
> **Causale di scarico lotto di origine**: indica la causale di scarico con la quale verrà scaricato il lotto di origine;        
> **Causale di carico lotto di destinazione**: indica la causale di carico con la quale verrà caricato il lotto di destinazione;      
> **Ubicazione lotto di destinazione**: indica l'ubicazione nella quale verrà caricato il lotto di destinazione.

:::note **ATTENZIONE** 
Le causali di magazzino che possono essere utilizzate in questa procedura sono solo quelle che hanno il flag **Crea lotto da lotto** attivo nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates/).     
Per poterlo settare è necessario creare una causale di **Scarico**, con i flag **Gestione lotti** e **Integra quantità iniziale** attivi, il flag **Distinta base** disattivato e deve avere una **contro partita** di **Carico**.
:::

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.

Dopo di che, è necessario selezionare il lotto desiderato ed inserire i dati relativi al nuovo lotto nella parte sottostante della form, a questo punto basterà premere il pulsante **Creazione lotto** per poter creare il nuovo lotto per il medesimo articolo.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).



### Creazione lotto da lotto con cambio articolo


:::important A cosa serve
La Creazione Lotto da Lotto con Cambio Articolo è una procedura avanzata di Fluentis che consente di creare un nuovo lotto per un articolo diverso, partendo da un lotto di origine. Questa funzionalità risulta particolarmente utile nel contesto di gestione delle scorte, quando è necessario trasferire quantità da un articolo a un altro, mantenendo sempre una registrazione dettagliata dei lotti.

Anche questa procedura è organizzata in tre sezioni: un filtro per la ricerca dei lotti esistenti, una griglia che mostra i risultati della ricerca e una sezione per l'inserimento dei dati relativi al nuovo lotto. Gli utenti possono specificare dettagli come il codice articolo di destinazione, la quantità iniziale e la causale di scarico e carico. Grazie a questa procedura, le aziende possono ottimizzare i flussi di magazzino e garantire una maggiore efficienza operativa, assicurando che tutti i movimenti siano tracciabili e correttamente registrati nel sistema.
:::


Questa form permette di creare un nuovo lotto con un nuovo articolo partendo da un diverso lotto con un diverso articolo.

La form si compone di 3 sezioni distinte:

- filtro: in cui è possibile filtrare i dati desiderati e tramite il pulsante **Ricerca** presente nella *Ribbon bar* possono essere visualizzati i dati nella griglia sottostante;     
- griglia dei risultati: contenente tutte le informazioni relative al lotto cercato;          
- dati nuovo lotto: in questa sezione, sottostante alla griglia dei risultati, sono contenuti i dati relativi al nuovo lotto.

Di seguito sono riportati i dati relativi al nuovo lotto da creare:

> **Articolo lotto di destinazione**: permette di inserire classe, codice e descrizione dell'articolo di destinazione;            
> **Variante articolo**: permette di inserire la variante dell'articolo di destinazione;              
> **Quantità iniziale lotto di destinazione**: indica la quantità iniziale che avrà il lotto di destinazione;         
> **Numero colli lotto di destinazione**: indica il numero di colli che avrà il lotto di destinazione;              
> **Causale di scarico lotto di origine**: indica la causale di scarico con la quale verrà scaricato il lotto di origine;        
> **Causale di carico lotto di destinazione**: indica la causale di carico con la quale verrà caricato il lotto di destinazione;      
> **Ubicazione lotto di destinazione**: indica l'ubicazione nella quale verrà caricato il lotto di destinazione.

:::note **ATTENZIONE** 
Le causali di magazzino che possono essere utilizzate in questa procedura sono solo quelle che hanno il flag **Crea lotto da lotto** attivo nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates/).        
Per poterlo attivare è necessario creare una causale di **Scarico**, con i flag **Gestione lotti** e **Integra quantità iniziale** attivi, il flag **Distinta base** disattivato e deve avere una **contro partita** di **Carico**.
:::

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.

Dopo di che, è necessario selezionare il lotto desiderato ed inserire i dati relativi al nuovo lotto nella parte sottostante della form, a questo punto basterà premere il pulsante **Creazione lotto** per poter creare il nuovo lotto per il medesimo articolo.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).