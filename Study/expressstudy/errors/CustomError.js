class CustomError extends Error {
    constructor(message, statusCode = 400, logging = false) {
      super(message);
      this.statusCode = statusCode;
      this.errors = [{ message }];
      this.logging = logging;
    }
  }
  
  module.exports = { CustomError };