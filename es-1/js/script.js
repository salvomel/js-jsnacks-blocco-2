// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

const userNumber = parseInt(prompt('Inserisci un numero'));
let number;

if (userNumber % 2 === 0) {
    number = userNumber;
} else {
    number = userNumber + 1;
}

console.log(number);