# Creare la nostra prima app utilizzando Vue.js

## MILESTONE 1:
- Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


## MILESTONE 2:

### introduzione

Vue:
- Si basa su HTML, CSS e JavaScript.
    - non ha bisogno necessariamente di backend per funzionare.
- Tiene traccia delle modifiche allo stato di JavaScript e automaticamente modifica il DOM.
- Interessanti i Single-File Components (.vue)
    - file che contengono JavaScript, HTML e CSS di un unico componente (elemento)
    - viene scritto in formato SFC esempio (https://vuejs.org/guide/introduction.html#single-file-components)

- Esistono 2 tipi di style di utilizzo
    - Esistono 2 tipi di style di utilizzo
        - 1. **Options API:**
            - Come lo utilizzeremo durante il corso
            - utilizza un Object che contiene
                - 1. **data** sono delle variabili dinamiche che se modificate modificano automaticamente il contenuto del DOM
                - 2. **methods** contiene delle funzioni utili ps:"per cambiare un variabile (data) bisogna aggiungere this. prima della var"
                - 3. **mounted** é una funzione che viene chiamata quando il componente viene aggiunto
            - consigliato quando non utilizzi strumenti di creazione o prevedi di utilizzare Vue principalmente in scenari a bassa complessità.

        - 2. **Composition API:** 
        - non ho capito bene lo riguardo dopo
        - ma utilizza i file .vue prendendo i componenti e aggiungendo dove serve
        - consigliato quando devo creare applicazioni complete con Vue