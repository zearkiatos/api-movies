const sinon = require('sinon');

const { moviesMock, filteredMoviesMocks } = require('./movies');

const getAllStub = sinon.stub();

getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMocks);

const createStub = sinon.stub().resolves(moviesMock[0].id);

const updateStub = sinon.stub().resolves(moviesMock[0].id);

const getMovieStub = sinon.stub().resolves(moviesMock[0]);

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query);
    }

    create(collection, data) {
        return createStub(collection, data);
    }

    get(collection, id) {
        return getMovieStub(collection, id);
    }

    update(collection, id) {
        return updateStub(collection, id);
    }
}

module.exports = {
    getAllStub,
    createStub,
    updateStub,
    MongoLibMock,
    getMovieStub
}
