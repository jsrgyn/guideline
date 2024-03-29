/* 
algoritmo "equacao"
  var a, b, e: Inteiro delta: Real
  xl, x2: Real
inicio
  Escreval ("Equacao do Segundo Grau')
  Escreval ("-----------------------")
  Escreva ("Informe o valor de A: ")
  Leia (a)
  Escreva ("Informe o valor de B: ")
  Leia (b)
  Escreva ("Informe o valor de C: ")
  leia (c)
  Escreval ("---------------------")
  Escreval ("Sua equacao e:", a, "×2 +", b, "x +", c, " = 0")
  delta : = (b*b) - 4*a*c
  Escreval ("Valor de Delta: ", delta:4:2)
  Escreval ("---------------------")
  Se (delta < 0) entao
  Escreval ("Para Delta negativo, nao existem raizes Reais")
  senao
    Se (delta = 0) entao
      x1 := (-b + raizQ(delta)) / (2*a)
      Escreval ("Para Delta zero, temos duas raizes iguais a ", x1)
    senao
      x1 := (-b + raizQ (delta) ) / (2*a)
      x2 := (-b - raizQ (delta) ) / (2*a)
      Escreval ("Para Delta positivo. Raizes diferentes: ")
      Escreval ("×' = ", x1:4:2)
      Escreval ("×'' = ", x2:4:2)
    FimSe
  FimSe
fimalgoritmo
*/

var prompt = require('prompt-sync')();

console.log('Equacao do Segundo Grau');
console.log('-----------------------');

var a = prompt('Informe o valor de A: ');
var b = prompt('Informe o valor de B: ');
var c = prompt("Informe o valor de C: ");
console.log('-----------------------');

console.log(`Sua equacao é: ${a}×2 + ${b}x + ${c} = 0`);

var delta = (b*b) - 4*a*c

console.log(`Valor de Delta: ${delta.toFixed(2)}`);
  
console.log('-----------------------');

if (delta < 0) {
  console.log('Para Delta negativo, nao existem raizes Reais');
} else if (delta === 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2*a)
  console.log(`Para Delta zero, temos duas raizes iguais a , ${x1}`);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2*a);
  let x2 = (-b - Math.sqrt(delta)) / (2*a);
  console.log('Para Delta positivo. Raizes diferentes:');
  console.log(`×' = ${x1.toFixed(2)}`);
  console.log(`×'' = ${x2.toFixed(2)}`);
}

console.log('');
console.log('*** Fim da execução.');
console.log('*** Feche esta janela para retornar ao Visualg.');