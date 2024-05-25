const mysql = require("mysql");

class ConnectionDatabase {
  constructor() {
    this.connection = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "registroviagensltd",
    });
  }

  async connect() {
    this.connection.connect((err) => {
      if (err) throw err;
      console.log("Conectado ao banco de dados MySQL");
    });
  }

  getConnection() {
    return this.connection;
  }

  async query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve([results]);
        }
      });
    });
  }

  async close() {
    if (this.connection) {
      this.connection.end((err) => {
          if (err) {
              console.error('Erro ao fechar a conexão com o banco de dados:', err);
          } else {
              console.log('Conexão com o banco de dados encerrada');
          }
      });
      this.connection = null;
    }
  }
}

module.exports = ConnectionDatabase;
