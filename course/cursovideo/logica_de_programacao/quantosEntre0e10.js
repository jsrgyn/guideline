const prompt = require('prompt-sync')();

var Tot010 = 0;
var SImp = 0;

for (let c = 1; c <= 6; c++) {
  var V = parseInt(prompt('Digite um valor: '));

  if ((V >= 0) & (V <= 10)) {
    Tot010++ 
    if (V%2===1) {SImp += V}
  }
}

console.log(`Ao todos foram ${Tot010} valores entre 0 e 10`);
console.log(`Nesse intervalo, a soma de impares for ${SImp}`)


console.log('-----------------------');

console.log('');
console.log('*** Fim da execução.');
console.log('');