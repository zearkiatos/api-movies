const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;
const DB_PORT = config.dbPort;

let MONGO_URI = '';

if (config.environment === 'develop')
  MONGO_URI = `mongodb://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}`;
else 
  MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((error) => {
          if (error) {
            reject(error);
          }
          // eslint-disable-next-line no-console
          console.log('Connected successfully to mongo ✅');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    console.log(MongoLib.connection);
    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
        return db.collection(collection).find(query).toArray();
    });
  }

  get(collection, id) {
    return this.connect().then((db) => {
        return db.collection(collection).findOne({_id: ObjectId(id)});
    });
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((response) => response.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).updateOne({_id: ObjectId(id)},{$set: data}, {upsert: true});
      })
      .then((response) => response.updatedId || id);
  }

  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({_id: ObjectId(id)});
      })
      .then(() => id);
  }
}

module.exports = MongoLib;
