var http = require('http');

var opcoes = {
  hostname: 'localhost',
  port: 80,
  // path: '/',
  path: '/teste',
  // method: 'post',
  method: 'get',
  headers: {
    // 'Accept': 'text/html'
    'Accept': 'application/json',
    // 'Content-type': 'application/x-www-form-urlencoded'
    'Content-type': 'application/json'
  }
}

var buffer_corpo_response = []; 

/* // http.get('http://localhost', function(res){
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
}); */

// Content-type
// x www form urlencoded
/* var html = 'nome=José'; // <== x www form urlencoded
var json = {nome: 'José'};
var string_json = JSON.stringify(json); */


var req =  http.request(opcoes, function(res){
    res.on('data', function(pedaco){
      // console.log(' ' + pedaco);
      // console.log(pedaco); //buffer
      buffer_corpo_response.push(pedaco);
    });
  
    res.on('end', function(){
      var corpo_response = Buffer.concat(buffer_corpo_response).toString();
  
      console.log(corpo_response);

      console.log(res.statusCode);
    });
  });

// req.write(html);
// req.write(string_json);

req.end();