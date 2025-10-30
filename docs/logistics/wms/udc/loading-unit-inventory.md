---
title: Inventario unità di carico
sidebar_position: 9
---

:::important A cosa serve
La funzione Inventario Unità di Carico del WMS di Fluentis consente di effettuare un inventario accurato delle unità di carico presenti a magazzino.        
Gli operatori possono leggere l'ubicazione per visualizzare le UDC contenute e procedere con la registrazione delle quantità, generando automaticamente movimenti di rettifica per allineare le giacenze logiche con quelle fisiche.
:::  

Questa procedura è utilizzata per eseguire un inventario delle UDC presenti a magazzino.

Alla lettura dell'ubicazione vengono visualizzate nella griglia sottostante tutte le unità di carico contenute al suo interno, con l'indicazione dei seguenti campi: 

> **Unità di carico**: indica il numero dell'unità di carico contenuta nell'ubicazione;        
> **Tipo**: indica il tipo dell'unità di carico contenuta nell'ubicazione;     
> **Data inventario**: indica l'ultima data in cui è stata inventariata l'unità di carico contenuta nell'ubicazione.  

Lo step successivo è quello di leggere l'unità di carico da inventariare; se questa è presente tra quelle contenute nell'ubicazione selezionata viene aggiornata la **Data inventario** con la data odierna. Nel caso in cui, invece, l'unità di carico letta non sia presente nell'ubicazione viene mostrato un messaggio di avviso all'utente.      
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.     

Una volta ultimate le letture dell'unità di carico, con la pressione del pulsante **Conferma**, solo nel caso in cui siano presenti delle unità di carico non inventariate, la procedura creerà dei movimenti di scarico di quelle unità di carico dall'ubicazione selezionata e di carico delle stesse nell'ubicazione di default indicata nella causale presente nei 
[Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

I parametri sono inseriti due volte poiché la form utilizza una causale di scarico dell'unità di carico dall'ubicazione di partenza e una di carico dell'unità di carico nell'ubicazione di destinazione.

:::note ATTENZIONE
La causale di carico associata deve avere indicata un'ubicazione di default all'interno della tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
