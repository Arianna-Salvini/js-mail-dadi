console.log("Do you wanna play? Give me your email.");

///// Chiedere user email/////

// - Chiedi all’utente la sua email
//     - PROMP per chiedere email

const userEmail = prompt("Inserisci il tuo indirizzo E-mail")
console.log(userEmail);

// - Controlla che sia nella lista di chi può accedere
//      - creare un ARRAY di indirizzi email
const emailList = [  "john.doe@example.com", "jane.smith@example.com", "alice123@example.com", "bob.jones@example.com", "emily_22@example.com"]
console.log(emailList);
//      - creare un CICLO per il confronto dell'email con l'array

// - Stampa un messaggio appropriato sull’esito del controllo.
//      - SE l'indizizzo è nella lista inviare un ALERT con messaggio A
//      - ALTRIMENTI invia ALERT con messaggio B