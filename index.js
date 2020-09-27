const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { config } = require('./config');
const moviesApi = require('./src/routes/movies');
const { logErrors, errorHandler, wrapErrors } = require('./src/middleware/errorHandler');
const notFoundHandler = require('./src/middleware/notFoundHandler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

moviesApi(app);
app.use(notFoundHandler);

// Errors managment middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port} ✅`);
});
