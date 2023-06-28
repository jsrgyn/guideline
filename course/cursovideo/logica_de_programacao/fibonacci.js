var T1 = 0;

console.log(T1);
var T2 = 1;

console.log(T2);

for (let C = 1; C <= 13; C++) {
  var T3 = T1 + T2
  console.log(T3);

  T1 = T2;
  T2 = T3;
}

