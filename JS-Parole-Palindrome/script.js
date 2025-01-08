// Parole Palindrome

// Chiedere all’utente di inserire una parola

const parolaInserita = prompt("Inserisci una parola : ");

console.log(verificaParolaPalindroma());

// Creare una funzione per capire se la parola inserita è palindroma

function verificaParolaPalindroma() {

    // const parolaInvertita = stringa.split("").reverse().join("");

    let parolaInvertita = "";

    for (let i = parolaInserita.length - 1; i >= 0; i--) {

        parolaInvertita = parolaInvertita + parolaInserita[i];

    }

    // SE la parola inserita dall'utente è uguale alla parola inserita ma invertita

    if (parolaInserita === parolaInvertita) {

        // La parola inserita è palindroma (otto, oro, afa)

        return "La parola inserita è palindroma";

    } else {

        return "La parola inserita NON è palindroma";

    }

}