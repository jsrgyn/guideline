var { MongoClient } = require('mongodb');

class dbConnection {
  constructor() {
    this.url = 'mongodb://curso:123456@localhost:27017/admin';
    this.dbName = 'instagram';
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

module.exports = new dbConnection();