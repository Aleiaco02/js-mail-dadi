// messaggio per far interagire l'utente e lanciare il dado
alert("Premi OK per lanciare il tuo dado");

// Numero casuale da 1 a 6 per l'utente
const giocatore = Math.floor(Math.random() * 6) + 1;

// Numero casuale da 1 a 6 per il computer
const computer = Math.floor(Math.random() * 6) + 1;

// Mostro i punteggi
alert("Hai tirato: " + giocatore);
console.log("Hai tirato: ", giocatore);
alert("Il computer ha tirato: " + computer);
console.log("Il computer ha tirato: ", computer);


// Stabilisco il vincitore
if (giocatore > computer) {
  alert("Hai vinto!");
  console.log("Hai vinto!");

} else if (giocatore < computer) {
  alert("Ha vinto il computer!");
  console.log("Ha vinto il computer!");

} else {
  alert("Pareggio!");
  console.log("Pareggio!");
}