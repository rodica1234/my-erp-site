---
title: Inventario quantità valorizzato
sidebar_position: 1
---

:::important A cosa serve
Il report "Inventario quantità valorizzato" di Fluentis rappresenta uno strumento chiave per la gestione e il monitoraggio delle giacenze di magazzino, permettendo alle aziende di avere una visione chiara e dettagliata delle proprie scorte. Attraverso questo report, gli utenti possono accedere a informazioni complete non solo sulle quantità fisiche degli articoli presenti in magazzino, ma anche sul loro valore, ottenuto mediante diverse logiche di valorizzazione come costo medio, costo ultimo, FIFO e LIFO.

La generazione del report avviene tramite filtri personalizzabili, che consentono di visualizzare dati specifici per magazzino, articolo, categoria merceologica e altro, facilitando l'analisi e la gestione delle scorte. Gli utenti possono anche raggruppare e ordinare i dati in base a parametri significativi, rendendo l'intero processo di controllo inventariale più efficiente e informato.

Questo report non solo supporta le decisioni operative quotidiane, ma è anche cruciale per garantire la compliance normativa e per effettuare analisi finanziarie e di performance all'interno dell'organizzazione.
:::

La stampa permette all'utente di visualizzare un report contenente le informazioni relative all'inventario.
La form si compone di una parte superiore contenente una serie di filtri (magazzino, causale, artciolo/variante, tipo articolo, categoria fiscale, categoria merceologica,...) che permettono di visualizzare i dati desiderati.

Inoltre, tramite una serie di box dedicati è possibile:

- raggruppare i dati per articolo o magazzino;      
- ordinarli per articolo, caratteristica, descrizione e categoria merceologica;     
- avere un dettaglio per variante, ubicazione, commessa, lotto o cliente/fornitore;       
- visualizzare gli articoli con giacenza positiva, nulla o negativa.

Attivando il box **Con valorizzazione al**, verrà inserito all'interno del report dell'inventario anche il valore del singolo articolo sulla base dei seguenti flags:

- **Costo medio**: se attivo, gli articoli vengono valorizzati con il costo medio calcolato in base ai movimenti di magazzino (se il flag **Da anagrafica articolo** è disabilitato);    
- **Costo ultimo**: se attivo, gli articoli vengono valorizzati con il costo ultimo calcolato in base ai movimenti di magazzino (se il flag **Da anagrafica articolo** è disabilitato);    
- **FIFO a scatti annuali**: se attivo, gli articoli vengono valorizzati con la logica FIFO a scatti annuali;        
- **LIFO a scatti annuali**: se attivo, gli articoli vengono valorizzati con la logica LIFO a scatti annuali;        
- **Area gestionale**: se attivo, gli articoli vengono valorizzati in base all'area gestionale indicata per quel magazzino all'interno della tabella [Magazzini](/docs/configurations/tables/logistics/warehouses/);          
- **Da costo effettivo lotti**: se attivo, gli articoli vengono valorizzati con il valore indicato in anagrafica lotti;      
- **Da anagrafica articolo**: se attivo, in concomitanza dei flag **Costo medio** o **Costo ultimo**, gli articoli vengono valorizzati rispettivamente a costo medio o ultimo, ma sulla base dei relativi costi inseriti nell'anagrafica articolo;         
- **Storicizzazione inventario**: se attivo, i dati dell'elaborazione verranno salvati nello [Storico magazzino](/docs/logistics/physical-inventory/warehouse-history);      
- **Da storicizzazione**: se attivo, gli articoli vengono valorizzati con i valori presenti nella [Storico magazzino](/docs/logistics/physical-inventory/warehouse-history) con data pari a quella indicata nel campo **Data costo storico**;      
- **Data costo storico**: si abilita solo se il flag **Da storicizzazione** è attivo, permette di inserire la data del costo storico da utilizzare per la valorizzazione.

Dopo l'inserimento dei parametri desiderati è possibile stampare dei report standard oppure personalizzati (previa mappatura nella gestione stampe). Nel caso si volesse stampare un report personalizzato è necessario scegliere lo stesso dal tabulato nei parametri di stampa.

A standard sono disponibili i seguenti report:

- **Stampa FIFO**: si tratta di un report con logica FIFO per gli inventari (da utilizzare in concomitanza dell'utilizzo del flag **FIFO a scatti annuali**);              
- **Stampa inventario**: si tratta di un report standard per gli inventari;       
- **Stampa LIFO**: si tratta di un report con logica LIFO per gli inventari (da utilizzare in concomitanza dell'utilizzo del flag **LIFO a scatti annuali**).


**LIFO a scatti annuali**

Il LIFO a scatti annuali eseguito senza considerare il flag *Da Anagrafica Articoli* o *Area Gestionale* funziona in questo modo: 

Nell’anno in corso, cioè dalla data ultima chiusura alla data *Inventario Al* viene calcolata la giacenza e il costo medio. 

Per il calcolo del costo medio ponderato vengono considerati  tutti i movimenti di articoli con flag interesse fiscale attivo delle registrazioni di magazzino con causale che aggiorna il costo medio e di interesse fiscale.

Per il calcolo della giacenza vengono considerati  tutti i movimenti di articoli con flag interesse fiscale attivo delle registrazioni di magazzino con causale di interesse fiscale. 

Ottenuta la giacenza a fine periodo vengono verificati le stratificazioni LIFO nello *Storico di magazzino*, andando a calcolare all’indietro le rimanenza di ogni anno, poi per ogni anno si moltiplica la rimanenza dell’anno per il costo medio dell’anno e sommando i valori di ogni anno della stratificazione si ottiene il costo FIFO di ogni articolo. 
Se nello *Storico di magazzino* ci sono anni con rimanenza 0 la ricerca delle stratificazioni LIFO si ferma e si valorizza dall’anno stratificato successivo.

:::note Nota
Per tutti gli anni precedenti all'ultima chiusura di magazzino viene considerata la giacenza a fine anno, senza suddividerla per magazzino.   
Di conseguenza, per le stampe LIFO e FIFO è possibile applicare il filtro di *raggruppamento per magazzino* solo per l'anno corrente, ovvero per tutte le registrazioni effettuate dopo la data di ultima chiusura del magazzino.
:::

Facciamo un esempio:

la chiusura di magazzino è con data 31/12/2023
oggi facciamo la stampa inventario valorizzato dell’articolo A che ha giacenza al 23/05/2024 di 170 e costo medio al 23/05/2024 di 3 euro
Nello storico per l’articolo A troviamo:

| Anno | Rimanenza | Costo medio |
| :-- | :-: | :-: |
| 2020 | 100 | 2 |
| 2021 |   0 | 0 |
| 2022 |  60 | 1,5 |
| 2023 | 100 | 2,5 |         

Il calcolo viene fatto così:
170 di oggi sono sicuramente 100 del 2023, dei 100 del 2023 60 sono sicuramente del 2022, non possono essere del 2021 perché la giacenza era 0.
Allora il costo LIFO al 23/05/2024 è:
((60 * 1,5) + (40 * 2,5) +(70 * 3)) /170 = 2,35

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form di stampa fare riferimento al seguente link [Anteprima e stampa](/docs/guide/common/operations-with-data/reports).