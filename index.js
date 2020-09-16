const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { config } = require('./config');
const moviesApi = require('./src/routes/movies');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port} ✅`);
});
