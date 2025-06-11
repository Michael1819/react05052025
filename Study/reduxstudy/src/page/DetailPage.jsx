import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DetailPage() {
  const todos = useSelector(state => state.todos);

  return (
    <div style={{ padding: "40px" }}>
      <div className="nav-bar">
        <Link to="/" style={{ marginRight: "10px" }}>Main</Link>
        <Link to="/all">All Todos</Link>
      </div>
      <h2>Todo Detail Page</h2>
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.task}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>{todo.date || "-"}</td>
              <td>{todo.description || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
