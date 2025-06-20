const jwt = require("jsonwebtoken");
const { CustomError } = require("../errors/CustomError");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("Authorization token missing", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    throw new CustomError("Invalid or expired token", 403);
  }
}

module.exports = { authenticate };