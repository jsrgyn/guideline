const prompt = require('prompt-sync')();

function ParOuImpar(v) {
  if (v % 2 === 0) {
    console.log(`O numero ${v} é PAR`)
  } else {
    console.log(`O numero ${v} é IMPAR`);
  }
}

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var N = parseInt(prompt('Digite um numero: '))
ParOuImpar(N);

fim_prog();
