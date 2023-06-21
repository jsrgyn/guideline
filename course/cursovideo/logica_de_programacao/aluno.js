const prompt = require('prompt-sync')();

var N1 = parseInt(prompt('Primeira Nota: '));
var N2 = parseInt(prompt('Segunda Nota: '));

var M = ((N1 + N2) / 2).toFixed(1);

console.log(`A media do aluno foi ${M}`);

if (M >= 7) {
  console.log('Aluno APROVADO')
} else if (M >= 5 & M < 7) {
  console.log('Aluno em RECUPERAÇÃO')
} else {
  console.log('Aluno REPROVADO')
}

console.log('-----------------------');


console.log('');
console.log('*** Fim da execução.');
console.log('');