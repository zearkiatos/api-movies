const express = require('express');
const MoviesService = require('../services/movies');

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesServices = new MoviesService();

  router.get('/', async (request, response, next) => {
    const { tags } = request.query;
    try {
      const movies = await moviesServices.getMovies(tags);
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
      const movie = await moviesServices.getMovie(id);
      response.status(201).json({
        data: movie,
        message: 'movie retrived',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
      const { body: movie } = request
    try {
        const createdMovieId = await moviesServices.createMovie(movie);
      response.status(200).json({
        data: createdMovieId,
        message: 'movie created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:id', async (request, response, next) => {
    const { id } = request.params;
    const { body: movie } = request
    try {
      const updatedMovieId = await moviesServices.updateMovie(movie, id);
      response.status(200).json({
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async (request, response, next) => {
    const { id } = request.params;
    try {
      const deleteMovieId = await moviesServices.deleteMovie(id);
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
