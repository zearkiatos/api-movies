const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock } = require('../mocks/movies');
const { MongoLibMock, getAllStub } = require('../mocks/mongoLib');

describe('services - movies', () => {
    const MoviesServices = proxyquire('../../src/services/movies',{
        '../../src/lib/mongo': MongoLibMock
    });

    const moviesService = new MoviesServices();

    describe('When getMovies method is called', async () => {
        it('Should call the getAll MongoLib method', async () => {
            await moviesService.getMovies({});

            assert.strictEqual(getAllStub.called, true);
        });

        it('Should return an array of movies', async () => {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;

            assert.deepEqual(result, expected);
        });
    });
});