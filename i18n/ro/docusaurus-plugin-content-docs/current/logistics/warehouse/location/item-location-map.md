---
title: Mappa ubicazioni per articolo
sidebar_position: 3
---

:::important A cosa serve
La funzionalità "Mappa ubicazioni per articolo" di Fluentis consente una gestione ottimale delle scorte, fornendo una visualizzazione chiara e dettagliata delle ubicazioni di ciascun articolo all'interno del magazzino. Grazie a questa mappa, gli utenti possono facilmente associare articoli specifici a ubicazioni designate, facilitando così operazioni di stoccaggio e prelievo.

Attraverso un'interfaccia intuitiva, è possibile inserire nuovi articoli e definire variabili chiave come il magazzino di riferimento, la priorità di stoccaggio, e le quantità minime e massime. La mappa permette anche di identificare quale ubicazione è predefinita per ogni articolo, ottimizzando il processo di inventario e migliorando l'efficienza operativa.

Questa funzionalità è particolarmente utile per le aziende che desiderano mantenere il controllo sulla disposizione fisica dei propri prodotti, assicurando sia una più efficace organizzazione del magazzino sia una perfetta tracciabilità degli articoli.
:::

Questa form permette di associare un'ubicazione di default ad un articolo.

Si compone di una form di filtro dove è possibile visualizzare l'elenco di tutti gli articoli a cui è stata associata un'ubicazione di default.
Premendo il pulsante *Nuovo*, l'operatore può inserire un articolo nell'area della testata e poi all'interno della tabella *Mappa ubicazioni articoli* andare ad indicare il magazzino e l'ubicazione di default.

Per ciascun articolo è possibile indicare i seguente parametri:
- **Magazzino**: indica il magazzino dell'ubicazione di default;     
- **Descrizione magazzino**: indica la descrizione del magazzino dell'ubicazione di default;    
- **Priorità**: indica la priorità dell'ubicazione di default; 

:::note **ATTENZIONE**
Le procedure prenderanno in considerazione solamente l'ubicazione con priorità più bassa.
L'ubicazione indicata avrà la priorità anche sull'ubicazione indicata nelle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates).
:::

- **Scorta minima**: indica il valore di scorta minima dell'ubicazione di default;    
- **Scorta massima**: indica il valore di scorta massima dell'ubicazione di default;    
- **Ubicazione**: indica il codice dell'ubicazione di default.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

