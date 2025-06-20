const express = require("express");
const router = express.Router();
const { login, logout, signup } = require("../controllers/authController");
const { authenticate } = require("../middlewares/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", authenticate, logout);

module.exports = { authRouter: router };
