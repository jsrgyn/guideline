var mysql = require('mysql2');

/* module.exports = function () {
    console.log('Conexao com bd foi estabelecida');
    return mysql.createConnection({
      host : 'localhost',
      user: 'root',
      password: 'hcode123',
      database: 'portal_noticias'
    }); */

  var connMySQL = function () {
    console.log('Conexao com bd foi estabelecida');
    return mysql.createConnection({
      host : 'localhost',
      user: 'root',
      password: 'hcode123',
      database: 'portal_noticias'
    });
  }

  module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com bd');
    return connMySQL;
}