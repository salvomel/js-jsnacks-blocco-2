// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// a somma degli elementi è minore di 50.

let somma = 0;

numbersList = [];

while (somma < 50) {
    const userNumber = parseInt (prompt ('Inserisci un numero'));
    console.log(userNumber);

    // If se utente inserisce qualcosa che non sia un numero
    if (!isNaN(userNumber)) {

        numbersList.push(userNumber);
        console.log(numbersList);

        somma += userNumber;
        console.log(somma);
    }
}

console.log(`${somma}`);