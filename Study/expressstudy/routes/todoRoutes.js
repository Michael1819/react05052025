const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authMiddleware");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

router.use(authenticate);

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
