const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function fatorial(n) {
let R = 1;
  for (let C = 1; C <= n; C++) {
    R = R * C; 
  }  
  return R
}

var N = parseInt(prompt('Digite um numero: '));
var F = fatorial(N);
console.log(`O valor de ${N}! é igual a ${F}`);

fim_prog();

