// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

const namesList = ['Andrea', 'Giovanni', 'Francesco', 'Cristina'];
const surnamesList = ['Mandelli', 'Germani', 'Ferrari', 'Ghisini'];
const newNamesList = [];

for (let i=0; i < namesList.length; i++) {

    const name = namesList[Math.floor(Math.random() * ((namesList.length - 1) + 1)) + 0];
    const surname = surnamesList[Math.floor(Math.random() * ((surnamesList.length - 1) + 1)) + 0];

    // Push nel nuovo array
    const newName = name + ' ' + surname;
    newNamesList.push(newName);
}

console.log(newNamesList);


// [Math.floor(Math.random() * (MAX-min + 1)) + min]