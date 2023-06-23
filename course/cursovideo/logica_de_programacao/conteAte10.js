const prompt = require('prompt-sync')();


var contador = 0;

while (contador <= 10) {
  console.log(contador)

  contador++
}

console.log('\n', '\n');

// console.log(String.fromCharCode(13, 13));

var contador1 = 10

while (contador1 >= 0) {
  console.log(contador1)

  contador1--
}
console.log('Terminei de contar')

console.log('\n', '\n');


/* Fluxo controlado pelo usuário */
var valor = parseInt(prompt('Quer contar ate quanto? '));
contador = 0;

while (contador <= valor) {
  console.log(contador)

  contador++
}
console.log('Terminei de contar');


/* Fluxo controlado pelo usuário com salto*/
var valor = parseInt(prompt('Quer contar ate quanto? '));
var salto = parseInt(prompt('Qual sera o valor do salto? '));

contador = 0;

while (contador <= valor) {
  console.log(contador)

  contador = contador + salto; 
}
console.log('Terminei de contar');


console.log('-------------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');