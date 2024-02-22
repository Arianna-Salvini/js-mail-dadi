console.log("Do you wanna play? Give me your email.");

///// Chiedere user email/////

// // - Chiedi all’utente la sua email
// //    - PROMP per chiedere email

// const userEmail = prompt("Inserisci il tuo indirizzo E-mail");
// console.log(userEmail);

// // - Controlla che sia nella lista di chi può accedere
// //      - creare un ARRAY di indirizzi email
// let emailList = ["ari@gmail.com",  "john.doe@example.com", "jane.smith@example.com", "alice123@example.com", "bob.jones@example.com", "emily_22@example.com"];
// let valid = false;

// console.log(emailList, valid);

//  // - creare un CICLO per il confronto dell'email con l'array
// for (let i = 0; i < emailList.length; i++) {
//     let emailCheck = emailList[i];

//     if (userEmail == emailCheck) {
//        valid = true
//        console.log(valid);
//     }
// }

// // - Stampa un messaggio appropriato sull’esito del controllo.
// //      - SE l'indizizzo è nella lista inviare un ALERT con messaggio A
// //      - ALTRIMENTI invia ALERT con messaggio B

// if (valid){
//     alert("Hello there! welcome!")
// } else {
//     alert("Sorry, your e-mail could not be find")
// }


/////Gioco dei dadi/////
// - Creare variabili per 2 giocatori
// - Generare un numero random da 1 a 6
//     - creare un arrai di numeri da 1 a 6
const diceNumber = [1, 2, 3, 4, 5, 6];

// - generazione casuale di numeri Math.random da 1 a 6

let pcDice = Math.floor(Math.random() * 6) + 1;
let yourDice = Math.floor(Math.random() * 6) + 1;

console.log(pcDice, yourDice);
document.getElementById("your_dice").innerHTML = yourDice
document.getElementById("pc_dice").innerHTML = pcDice

if (yourDice > pcDice) {
    let gamewinner = "win"
    console.log(gamewinner);

}
else if (yourDice == pcDice) {
    let gamewinner = "draw"
    console.log(gamewinner);

}
else {
    let gamewinner = "loose"
    console.log(gamewinner);

}

// - Stabilire il vincitore, in base a chi fa il punteggio più alto.
//     - confrontare i numeri generati
//     - confermare il vincitore che ha il numero maggiore






