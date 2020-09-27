require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    environment: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPort: process.env.DB_PORT,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    debug: process.env.DEBUG_EXPRESS
};

module.exports = { config }