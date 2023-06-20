const prompt = require('prompt-sync')();

var angulo = prompt('Informe um angulo: ');
var S = Math.sin(angulo * Math.PI/180).toFixed(1)

console.log(`O seno de ${angulo} e igual a ${S}`);

console.log('');
console.log('*** Fim da execução.');
console.log('');
