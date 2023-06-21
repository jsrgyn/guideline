const prompt = require('prompt-sync')();


var N = prompt('Digite um numero qualquer: ');

if (N % 2 === 0) {
  console.log(`O numero ${N} é PAR`);
} else {
  console.log(`O numero ${N} é IMPAR`);
}

console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');