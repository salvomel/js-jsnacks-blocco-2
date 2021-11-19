// Crea un array di numeri interi e fai la somma di 
// tutti gli elementi che sono in posizione dispari.

const numbersList = [9, 11, 43, 28, 12, 3, 30, 5];

let somma = 0;

for (i=0; i < numbersList.length; i++) {
    let thisNumber = numbersList[i];

    if (i % 2 !=0) {
        somma += thisNumber
    }

}

console.log(somma);

