const prompt = require('prompt-sync')();

var S = 0;
var Cont = 1;
var resp = 'S';

/* while (Cont <= 5) {
  var N = parseInt(prompt(`Digite o ${Cont} o. valor ==> `));
  S = S + N;
  Cont++;
}

console.log(`A soma de todos os valores digitados é ${S}`); */

/* while (resp === 'S') {
  var N = parseInt(prompt(`Digite o ${Cont} o. valor ==> `));
  S = S + N;
  resp = prompt('Voce quer continuar? [S/N] ');
}

console.log(`A soma de todos os valores digitados é ${S}`); */

do {
  var N = parseInt(prompt(`Digite o ${Cont} o. valor ==> `));
  S = S + N;
  resp = prompt('Voce quer continuar? [S/N] ');
} while (resp === 'S')

console.log(`A soma de todos os valores digitados é ${S}`);


console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');