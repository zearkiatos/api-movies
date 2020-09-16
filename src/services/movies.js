const { moviesMock } = require('../data/mocks/movies');

class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }

    async getMovie(id) {
        const movie = await Promise.resolve(moviesMock.find(m => m.id === id));
        return movie || {};
    }

    async createMovie() {
        const createdMovieId = await Promise.resolve(moviesMock[0].id);
        return createdMovieId || {};
    }

    async updateMovie() {
        const updatedMovieId = await Promise.resolve(moviesMock[0].id);
        return updatedMovieId || {};
    }

    async deleteMovie() {
        const deletedMovieId = await Promise.resolve(moviesMock[0].id);
        return deletedMovieId || {};
    }
}

module.exports = MoviesService;