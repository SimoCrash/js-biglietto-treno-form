// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

let nomeCognome;
let kmPercorsi;
let eta;

const btn = document.getElementById("genera");

btn.addEventListener('click', function(){
    nomeCognome = document.querySelector('#nome_cognome').value;
    kmPercorsi = document.querySelector('#km').value;
    eta = document.querySelector('#eta').value;
})
//const eta = parseInt(prompt("quanti anni hai?"));

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

document.querySelector(".name-surname").innerHTML =`Nome e Cognome: Signor/Signora ${nomeCognome}.`;

document.querySelector(".km_percorsi").innerHTML =`km da percorrrere: ${kmPercorsi}.`;

document.querySelector(".eta").innerHTML = eta;

//document.querySelector(".sconto").innerHTML = `Lo sconto per la tua età è: ${sconto}`;

//document.querySelector(".prezzo_km").innerHTML =`Prezzo per km: ${prezzoKm} €`;

//document.querySelector(".prezzo_viaggio").innerHTML =`Prezzo totale del viaggio: ${prezzoViaggio} €`;


