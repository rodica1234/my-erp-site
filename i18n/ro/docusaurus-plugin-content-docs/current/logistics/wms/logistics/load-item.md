---
title: Carico articolo
sidebar_position: 1
---

:::important A cosa serve
La funzione di **carico articolo** consente di registrare in modo preciso l’arrivo degli articoli nei magazzini. Attraverso questa procedura, gli operatori possono scansionare il codice a barre dell’articolo e dell’ubicazione, inserire la quantità da caricare e, nel caso di articoli gestiti a lotti, specificare anche il lotto corrispondente. Una volta confermata l'operazione, il movimento di magazzino viene creato automaticamente, assicurando una gestione efficace delle giacenze e una tracciabilità completa.
:::

Questa procedura è utilizzata per creare un movimento di carico di un articolo in una determinata ubicazione.        
Nel campo **Codice barcode**, l’operatore dovrà solamente leggere il Barcode dell’articolo, poi quello dell’ubicazione in cui vuole caricarlo.           
Successivamente dovrà solo inserire la quantità da movimentare, ed una volta confermato verrà creato anche il relativo movimento di magazzino.       
Nel caso in cui l'articolo sia gestito a lotti, verrà visualizzato anche il relativo campo in cui andare ad inserire il lotto che dovrà essere caricato.        
Inoltre, è possibile stampare anche l'etichetta del codice articolo tramite il pulsante **Stampa** o visualizzare l'anteprima direttamente sul terminale con il pulsante **Anteprima**.          
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.

:::note Nota
Il *Codice Articolo* e il *Lotto* devono avere l’anagrafica presente su Fluentis.
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Magazzino Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Nota
Se nei [Parametri  MagazzinoCarico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
