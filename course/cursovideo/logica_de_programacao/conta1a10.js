const prompt = require('prompt-sync')();

var Cont = 1;
var R = 0;
var N = parseInt(prompt('Quer ver a tabuada de qual numero? '));

do {
  R = N * Cont;
  console.log(`${N} x ${Cont} = ${R}`);
  Cont++
} while(Cont < 11);

console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');