const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock, MovieServiceMock } = require('../mocks/movies');

const testServer = require('../config/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../../src/routes/movies', {
    '../../src/services/movies': MovieServiceMock,
  });

  const request = testServer(route);
  describe('GET /movies', () => {
    it('Should response with status 200', (done) => {
      request.get('/api/movies').expect(200, done);
    });

    it('should response with the list of movies', (done) => {
      request.get('/api/movies').end((error, response) => {
        assert.deepEqual(response.body, {
            data: moviesMock,
            message: 'movies was listed'
        }, done());
      });
    });
  });

  describe('GET /movies/:id', () => {
    it('Should response with status 200', (done) => {
      request.get('/api/movies/de62f810-6032-49ba-bbe5-e02528ef5c71').expect(200, done);
    });

    it('Should response with with the list of movie if was found', (done) => {
      request.get('/api/movies/de62f810-6032-49ba-bbe5-e02528ef5c71').end((error, response) => {
        assert.deepEqual(response.body, {
            data: moviesMock[0],
            message: 'movie was found'
        }, done());
      });
    });
  });

  describe('POST /movies', () => {
    it('Should response with status 201', (done) => {
      request.post('/api/movies').expect(201, done);
    });

    it('Should response with the movie id than was created', (done) => {
      request.post('/api/movies').end((error, response) => {
        assert.deepEqual(response.body, {
            data: moviesMock[0].id,
            message: 'movie created'
        }, done());
      });
    });
  });

  describe('PUT /movies/:id', () => {
    it('Should response with status 200', (done) => {
      request.put('/api/movies/de62f810-6032-49ba-bbe5-e02528ef5c71').expect(200, done);
    });

    it('Should response with the movie id than was updated', (done) => {
      request.put('/api/movies/de62f810-6032-49ba-bbe5-e02528ef5c71').end((error, response) => {
        assert.deepEqual(response.body, {
            data: moviesMock[0].id,
            message: 'movie updated'
        }, done());
      });
    });
  });

  describe('DELETE /movies/:id', () => {
    it('Should response with status 200', (done) => {
      request.delete('/api/movies/de62f810-6032-49ba-bbe5-e02528ef5c71').expect(200, done);
    });

    it('Should response with the movie id than was deleted', (done) => {
      request.delete('/api/movies/de62f810-6032-49ba-bbe5-e02528ef5c71').end((error, response) => {
        assert.deepEqual(response.body, {
            data: moviesMock[0].id,
            message: 'movie deleted'
        }, done());
      });
    });
  });
  
  
});
