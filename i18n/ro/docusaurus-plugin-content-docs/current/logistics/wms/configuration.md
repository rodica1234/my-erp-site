---
title: Configurazione
sidebar_position: 2
---

**Installazione su device**

Per poter installare l’app su dispositivo, occorre utilizzare un file .apk scaricabile dal repository on line. 

**Download aggiornamenti**

Se l’ambiente cliente viene aggiornato non occorre installare nuovamente l'applicazione, perché in automatico l’app recupera tutte le informazioni dal server e scarica gli aggiornamenti.
Ci sono casi specifici in cui però è necessario procedere con la sostituzione dell’apk sul device, quindi sarà necessario installare nuovamente l'applicazione.

**Configurazione in WPF**

- **Menu/Utente**: creare un *Menu* personalizzato in cui mostrare solo le form da utilizzare. L’utente del wms deve avere il flag sulla *Soluzione Fluentis WMS*.

- **Parametri magazzino carico/scarico per utente**: questi parametri servono ad introdurre delle restrizioni per gli utenti e possono essere settati nella tabella [Parametri magazzino carico/scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) presente in *Parametri > Parametri generali*. In assenza di questi parametri, l’utente può effettuare le operazioni di movimentazione su qualsiasi magazzino, ma questo implica il dover scegliere un magazzino all’interno delle singole form con la relativa causale. Ovviamente questa operatività non è corretta e non è gestibile dall’operatore. In questi parametri è invece possibile indicare per ciascuna form e ciascun operatore, il magazzino e la casuale di default che saranno precompilate all’apertura della form.       

- **Barcode tokenizer**: i barcode possono essere configurati all’interno della form [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer), presente in: Tabelle > Impostazioni generali > Barcode tokenizer. Questi permettono di "istruire" il programma ad interpretare i barcode ed ad eseguire delle determinare azioni.

- **U.M. Alternativa - Def. WMS**: per le sole form *Carico Articolo*, *Scarico Articolo*, *Sposta Articolo*, *Rettifica Articolo*, *Giacenza* e *Inventario*, è stata introdotta la possibilità di movimentare la merce tramite l’UM Alternativa. La configurazione si ottiene attivando il flag *Default WMS* nel Tab [U.M. Alternative](/docs/erp-home/registers/items/create-new-item) presente nell'*Anagrafica Articolo*. Nelle form indicate viene visualizzata la solo UM Alternativa nel campo UM, le movimentazioni create hanno l’ UM Alternativa e la Quantità Alternativa popolate secondo il fattore di conversione.

- **Form in WPF**: per accedere alle form in WPF occorre avere sull’utente la soluzione F21-WMS.

- **Licenza WMS**: il WMS ha le licenze dedicate. Nel tab Licenza in wpf è possibile verificare il numero di licenze dedicate al WMS. La licenza viene occupata dall’utente che utilizza la Soluzione F21-WMS. Quindi sia se l’accesso viene effettuato su dispositivo Mobile, sia da wpf con quella Soluzione. 









  

