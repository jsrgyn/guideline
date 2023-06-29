var obj = {
  T1: 0,
  T2: 1
}

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function proximoFibonacci(O) {
  let C = 0;
  C = O.T1 + O.T2;
  console.log(C);
  O.T1 = O.T2;
  O.T2 = C;
}

console.log(obj.T1);
console.log(obj.T2);

for (let C = 3; C <= 10; C++) {
  proximoFibonacci(obj);
}

fim_prog();