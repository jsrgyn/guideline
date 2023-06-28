const prompt = require('prompt-sync')();

var Mai = 0.0;
var Pesado = '';

function topo() {
  console.clear();
  console.log('---------------------------------------------');
  console.log('      D E T E C T O R  D E  P E S A D O      ');
  console.log(` Maior Peso ate agora: ${Mai} Kg.            `);
  console.log('---------------------------------------------');
}

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}



topo();

for (let I = 1; I <= 5; I++) {
  var N = prompt('Digite o nome: ');
  var P = parseFloat(prompt(`Digite o peso de ${N}: `));
  if (P > Mai) { 
    Mai = P; 
    Pesado = N;
  }
  topo();
}
topo();
console.log(`A pessoa mais pesada foi ${Pesado} com ${Mai} quilos.`)

fim_prog();