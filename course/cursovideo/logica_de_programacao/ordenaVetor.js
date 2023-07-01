const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var vet = [];
vet.length = 4;

console.log(vet);

for (let i = 1; i <= 4; i++) {
  vet[i - 1] = parseFloat(prompt('Digite um valor: '));
}


for (let i = 1; i <= 3; i++) {
  let aux = '';

  for (let j = i+1; j <= 4; j++) {
    if (vet[i - 1] > vet[j - 1]) {
      aux = vet[i - 1];
      vet[i - 1] = vet[j - 1];
      vet[j - 1] = aux
    }
  }
}

var v = '';
for (let i = 1; i <= 4; i++) {
  v = v + ` [${vet[i - 1]}] `;
}
console.log(v);

fim_prog();

fim_prog();
