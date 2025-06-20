const { todos } = require("./authController");
const { CustomError } = require("../errors/CustomError");
const shortid = require("shortid");

function getTodos(req, res) {
  res.status(200).json(todos[req.user.username] || "No todos found");
}

function createTodo(req, res, next) {
  try {
    const { title, description = "", completed = false } = req.body;
    if (!title) throw new CustomError("Title is required", 400);

    const newTodo = {
      id: shortid.generate(),
      task: title,
      description,
      completed,
      date: new Date().toISOString().slice(0, 10)
    };

    todos[req.user.username].push(newTodo);
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
}

function updateTodo(req, res, next) {
  try {
    const list = todos[req.user.username];
    const todo = list.find(t => t.id == req.params.id);
    if (!todo) throw new CustomError("Todo not found", 404);

    const { title, description, completed } = req.body;
    if (title !== undefined) todo.task = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
}

function deleteTodo(req, res, next) {
  try {
    const list = todos[req.user.username];
    const index = list.findIndex(t => t.id == req.params.id);
    if (index === -1) throw new CustomError("Todo not found", 404);
    list.splice(index, 1);
    res.status(204).send("Deleted");
  } catch (err) {
    next(err);
  }
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };

