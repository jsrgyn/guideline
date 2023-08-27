/* importar o mongodb */
/* var mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;

var connMongoDB = function(){
  console.log('Entrou na função de conexão')

  const url = 'mongodb://curso:123456@localhost:27017/admin';
 */
  /* var db = mongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
if (!err) {
console.log('We are connected');
} else {
console.log('Trouble connecting');
}
}) */

  /* var db = new mongo.Db(
    'got',
    mongo.server(
      'localhost', //string contendo o endereço do servidor
      27017, //porta de conexão
      {}
    ),
    {}
  ); */


  // var db = new MongoClient(new Server('localhost', 27017));


/*   const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  return client.connect().then(() => {
    console.log('Conectado ao MongoDB');
    const db = client.db(dbName);
    return db; // Retorna a instância do banco de dados
  }).catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
    throw err;
  });
}

module.exports = async function(){
  return await connMongoDB;
    } */


    /* const { MongoClient } = require('mongodb');

    function connectToMongoDB() {
      const url = 'mongodb://localhost:27017';
      const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
      return client.connect().then(() => client.db('got'));
    }
    
    module.exports = connectToMongoDB; */

const { MongoClient } = require('mongodb');

    class dbConnection {
      constructor() {
        this.url = 'mongodb://curso:123456@localhost:27017/admin';
        this.dbName = 'got';
        this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
      }
    
      async connect() {
        try {
          await this.client.connect();
          console.log('Conectado ao MongoDB');
          this.db = this.client.db(this.dbName);
        } catch (error) {
          console.error('Erro ao conectar ao MongoDB:', error);
        }
      }
    
      getDatabase() {
        // console.log('>>>>>>>getDatabase()', this.db)
        if (this.db) {
          return this.db; // Retorna o objeto de banco de dados
        } else {
          throw new Error('Conexão com o banco de dados não foi estabelecida');
        }
      }
    
      closeConnection() {
        this.client.close();
        console.log('Conexão fechada');
      }
    }
    
    /* module.exports = function(){
      return MongoConnection;
      } */

      module.exports = new dbConnection();