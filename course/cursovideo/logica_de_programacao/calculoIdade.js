 const prompt = require('prompt-sync')();

 var ano = prompt('Em que ano estamos? ');

 var nasc = prompt('Em que ano voce nasceu? ');

 var idade = ano - nasc;

 console.log(`Em ${ano} voce tera ${idade} anos.`);

 if (idade >= 21) {
  console.log('E voce já tera atingido a maioridade. ');
 }


console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');