const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var soC = [];
var tot = 0;
soC.length = 10;

for (let c = 1; c <= 10; c++) {
  var nome = prompt('Digite seu nome: ');
  if (nome[0].toUpperCase() === 'C') {
    tot++;
    soC[tot - 1] = nome;
  }
}

console.clear();

console.log('LISTAGEM FINAL');

for (let c = 1; c <= tot; c++) {
  console.log(soC[c - 1]);
}

fim_prog();