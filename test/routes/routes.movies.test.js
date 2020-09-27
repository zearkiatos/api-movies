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
});
