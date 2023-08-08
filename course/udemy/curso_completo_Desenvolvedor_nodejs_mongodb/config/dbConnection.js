var mysql = require('mysql2');

module.exports = function () {
  
    return mysql.createConnection({
      host : 'localhost',
      user: 'root',
      password: 'hcode123',
      database: 'portal_noticias'
    });

}