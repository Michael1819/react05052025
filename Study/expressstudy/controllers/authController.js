const jwt = require("jsonwebtoken");
const { CustomError } = require("../errors/CustomError");

const users = [];
const todos = {};

function signup(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new CustomError("Username and password are required", 400, true);
    }

    if (users.find(u => u.username === username)) {
      throw new CustomError("User already exists", 409, true);
    }

    users.push({ username, password });
    todos[username] = [];
    res.status(201).send("Signup successful");
  } catch (err) {
    next(err);
  }
}

function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      throw new CustomError("Invalid credentials", 401);
    }

    const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}

function logout(req, res) {
  res.status(200).send("Logged out");
}

module.exports = { signup, login, logout, todos };

