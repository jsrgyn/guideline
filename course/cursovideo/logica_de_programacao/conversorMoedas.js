const prompt = require('prompt-sync')();

var C = 1;
var D = 0;

var Q = parseInt(prompt('Quantas vezes voce quer convernter? '));

while (C <= Q) {
  var R = prompt('Qual o valor em R$? ');
  D = (R/2.20).toFixed(2);
  console.log(`O valor convertido e US$ 
   ${D}`)
   C++
}


console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');