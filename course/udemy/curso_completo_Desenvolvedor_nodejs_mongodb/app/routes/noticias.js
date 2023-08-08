var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

  var connection = dbConnection();

  app.get('/noticias', function(req, res) {
    // var mysql = require('mysql');
    /* var mysql = require('mysql2');
  
    var connection = mysql.createConnection({
      host : 'localhost',
      user: 'root',
      password: 'hcode123',
      database: 'portal_noticias'
    }); */
  
    connection.query('select * from noticias', function(error, result){
      /* if (error)
        console.log(error);
 */
      // res.send(result);
      res.render("noticias/noticias", {noticias: result});
    })
    // res.render("noticias/noticias");
  })
}
