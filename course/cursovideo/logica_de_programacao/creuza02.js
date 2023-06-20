const prompt = require('prompt-sync')();

const vlr_dolar = 2.20;

var reais = prompt('Quantos Reais eu tenho? R$ ');
var dolares = (reais / vlr_dolar).toFixed(2);

console.log(`Posso ter US$ ${dolares}`);

console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');