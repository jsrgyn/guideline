const prompt = require('prompt-sync')();

var F = prompt('Qual é a temperatura aqui? ');

var C = ((F - 32) / 1.8).toFixed(1);

console.log(`No Brasil estaria ${C}`);


console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');