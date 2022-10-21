let nomeCognome;
let kmPercorsi;
let eta;
let sconto = 0 + "%";
const prezzoKm = 0.21;
let prezzoViaggio;

const btn = document.getElementById("genera");

btn.addEventListener('click', function(){
    nomeCognome = document.querySelector('#nome_cognome').value;
    kmPercorsi = document.querySelector('#km').value;
    eta = document.querySelector('#eta').value;

    if (eta == "Minorenne") {
        prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.8)).toFixed(2);
        sconto = 20 + "%";
    } else if (eta == "Over 65") {
        prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.6)).toFixed(2);
        sconto = 40 + "%";
    } else {
        prezzoViaggio = parseFloat(kmPercorsi * prezzoKm).toFixed(2);
    }
    
    document.querySelector(".name-surname").innerHTML =`Nome e Cognome: Signor/Signora ${nomeCognome}.`;

    document.querySelector(".km_percorsi").innerHTML =`km da percorrrere: ${kmPercorsi}.`;

    document.querySelector(".eta").innerHTML = eta;

    document.querySelector(".sconto").innerHTML = `Lo sconto per la tua età è: ${sconto}`;

    document.querySelector(".prezzo_km").innerHTML =`Prezzo per km: ${prezzoKm} €`;

    document.querySelector(".prezzo_viaggio").innerHTML =`Prezzo totale del viaggio: ${prezzoViaggio} €`;
})
