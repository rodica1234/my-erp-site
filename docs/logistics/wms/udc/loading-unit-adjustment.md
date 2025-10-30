---
title: Rettifica unità di carico
sidebar_position: 8
---

:::important A cosa serve
La funzione Rettifica Unità di Carico del WMS di Fluentis permette di apportare modifiche agli articoli contenuti in un'unità di carico, consentendo rettifiche sia positive che negative.     
Gli operatori possono visualizzare tutti gli articoli presenti, variare le quantità e aggiungere o rimuovere articoli, rendendo il processo di aggiornamento delle giacenze più preciso ed efficiente.
:::  

Questa procedura è utilizzata per rettificare gli articoli di un'unità di carico, in positivo o negativo, oppure per aggiungere un nuovo articolo o toglierne uno già presente.   
Alla lettura dell'unità di carico vengono visualizzati nella griglia sottostante tutti gli articoli contenuti al suo interno, con l'indicazione dei seguenti campi:

> **Articolo**: indica la classe e il codice dell'articolo contenuto nell'unità di carico;       
> **Descrizione**: indica la descrizione dell'articolo contenuto nell'unità di carico;       
> **Quantità**: indica la quantità dell'articolo contenuto nell'unità di carico;   
> **Lotto**: indica il lotto dell'articolo contenuto nell'unità di carico (presente solo se gestito a lotti);           
> **Variante**: indica la variante dell'articolo contenuto nell'unità di carico (presente solo se gestito a variante).       

Selezionando uno degli articoli, con i pulsanti **+** e **-**, oppure tramite tastiera, è possibile variare rispettivamente in positivo o negativo la quantità riporta in griglia.       
Una volta ultimate le correzioni su tutti gli articoli interessati, tramite il pulsante **Conferma** verranno confermati ed effettuati i relativi movimenti di magazzino di rettifica positivi e negativi all'interno dell'unità di carico selezionata.
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.     

Nel caso in cui venga aggiunto un nuovo articolo non presente nell'unità di carico, verrà visualizzato un messaggio che permette all'utente di decidere se questo nuovo articolo debba essere aggiunto o meno all'unità di carico. In questa situazione, è importante ricordare che se l'articolo (da aggiungere), è gestito a lotti, deve essere obbligatoriamente inserito anche un lotto valido.          
Per rimuove, invece, un articolo basterà portare la relativa quantità a zero.       

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

I parametri sono inseriti due volte poiché la form utilizza una causale di scarico per le rettifiche negative e una di carico per le rettifiche positive.

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
