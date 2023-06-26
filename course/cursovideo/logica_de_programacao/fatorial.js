const prompt = require('prompt-sync')();

var C = 0;
var F = 1;
var R = '';


do {
  var N = parseInt(prompt('Digite um numero: '));
  C = N;
  do {
    console.log(`${C} x`)
    F = F * C
    C--;
  } while (C > 0)

  console.log(`O Valor do fatorial de ${N} é igual a ${F}`);


  R = prompt('Quer continuar? [S/N] ');
  console.clear();

} while (R.toUpperCase() === 'S')

console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');