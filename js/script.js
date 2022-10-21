// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

const kmPercorsi = parseInt(prompt("quanti km vuoi percorrere?"));
const eta = parseInt(prompt("quanti anni hai?"));

const prezzoKm = 0.21;

let prezzoViaggio;

if (eta < 18) {
    prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.8)).toFixed(2);
    console.log(prezzoViaggio);
} else if (eta >= 65) {
    prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.6)).toFixed(2);
    console.log(prezzoViaggio);
} else {
    prezzoViaggio = parseFloat(kmPercorsi * prezzoKm).toFixed(2);
    console.log(prezzoViaggio);
}