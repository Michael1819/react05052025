const { CustomError } = require("../errors/CustomError");

function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    if (err.logging) {
      console.error(JSON.stringify({
        statusCode: err.statusCode,
        errors: err.errors,
        stack: err.stack
      }, null, 2));
    }
    return res.status(err.statusCode).send({ errors: err.errors });
  }

  console.error(JSON.stringify(err, null, 2));
  return res.status(500).send({ errors: [{ message: "Something went wrong" }] });
}

module.exports = { errorHandler };
