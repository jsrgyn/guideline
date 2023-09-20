var http = require('http');

var opcoes = {
  hostname: 'localhost',
  port: 80,
  path: '/'
}

var buffer_corpo_response = []; 

// http.get('http://localhost', function(res){
  http.get(opcoes, function(res){
  res.on('data', function(pedaco){
    // console.log(' ' + pedaco);
    // console.log(pedaco); //buffer
    buffer_corpo_response.push(pedaco);
  });

  res.on('end', function(){
    var corpo_response = Buffer.concat(buffer_corpo_response).toString();

    console.log(corpo_response);
  });
});