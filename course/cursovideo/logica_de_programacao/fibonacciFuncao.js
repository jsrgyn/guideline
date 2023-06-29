var obj = {
  v1: 0,
  v2: 1
}

function fim_prog() {
  console.log('---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

function proximoFibonacci(v) {
  let N3 = v.v1 + v.v2;
  v.v1 = v.v2;
  v.v2 = N3;
  return N3;
}

console.log(obj.v1);
console.log(obj.v2);

for (let I = 3; I <= 5; I++) {
  let T3 = proximoFibonacci(obj);
  console.log(T3);
}

fim_prog();