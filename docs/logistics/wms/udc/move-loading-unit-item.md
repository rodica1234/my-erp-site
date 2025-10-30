---
title: Spostamento articoli tra due unità di carico
sidebar_position: 7
---

:::important A cosa serve
La funzione Spostamento Articoli tra Due Unità di Carico del WMS di Fluentis permette di trasferire facilmente articoli da un'unità di carico di partenza a una di destinazione.     
Attraverso la scansione dei codici a barre, l'operatore può visualizzare gli articoli contenuti nella prima UDC e, dopo aver selezionato la UDC di destinazione, è in grado di spostare rapidamente le quantità desiderate, rendendo il processo di movimentazione più efficiente.
:::  

Alla lettura della prima unità di carico, questa viene inserita come unità di carico di partenza e vengono visualizzati nella griglia sottostante tutti gli articoli contenuti al suo interno, con l’indicazione di: *codice articolo*, *quantità*, *lotto* e *descrizione articolo*.        
La seconda lettura, invece, va ad inserire l'unità di carico di destinazione ed ogni successiva lettura di unità di carico verrà considerata come la nuova destinazione.      
Lo step successivo è quello di leggere l'articolo da spostare (che in automatico viene flaggato nella griglia sottostante) ed inserire la quantità; anche in questa form se l'articolo è gestito a lotti viene visualizzato anche il relativo campo di inserimento.      
Dopo di che sarà sufficiente premere il pulsante **Sposta** per effettuare il movimento di scarico dall'unità di carico di partenza e di carico nell'unità di carico di destinazione.           
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.     

:::note Regole da tenere presente per il corretto utilizzo della form:
- Le unità di carico di partenza e arrivo devono essere valide.
- La unità di carico di partenza deve essere caricata.
- L'articolo scansionato deve essere all'interno dell'unità di carico di partenza (inclusi eventuali lotti).
- L'unità di carico destinazione può non essere caricata solo se è vuota o se le quantità di tutti gli articoli al suo interno sono pari a zero; se le quantità degli articoli al suo interno sono maggiori di zero, quella unità di carico deve essere caricata.
- Non è possibile superare la quantità presenti nell'unità di carico di partenza.
- Per la creazione del movimento di magazzino viene controllata la disponibilità per l'articolo e il lotto.
- Le unità di carico di partenza e di destinazione non devono essere contenute in una **Lista di prelievo UDC / Packing list** o in una **Lista di trasferimento UDC**. 
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

I parametri sono inseriti due volte poiché la form utilizza una causale di scarico dall'unità di carico di partenza e una di carico nell'unità di carico di destinazione.

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
