// Parole Palindrome

// Chiedere all’utente di inserire una parola

const parolaInserita = prompt("Inserisci una parola : ");

console.log(verificaParolaPalindroma(parolaInserita));

// Creare una funzione per capire se la parola inserita è palindroma

function verificaParolaPalindroma(stringa) {

    const parolaInvertita = stringa.split("").reverse().join("");

    // SE la parola inserita dall'utente è uguale alla parola inserita ma invertita

    if (parolaInserita === parolaInvertita) {

        // La parola inserita è palindroma (otto, oro, afa)

        return "La parola inserita è palindroma";

    } else {

        return "La parola inserita NON è palindroma";

    }

}