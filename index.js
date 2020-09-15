const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { isLeapYear } = require('./utils/helper');
const { config } = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.get('/json', (request, response) => {
  response.json({ hello: 'world' });
});

app.get('/is-leap-year', (request, response) => {
    const { year } = request.body
    const result =  isLeapYear(year) ? `The year ${year} is leap` : `The year ${year} is not leap`
    response.json(result);
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port} ✅`);
});
