const prompt = require('prompt-sync')();

var ano_atual = prompt('Em que ano nos estamos? ');
var ano_nasc = prompt('Em que ano eu nasci? ');

var idade = ano_atual - ano_nasc;

console.log(`Minha idade será: ${idade}`);


console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');