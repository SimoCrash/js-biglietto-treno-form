let nomeCognome; //dato visibile
let kmPercorsi;
let tipoBiglietto = "Biglietto Standard"; //dato visibile
let eta;
let sconto = 0 + "%";
const prezzoKm = 0.21;
let prezzoViaggio; //dato visibile
let ticket = document.querySelector(".container-ticket");

const btn = document.getElementById("genera");

btn.addEventListener('click', function(){
    nomeCognome = document.querySelector('#nome_cognome').value;
    kmPercorsi = document.querySelector('#km').value;
    eta = document.querySelector('#eta').value;
    ticket.classList.add("d_block");

    if (eta == "Minorenne") {
        prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.8)).toFixed(2);
        sconto = 20 + "%";
        tipoBiglietto = "Biglietto Scontato(20%)";
    } else if (eta == "Over 65") {
        prezzoViaggio = parseFloat(((kmPercorsi * prezzoKm) * 0.6)).toFixed(2);
        sconto = 40 + "%";
        tipoBiglietto = "Biglietto Scontato(40%)";
    } else {
        prezzoViaggio = parseFloat(kmPercorsi * prezzoKm).toFixed(2);
    }
    
    document.querySelector(".name-surname").innerHTML = nomeCognome;

    document.querySelector(".tipo_biglietto").innerHTML = tipoBiglietto;

    document.querySelector(".eta").innerHTML = eta;

    document.querySelector(".sconto").innerHTML = `Lo sconto per la tua età è: ${sconto}`;

    document.querySelector(".prezzo_viaggio").innerHTML =`${prezzoViaggio} €`;
})
