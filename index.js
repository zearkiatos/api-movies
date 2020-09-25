const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { config } = require('./config');
const moviesApi = require('./src/routes/movies');
const { logErrors, errorHandler } = require('./src/middleware/errorHandlers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port} ✅`);
});
