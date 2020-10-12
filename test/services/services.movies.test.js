const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock } = require('../mocks/movies');
const { MongoLibMock, getAllStub, getMovieStub, createStub, updateStub, deleteStub } = require('../mocks/mongoLib');

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

    describe('When getMovie method is called', async () => {

        it('Should call the get MongoLib method', async () => {
            await moviesService.getMovie('de62f810-6032-49ba-bbe5-e02528ef5c71');

            assert.strictEqual(getMovieStub.called, true);
        });
        it('Should call the get movie by id MongoLib method', async () => {
            const result = await moviesService.getMovie('de62f810-6032-49ba-bbe5-e02528ef5c71');

            const expected = moviesMock[0];

            assert.deepEqual(result, expected);
        });
    });

    describe('When createMovie method is called', async () => {

        it('Should call the create MongoLib method', async () => {
            await moviesService.createMovie(moviesMock[0]);

            assert.strictEqual(createStub.called, true);
        });
        it('Should call the create movie by id MongoLib method', async () => {
            const result = await moviesService.createMovie(moviesMock[0]);

            const expected = moviesMock[0].id;

            assert.deepEqual(result, expected);
        });
    });

    describe('When updateMovie method is called', async () => {

        it('Should call the update MongoLib method', async () => {
            await moviesService.updateMovie(moviesMock[0]);

            assert.strictEqual(updateStub.called, true);
        });
        it('Should call the update movie by id MongoLib method', async () => {
            const result = await moviesService.updateMovie(moviesMock[0]);

            const expected = moviesMock[0].id;

            assert.deepEqual(result, expected);
        });
    });

    describe('When deleteMovie method is called', async () => {

        it('Should call the delete MongoLib method', async () => {
            await moviesService.deleteMovie('de62f810-6032-49ba-bbe5-e02528ef5c71');

            assert.strictEqual(deleteStub.called, true);
        });
        it('Should call the delete movie by id MongoLib method', async () => {
            const result = await moviesService.deleteMovie('de62f810-6032-49ba-bbe5-e02528ef5c71');

            const expected = moviesMock[0].id;

            assert.deepEqual(result, expected);
        });
    });
});