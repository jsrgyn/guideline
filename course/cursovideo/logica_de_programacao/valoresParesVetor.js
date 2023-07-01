const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var val = [];
val.length = 7;
var TotPar = 0;

for (let i = 1; i <= 7; i++) {
  val[i - 1] = parseInt(prompt(`Digite o ${i}o. valor: `));

  // if (val[i - 1] % 2 === 0) {
  //   TotPar++
  // }
}

// console.log('\n', `O tatal de pares foi: ${TotPar}`, '\n');
console.log('\n');

for (let i = 1; i <= 7; i++) {
  if (val[i - 1] % 2 === 0) {
    TotPar++
    console.log(`Valor PAR na Posição ${i}`)
  }
}

console.log('\n', `O tatal de pares foi: ${TotPar}`, '\n');



fim_prog();

