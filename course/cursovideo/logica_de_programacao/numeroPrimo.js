const prompt = require('prompt-sync')();

var C = 1;
var ContDiv = 0;

C = 1;
var N = parseInt(prompt('Digite um numero: '));

do {
  console.log(`${C}`);

  if (N % C === 0) {
    ContDiv++;
  }

  C++;
} while(C <= N);

console.log('\n');

console.log(`Ao todo existem ${ContDiv} valores divisiveis.`);

console.log('\n');

if (ContDiv > 2) {
  console.log(`O valor ${N} não é primo!`)
} else {
  console.log(`O valor ${N} é primo!`)
}


console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');