const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function parOuImpar(n) {
  if (n % 2 === 0) {
    return 'PAR'
  } else {
    return 'IMPAR'
  }
}

var N = parseInt(prompt('Digite um numero: '));
var R = parOuImpar(N);

console.log(`O numero ${N} e um valor ${R}`);

fim_prog();