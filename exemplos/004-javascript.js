/*
    Crie um programa que receba o nome e a nota de
    4 matérias.
    Exibir o nome das 4 matérias com a nota e a média final.
    Ex:
    Matemática: 7,00
    Inglês: 10,00
    Geografia: 8,00
    Física: 8,00
    Média: 8,25
*/

const entrada = require('prompt-sync')();

let mat1 = entrada ('Digite o nome da 1ª matéria: ')
let n1 = entrada ('Digite a nota de ' + mat1);

let mat2 = entrada ('Digite o nome da 2º matéria: ')
let n2 = entrada ('Digite a nota de ' + mat2);

let mat3 = entrada ('Digite o nome da 3º matéria: ')
let n3 = entrada ('Digite a nota de ' + mat3);

let mat4 = entrada ('Digite o nome da 4º matéria: ')
let n4 = entrada ('Digite a nota de ' + mat4 ); 

let media = (n1 + n2 + n3 + n4) / 4;

console.log('Notas: ');
console.log(mat1 + ': ' + nl.toFixed(2));

console.log(mat2 + ': ' + n2.toFixed(2));

console.log(mat3 + ': ' + n3.toFixed(2));

console.log(mat4 + ': ' + n4.toFixed(2));

console.log('Média: ' + media.toFixed(2));


