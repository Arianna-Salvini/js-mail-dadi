console.log("Do you wanna play? Give me your email.");

///// Chiedere user email/////

// - Chiedi all’utente la sua email
//     - PROMP per chiedere email

const userEmail = prompt("Inserisci il tuo indirizzo E-mail");
console.log(userEmail);

// - Controlla che sia nella lista di chi può accedere
//      - creare un ARRAY di indirizzi email
let emailList = ["ari@gmail.com",  "john.doe@example.com", "jane.smith@example.com", "alice123@example.com", "bob.jones@example.com", "emily_22@example.com"];
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

if (valid){
    alert("Hello there! welcome!")
} else {
    alert("Sorry, your e-mail could not be find")
}


// - Stampa un messaggio appropriato sull’esito del controllo.
//      - SE l'indizizzo è nella lista inviare un ALERT con messaggio A
//      - ALTRIMENTI invia ALERT con messaggio B



