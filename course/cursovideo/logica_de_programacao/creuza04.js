const prompt = require('prompt-sync')();

var preco = prompt('Qual o preco do produto? US$ ');
var imposto = ((preco * 60) / 100).toFixed(2);

console.log(`O imposto sera de US$ ${imposto}`)

console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');