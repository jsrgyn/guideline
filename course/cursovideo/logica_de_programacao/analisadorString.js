const prompt = require('prompt-sync')();

var N = prompt('Digite seu nome: ');

console.log(`Total de letras do seu nome é ${N.length}`);
console.log(`Seu nome em maiusculas é ${N.toUpperCase()}`);
console.log(`Seu nome em minusculas é ${N.toLowerCase()}`);
console.log(`A primeira letra do seu nome é ${N.substring(0, 1)}`);
console.log(`A ultmima letra do seu nome é ${N.substring(N.length - 1)}`);
console.log(`A seu nome tem a letra A na posição ${N.indexOf('a')}`);
console.log(`O codigo da letra A é: ${'A'.charCodeAt()}`);
console.log(`A letra de codigo 65 é ${String.fromCharCode(65)}`);

con

for (let C = N.length; C <= 1; C--) {
  var x = N.toUpperCase().split(C, 1)
}

console.log(x);

