const joi = require('@hapi/joi');

const movieIdSchema = joi.string();
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationSchema = joi.number().min(1).max(300);
const movieContentRaitingSchema = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const movieTagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = joi.object({
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRaiting: movieContentRaitingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema
});

const updateMovieSchema = joi.object({
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieCoverSchema,
    description: movieDescriptionSchema,
    duration: movieDurationSchema,
    contentRaiting: movieContentRaitingSchema,
    source: movieSourceSchema,
    tags: movieTagsSchema
});

const getMovieSchema = joi.object({
    id: movieIdSchema
});

module.exports = {
    getMovieSchema,
    createMovieSchema,
    updateMovieSchema
}