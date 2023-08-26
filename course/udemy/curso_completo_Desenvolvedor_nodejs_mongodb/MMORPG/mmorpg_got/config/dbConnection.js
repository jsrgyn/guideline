/* importar o mongodb */
// var mongo = require('mongodb');
const mongoClient = require('mongodb').MongoClient;

module.exports = function() {

  const url = 'mongodb://curso:123456@localhost:27017/admin';

  var db = new mongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
if (!err) {
console.log('We are connected');
} else {
console.log('Trouble connecting');
}

  /* var db = new mongo.Db(
    'got',
    mongo.server(
      'localhost', //string contendo o endereço do servidor
      27017, //porta de conexão
      {}
    ),
    {}
  ); */

  return db;
}