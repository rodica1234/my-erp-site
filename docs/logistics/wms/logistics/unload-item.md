---
title: Scarico articolo
sidebar_position: 2
---

:::important A cosa serve
La funzione di **scarico articolo** è progettata per facilitare il prelievo degli articoli da un magazzino. Utilizzando il codice a barre, l'operatore può selezionare l’articolo e l’ubicazione da cui effettuare il prelievo, inserire la quantità da scaricare e, se necessario, il lotto specifico. Questa procedura genera il movimento di scarico di magazzino, aggiornando le giacenze e garantendo la corretta registrazione dei flussi di merci.
:::

Questa procedura è utilizzata per creare un movimento di scarico di un articolo da una determinata ubicazione.        
Nel campo **Codice barcode**, l’operatore dovrà solamente leggere il Barcode dell’articolo, poi quello dell’ubicazione da cui vuole scaricarlo.        
Successivamente dovrà solo inserire la quantità da movimentare, ed una volta confermato verrà creato anche il relativo movimento di magazzino.        
Nel caso in cui l'articolo sia gestito a lotti, verrà visualizzato anche il relativo campo in cui andare ad inserire il lotto che dovrà essere scaricato.         
Inoltre, è possibile stampare anche l'etichetta del codice articolo tramite il pulsante **Stampa** o visualizzare l'anteprima direttamente sul terminale con il pulsante **Anteprima**.        
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.

:::note Nota
Il *Codice Articolo* e il *Lotto* devono avere l’anagrafica presente su Fluentis.
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Magazzino Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Nota
Se nei [Parametri Magazzino Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
