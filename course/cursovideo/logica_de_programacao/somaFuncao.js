const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function soma(X, Y) {
  return X + Y;
}

var V1 = parseInt(prompt('Digite o primeiro valor: '));
var V2 = parseInt(prompt('Digite o segundo valor: '));
var S = soma(V1, V2);

console.log(`O valor da soma de ${V1} com ${V2} é ${S}`);
console.log(`A soma entre ${V1} e ${V2} é igual a ${S}`);

fim_prog();
