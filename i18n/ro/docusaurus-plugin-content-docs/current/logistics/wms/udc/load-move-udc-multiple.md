---
title: Carico/Sposta UDC Multiplo
sidebar_position: 3
---

:::important A cosa serve
La funzione **Carico/Sposta UDC** del WMS di Fluentis è progettata per semplificare il processo di gestione delle unità di carico. Consente agli operatori di caricare un'unità di carico non ancora registrata nel sistema o di spostare un'unità già caricata da una ubicazione a un'altra, tutto tramite la scansione del codice a barre. Grazie a questa funzionalità, il sistema facilita le operazioni di magazzino in tempo reale.
:::

Questa procedura è utilizzata per la lettura di una o più unità di carico per poter procedere al *Carico massivo*, se le unità di carico risultano non caricate o allo *Spostamento massivo* se le unità di carico risultano già essere caricate.   

L’operatore può effettuare queste operazioni leggendo direttamente il barcode di una o più unità di carico, nel caso in cui queste non siano caricate, queste vengono direttamente aggiunte nella griglia sottostante il campo codice barcode.     
La procedura propone automaticamente come ubicazione in cui deve essere caricata l’UDC quella presente nella testata dell'UDC stessa viene abilitato il pulsante **Carico**, con il quale viene creato il movimento di magazzino in tempo reale.        

Mentre, nel caso in cui siano già caricate, la procedura richiederà di inserire l’ubicazione di destinazione dello spostamento, attivando il pulsante **Sposta** con il quale verranno creati i relativi movimenti di scarico con contropartita di carico nella nuova ubicazione.          

Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.   

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

I parametri sono inseriti due volte poiché la form utilizza sia una causale di carico per le unità di carico da caricare, sia una di scarico per le unità di carico già caricate e quindi da scaricare. La causale di scarico deve avere una causale di carico in contropartita.     

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
