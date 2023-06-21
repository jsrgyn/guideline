const prompt = require('prompt-sync')();

var M = parseFloat(prompt('Massa (Kg): '));

var A = parseFloat(prompt('Altura (m): '));

var IMC = (M / (A ** 2)).toFixed(2);

console.log(`IMC: ${IMC}`);

if (IMC >= 18.5 & IMC < 25) {
  console.log('Parabens! Voce esta no seu peso ideal')
} else {
  console.log('Voce não esta na feixa de peso ideal')
}

console.log('-----------------------');

if (IMC < 17) {
  console.log('Muito abaixo do Peso')
} else if (IMC >= 17 & IMC < 18.5) {
  console.log('Abaixo do Peso')
} else if (IMC >= 18.5 & IMC < 25) {
  console.log('Peso ideal')
} else if (IMC >= 25 & IMC < 30) {
  console.log('Sobrepeso')
} else if (IMC >= 30 & IMC < 35) {
  console.log('Obesidade')
} else if (IMC >= 35 & IMC < 40) {
  console.log('Obesidade Severa')
} else {
  console.log('Obesidade Morbida')
}

console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');