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
        message: 'movies was listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (request, response, next) => {
    try {
      const { id } = request.params;
      const movie = await Promise.resolve(moviesMock.find((m) => m.id === id));
      response.status(201).json({
        data: movie,
        message: 'movie retrived',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
        const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      response.status(200).json({
        data: updatedMovieId,
        message: 'movie created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:id', async (request, response, next) => {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      response.status(200).json({
        data: createMovieId,
        message: 'movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async (request, response, next) => {
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id);
      response.status(200).json({
        data: deleteMovieId,
        message: 'movie deleted',
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = moviesApi;
