console.log("Do you wanna play? Give me your email.");

/// Chiedere user email/////

// - Chiedi all’utente la sua email
//    - PROMP per chiedere email

const userEmail = prompt("Inserisci il tuo indirizzo E-mail");
console.log(userEmail);

// - Controlla che sia nella lista di chi può accedere
//      - creare un ARRAY di indirizzi email
let emailList = ["a", "ari@gmail.com",  "john.doe@example.com", "jane.smith@example.com", "alice123@example.com", "bob.jones@example.com", "emily_22@example.com"];
let valid = false;

console.log(emailList, valid);

 // - creare un CICLO per il confronto dell'email con l'array
for (let i = 0; i < emailList.length; i++) {
    let emailCheck = emailList[i];

    if (userEmail == emailCheck) {
       valid = true
       console.log(valid);
    }
}

// - Stampa un messaggio appropriato sull’esito del controllo.
//      - SE l'indizizzo è nella lista inviare un ALERT con messaggio A
//      - ALTRIMENTI invia ALERT con messaggio B

if (valid){
    alert("Hello there! welcome!")
} else {
    alert("Sorry, your e-mail could not be find")
}


/////Gioco dei dadi/////
const rollButton = document.getElementById("roll_button")
const diceNumber = [1, 2, 3, 4, 5, 6];

rollButton.addEventListener("click", function () {

    let pcDice = Math.floor(Math.random() * 6) + 1;
    let yourDice = Math.floor(Math.random() * 6) + 1;

    console.log(pcDice, yourDice);
    document.getElementById("your_dice").innerHTML = yourDice
    document.getElementById("pc_dice").innerHTML = pcDice

    const result = document.getElementsByClassName("result")
    let gameWinner 


    if (yourDice == pcDice) {
        gameWinner = "It's a Draw!"


    } else if (yourDice > pcDice) {
        gameWinner = "You Win!";

    } else {
        gameWinner = "You Loose..."

    }

    console.log(gameWinner);
    document.getElementById("result").insertAdjacentHTML("afterbegin", gameWinner)
});



// - Stabilire il vincitore, in base a chi fa il punteggio più alto.
//     - confrontare i numeri generati
//     - confermare il vincitore che ha il numero maggiore






