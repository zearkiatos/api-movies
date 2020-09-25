const { config } = require('../../config');

const withErrorStack = (error, stack) => {
  if (config.dev) {
    return { error, stack };
  }

  return error;
};

const logErrors = (error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.log(error);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
  response.status(error.status || 500);
  response.json(withErrorStack(error.message, error.stack));
};


module.exports = {
    logErrors,
    errorHandler
}