const { MongoClient } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;
const DB_PORT = config.port;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((error) => {
          if (error) {
            reject(error);
          }
          console.log('Connected successfully to mongo ✅');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }
}

module.exports = MongoLib;
