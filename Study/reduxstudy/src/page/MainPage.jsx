import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo
} from "../redux/actions";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

export default function MainPage() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [task, setTask] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  function handleAdd() {
    if (task.trim()) {
      dispatch(
        addTodo({
          task,
          completed: false,
          date: new Date().toISOString().slice(0, 10),
          description: "default"
        })
      );
      setTask("");
    }
  }

  return (
    <div className="app-container">
      <div className="todo-box">
        <div className="nav-links">
          <Link to="/" className="nav-link" style={{ marginRight: "10px" }}>Main</Link>
          <Link to="/all" className="nav-link">All Todos</Link>
        </div>
        <h2>To Do List</h2>
        <TodoInput task={task} setTask={setTask} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          onToggle={todo => dispatch(toggleTodo(todo))}
          onDelete={id => dispatch(deleteTodo(id))}
        />
      </div>
    </div>
  );
}

