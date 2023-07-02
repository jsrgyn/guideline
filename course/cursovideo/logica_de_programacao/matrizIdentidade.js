

function fim_prog() {
  console.log('\n', '---------------------------------------------');

  console.log('');
  console.log('*** Fim da execução.');
  console.log('');  
}

var mID = [[], [], [], []];

for (let l = 1; l <= 4; l++) {
  for (let c = 1; c <= 4; c++) {

    if (l === c) {
      mID[l - 1][c - 1] = 1
    } else {
      mID[l - 1][c - 1] = 0
    }

  }
}

var col = '';
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    col = col + mID[i - 1][j - 1] + '          '; 
  }
  console.log(col);
  col = '';
}

console.log('\n', mID);



fim_prog();