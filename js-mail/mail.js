// creo un array lista mail dele persone invitate 
const mailList = [
    "mario@example.com",
    "giulia@example.com",
    "luca@example.com",
    "anna@example.com",
    "paolo@example.com",
    "chiara@example.com",
    "davide@example.com"
]

// dichiaro la variabile che fa inserire all utente la mail
const mailUtente = prompt("inserisci la tua mail");

// dichiaro la variabile che mi fa controllare
let controllo = false;

// creo il ciclo for per il controllo su tutto l'array
for (let i = 0; i < mailList.length; i++) {

    // se la mail inserita dall'utente è uguale a una presente nel database la variabile controllo diventa true e quindi lo avrà trovato e di conseguenza il ciclo si stopperà
  if (mailUtente === mailList[i]) {
    controllo = true;
    break; // interrompo il ciclo se ho trovato
  }
}

if (controllo) {
    alert("Benvenuto, la festa inizierà alle 22:00 in Via Como 17")
    console.log("Benvenuto, la festa inizierà alle 22:00 in Via Como 17");
}
else {
    alert("Errore, la tua e-mail non è registrata")
    console.log("Errore, la tua e-mail non è registrata");
    
}