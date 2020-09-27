const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

const validate = (data, schema) => {
    const { error } = joi.validate(data, schema);
    return error;
}

const validationHandler = (schema, check = 'body') => {
    return (request, response, next) => {
        const error = validate(request[check], schema);
        error ? next(boom.badRequest(error)) : next();
    };
}

module.exports = validationHandler;