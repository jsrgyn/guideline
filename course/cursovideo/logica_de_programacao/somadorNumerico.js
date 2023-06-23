const prompt = require('prompt-sync')();

var cont = 1;
var soma = 0;
var maior = 0;

while (cont <= 10) {
  var n = parseInt(prompt(`Digite o ${cont}o. valor : `));

  if (n > maior) {
    maior = n;
  }

  soma = soma + n; 
  cont++
}

console.log(`A soma de todos os valores foi ${soma}`)
console.log(`E maior valor digitado foi: ${maior}`)


console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');