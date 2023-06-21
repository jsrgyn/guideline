const prompt = require('prompt-sync')()

console.log('----------------------------');
console.log('     CRIANÇA ESPERANÇA      ');
console.log('----------------------------');
console.log(' Muito obrigado por ajudar  ');
console.log(' [1] para doar R$ 10 ');
console.log(' [2] para doar R$ 25 ');
console.log(' [3] para doar R$ 50 ');
console.log(' [4] para doar outros valores ');
console.log(' [5] para cancelar ');

var D = parseInt(prompt('Digite sua opçao aqui: '));

var valor = 0;

switch (D) {
  case 1: valor = 10;
  break;
  case 2: valor = 25;
  break;
  case 3: valor = 50;
  break;
  case 4: valor = parseFloat(prompt('Qual o valor da doação? R$ '));
  break;
  case 5: valor = 0; 
  break;
}

console.log('----------------------------');
console.log(` SUA DOACAO FOI DE R$ ${valor}`);
console.log(' MUITO OBRIGADO!');
console.log('----------------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');