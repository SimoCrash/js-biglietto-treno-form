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

let sconto = 0 + "%";

if (eta < 18) {
    prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.8)).toFixed(2);
    sconto = 20 + "%";
} else if (eta >= 65) {
    prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.6)).toFixed(2);
    sconto = 40 + "%";
} else {
    prezzoViaggio = parseFloat(kmPercorsi * prezzoKm).toFixed(2);
}

document.querySelector(".km_percorsi").innerHTML =`Km percorsi: ${kmPercorsi} km`;

document.querySelector(".eta").innerHTML =`Età del passeggero: ${eta} anni`;

document.querySelector(".sconto").innerHTML = `Lo sconto per la tua età è: ${sconto}`;

document.querySelector(".prezzo_km").innerHTML =`Prezzo per km: ${prezzoKm} €`;

document.querySelector(".prezzo_viaggio").innerHTML =`Prezzo totale del viaggio: ${prezzoViaggio} €`;


