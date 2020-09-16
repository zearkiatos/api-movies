const express = require('express');
const { moviesMock } = require('../data/mocks/movies');

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async (request, response, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);
      response.status(200).json({
          data: movies,
          message: 'movies was listed'
      });
    } catch (error) {
        next(error);
    }
  });
};

module.exports = moviesApi;
