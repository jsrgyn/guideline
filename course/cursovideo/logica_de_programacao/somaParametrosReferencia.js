var X = 0;
var Y = 0;

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function Soma(A , B) {
  A++;
  B += 2;

  console.log(`Valor de A = ${A}`)
  console.log(`Valor de B = ${B}`)
  console.log(`Soma A + B = ${A + B}`)
}

X = 4;
Y = 8;

Soma(X, Y);

console.log(`Valor de X = ${X}`);
console.log(`Valor de Y = ${Y}`);

fim_prog();