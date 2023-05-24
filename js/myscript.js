const playButton = document.querySelector('header button.button-play');  //definisco la variabile bottone con querySelector 
playButton.addEventListener(('click'), function(){ // aggiungo l'azione ovvero la funzione con il "Click"
    startNewGame();
});

function startNewGame(){
    const gridElement = document.querySelector('div.grid');
    const level = parseInt(document.getElementById('level-select').value); // valore per selezionare 1.2.3

    let cellsNumber = 0;
    let cellsClass;

    if (level === 0){
        cellsNumber = 100;
        cellsClass = 'cell-easy';
    } else if (level === 1){
        cellsNumber = 81;
        cellsClass = 'cell-medium';
    } else {
        cellsNumber = 49;
        cellsClass = 'cell-hard';
    }

    gridElement.innerHTML = "";

    for (let index = 0; index < cellsNumber; index++) {  //ciclo for che per ogni volta che un numero è diverso viene implementato nell'array 
        const newCell = createElement('div','cell '+ cellsClass,
                        `<p>${index + 1}</p>`); //serve per aggiungere il numero nella cella

        newCell.addEventListener('click', function(){ // funzione che fa cambiare colore alla cella
            console.log(index + 1);
            this.classList.toggle('active'); // this === newCell
        });

        gridElement.appendChild(newCell);
    }
}

/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 * @param {string} htmlContent The content of the element to be created as a string, including html tags.
 */
function createElement(tagName, className, htmlContent){
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    htmlElement.innerHTML = htmlContent;
    return htmlElement;
}



//Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



//? DEVO GENERARE 16 NUMERI CASUALI QUINDI USO MATH RANDOM
//? PER OGNI NUMERO CASUALE DEVO AVERE UNA CLASSE CHE RICHIAMI IL COLORE ROSSO QUINDI PROBABILMENTE DEVO AVERE UNA FUNZIONE CHE AL CLICK MI CAMBIA IL COLORE CON QUELLA CLASSE


function numberRandom(minNum, maxNum, elements){
    let numbersList = []

    if ( (minNum - maxNum) < elements){
        return []
    }

    while (numbersList.length < 16){  //con il ciclo while finchè la number list è minore del numero degli elementi il ciclo inserisce i numeri
        let newRandomNumber = getRandomInt(1,100, 16); // definisco con una variabile il numero dei numeri casuali
        if (!numbersList.includes(newRandomNumber)){ // qui scrivo "finchè questo non è incluso (!) allora aggiungilo"
            numbersList.push(newRandomNumber); // se invece è già incluso finisce l'if e genera un'altro while
        }
    }

        return numbersList;
    } 


    const bombCell = createElement('div','cell

    bombCell.addEventListener('click', function(){

    }





function getRandomInt(minumNumber, maxnumNumber){  //funzione per creare un numero casuale
    const randomNumber = Math.floor(Math.random() * (maxnumNumber - minumNumber +1) + minumNumber);
    return randomNumber;
}