const express = require('express');
const app = express();
const { config } = require('./config');

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.get('/json', (request, response) => {
  response.json({ hello: 'world' });
});

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port} ✅`);
});
