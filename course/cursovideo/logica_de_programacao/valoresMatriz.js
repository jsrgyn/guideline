const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var m = [[], [], [], []];
m[0].length = 4;

var sDP = 0;
var p2L = 1;
var mai3C = 0;

for (let l = 1; l <= 4; l++) {
  for (let c = 1; c <= 4; c++) {
    m[l - 1] [c - 1] = parseInt(prompt(`Digite o valor da posicao [${l}, ${c}] (linha, coluna): `));

    if (l === c) {
      sDP += m[l - 1] [c - 1];
    }
  }
}

console.log(m, '\n');

var col = '';
for (let l = 1; l <= 4; l++) {
  for (let c = 1; c <= 4; c++) {
    col = col + m[l - 1][c - 1] + '    ';
  }
  console.log('[', col, ']');
  col = '';
}

for (let c = 1; c <= 4; c++) {
  p2L = p2L * m[2] [c - 1];
}

for (let l = 1; l <= 4; l++) {
  if (m[l - 1] [3] > mai3C) {
    mai3C = m[l - 1][3]
  } 
}


console.log(`A soma dos valores da Diagonal Principal é ${sDP}`);

console.log(`O produto dos valores da Segunda Linha é ${p2L}`);

console.log(`O maior valor da Terceira Coluna é ${mai3C}`);



fim_prog();


