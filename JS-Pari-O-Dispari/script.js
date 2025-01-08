// Pari o Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const sceltaPariDispariUtente = prompt("Scegli tra pari o dispari e inserisci la tua risposta : ");
const numeroSceltoDallUtente = parseInt(prompt("Inserisci un numero da 1 a 5 : "));

console.log("L'utente ha scelto: ", sceltaPariDispariUtente);
console.log("Il numero scelto dall'utente è : ", numeroSceltoDallUtente);



// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numRandomComputer(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

const numEstrattoDalComputer = numRandomComputer(1, 5);

console.log("Il numero estratto dal computer è : ", numEstrattoDalComputer);



// Sommiamo i due numeri

const sommaNumeriGiocati = numeroSceltoDallUtente + numEstrattoDalComputer;

console.log("La somma del numero scelto dall'utente e quella estratta del pc è: ", sommaNumeriGiocati);



// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function verificaPariDispari(totSommaGiocata) {

    if (totSommaGiocata % 2 === 0) {

        return "pari";

    } else {

        return "dispari";

    }

}

const risultatoPariDispari = verificaPariDispari(sommaNumeriGiocati);

console.log("La somma dei due numeri è un numero: ", risultatoPariDispari);



// Dichiariamo chi ha vinto.

if ((risultatoPariDispari === "pari" && sceltaPariDispariUtente === "pari") || (risultatoPariDispari === "dispari" && sceltaPariDispariUtente === "dispari")) {

    console.log("Congratulazioni, hai vinto! 🤩");

} else {

    console.log("Ha vinto il computer, ritenta. 🤖");

}