const prompt = require('prompt-sync')();

var nome = prompt('Qual o nome do Funcionario? ');
var sal = parseFloat(prompt('Qual o salario do Funcionario? '));
var dep = parseInt(prompt('Qual é a quantidade de dependentes? '));

var nSal = 0;

  switch (dep) {
    case 0: nSal = sal + (sal * 5 / 100);
    break;
    case 1, 2, 3: nSal = sal + (sal * 10 / 100);
    break;
    case 4, 5, 6: nSal = sal + (sal * 15 / 100);
    break;
    default: nSal = sal + (sal * 18 / 100);
  }

  console.log(`O novo salario de ${nome} sera de R$ ${nSal}`);


console.log('-------------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');