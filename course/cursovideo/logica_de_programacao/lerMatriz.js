const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var mat = [[], [], []];
mat[0].length = 2;
mat[1].length = 2;
mat[2].length = 2;

console.log(mat);

for (let l = 1; l <= 3; l++) {
  for (let c = 1; c <= 2; c++) {
    mat[l - 1][c - 1] = parseInt(prompt(`Digite o valor da posição [${l}, ${c}] (linha, coluna): `));
  }
}

console.log(mat)

for (let l = 1; l <= 3; l++) {
  for (let c = 1; c <= 2; c++) {
    console.log(mat[l - 1] [c - 1]);
  }
}

fim_prog();