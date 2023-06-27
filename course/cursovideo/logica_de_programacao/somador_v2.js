const prompt = require('prompt-sync')();

var C = 1;
var S = 0;

while (C <= 5) {
  var N = parseInt(prompt('Digite um valor: '));

  S = S + N;
  C++
}

console.log(`A soma dos valores é: ${S}`);

console.log('-----------------------');

// A mesma logica com For
S = 0;
console.log('Começando o mesmo processamento usando for ');

for (let f = 1; f <= 5; f++) {
  var n = parseInt(prompt('Digite um valor: '));
  S = S + n;
}
console.log(`A soma dos valores é ${S}`)

console.log('-----------------------');

// A logica com controle do usuário.
S = 0;
console.log('Começando a logica com controle do usuário - repita ');

var Resp = '';

do {
  let z = parseInt(prompt('Digite um valor: '));
  S = S + z;
  Resp = prompt('Quer continuar? (S/N) ');
} while (Resp.toLocaleUpperCase() === 'S');

console.log(`A soma dos valores é ${S}`);


console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');