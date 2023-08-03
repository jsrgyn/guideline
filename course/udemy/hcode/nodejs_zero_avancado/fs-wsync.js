const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5));

console.log('Antes da leitura do Arquivo');

const dados = fs.readFile('tmp/file.txt', (err, data) => {
  if(err) throw err;
    // console.log('Executando a leitura de file.txt');
    console.log('Terminei a leitura do File.txt');
});

console.log('Executando o console após o arquivo');

console.log((process.hrtime()[0]/60).toFixed(5));