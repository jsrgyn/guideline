const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function string15(t) {
  var str = '';

  for (let i = 0; i <= 15; i++) {
    if (t[i] === undefined) {
      str = str + ' ';
    } else {
    str = str + t[i];
    }
  }

  return str;
}

var nome = [];
var n1 = [];
var n2 = [];
var m = [];
var SM = 0.0;
var MT = 0.0;
var Tot = 0;

nome.length = 4;
n1.length = 4;
n2.length = 4;
m.length = 4;

for (let i = 1; i <= 4; i++) {
  console.log(`Aluno: ${i}`);
  nome[i - 1] = prompt('Nome: ');
  n1[i - 1] = parseFloat(prompt('Primeira Nota: '));
  n2[i - 1] = parseFloat(prompt('Segunda Nota: '));
  m[i - 1] = (n1[i - 1] + n2[i - 1]) / 2;
  SM = SM + m[i - 1];
}

MT = SM / 4;

console.clear();
console.log(' LISTAGEM DE ALUNOS ');
console.log('-------------------------------------');

console.log('NOME           MEDIA');

for (let i = 1; i <= 4; i++) {
  console.log(string15(nome[i - 1]), m[i - 1]);
  if (m[i - 1] > MT ) {
    Tot++;
  }
}

console.log(`Ao todo temos ${Tot} alunos acima da media da turma que é ${MT}`);

fim_prog();
