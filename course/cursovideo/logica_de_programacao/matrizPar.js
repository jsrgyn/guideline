const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var valores = [[], [], []];

for (let l = 1; l <= 3; l++) {
  for (let c = 1; c <= 3; c++) {
    valores[l - 1] [c - 1] = parseInt(prompt(`Digite o valor da posição [${l}, ${c}] (linha, coluna): `))
  }
}

console.log('\n', valores);

console.log('\n', 'MATRIZ: ', '\n', '-----------------------------');

var col = '';
var totPar = 0;

for (let l = 1; l <= 3; l++) {
  for (let c = 1; c <= 3; c++) {
    if (valores[l - 1] [c - 1] % 2 === 0) {
      col = col + '{' + valores[l - 1][c - 1] + '}' + '      ';
      totPar++;
    } else {
    col = col + '[' + valores[l - 1][c - 1] + ']' + '      '; 
    }
  }
  console.log(col);
  col = '';
}

console.log('\n', `Ao todos foram digitados ${totPar} valores PARES`);

fim_prog();
