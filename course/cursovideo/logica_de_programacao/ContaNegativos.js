const prompt = require('prompt-sync')();

var N = 0;
var C = 1;
var TotN = 0;

console.log('-----------------------');

do {
  N = parseInt(prompt('Digite um numero: '));
  if (N < 0) {
    TotN = TotN + 1
  }
  C++;
} while (C <= 5);

console.log(`Foram digitados ${TotN} valores negativos`);



console.log('');
console.log('*** Fim da execução.');
console.log('');