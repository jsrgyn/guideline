const prompt = require('prompt-sync')();

var L1 = parseInt(prompt('Digite o primeiro lado: '));
var L2 = parseInt(prompt('Digite o segundo lado: '));
var L3 = parseInt(prompt('Digite o terceiro lado: '));

var TRI = Boolean((L1 < L2 + L3) & (L2 < L1 + L3) & (L3 < L1 + L2));
var EQ = Boolean((L1 === L2) & (L2 === L3));
var ES = Boolean((L1 !== L2) & (L2 !== L3) & (L1 !== L3));

console.log(`Pode formar um TRIANGULO? ${TRI}`)
console.log(`O triangulo é EQUILATERO? ${EQ}`);
console.log(`O triangulo é ESCALENO? ${ES}`);

console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');