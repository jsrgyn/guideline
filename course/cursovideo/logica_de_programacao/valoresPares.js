const prompt = require('prompt-sync')();

console.log('Processo sequencial 1, 2, 3...')
var V = parseInt(prompt('Digite um valor: '));
for (let CONT = 1; CONT <= V; CONT++) {
  console.log(`Valor de CONT: ${CONT}`);
}

console.log('-----------------------', '\n');

console.log('Processo sequencial de 2 em 2 1, 2, 4...')
V = parseInt(prompt('Digite um valor: '));
for (let CONT = 0; CONT <= V; CONT += 2) {
  console.log(`Valor de CONT: ${CONT}`);
}

console.log('-----------------------', '\n');

console.log('Processo decrementando de 2 em 2 10, 8, 6...')
V = parseInt(prompt('Digite um valor: '));

if (V%2 === 1) { V -= 1}

for (let CONT = V; CONT >= 0; CONT -= 2) {
  console.log(`Valor de CONT: ${CONT}`);
}

console.log('-----------------------', '\n');

console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');