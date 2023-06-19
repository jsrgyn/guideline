const { type } = require('os');
const { types } = require('util');

const prompt = require('prompt-sync')();

var n1 = prompt('Informe um numero: ');
var n2 = prompt('Informe outro numero: ');
var s = parseInt(n1) + parseInt(n2)
// console.log(`A soma é ${s}`);
console.log(`A soma entre ${n1} e ${n2} é igual a ${s}`);

console.log('-----------------------');

console.log('A variavel S é do tipo:', typeof(s));

console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');