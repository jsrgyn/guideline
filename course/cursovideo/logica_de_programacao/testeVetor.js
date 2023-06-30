const prompt = require('prompt-sync')();

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var v = [];
v.length = 6;


console.log(v);

for (let c = 1; c <= 6; c++) {
  v[c - 1] = parseInt(prompt(`Digite o ${c}o. valor: `));
}

console.log(v, v.length);
var x = '';

for (let c = 1; c <= 6; c++) {
  x = x + ' {' + v[c - 1] + '}'
}

console.log(x);

console.log(typeof(v));

fim_prog();