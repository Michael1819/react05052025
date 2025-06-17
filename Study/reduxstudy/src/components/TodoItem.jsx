import React from "react";
import { Link } from "react-router-dom";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.task}
      </span>
      <Link to={`/detail/${todo.id}`}>
      <button className="detail-btn">Detail</button>
      </Link>
      <button onClick={() => onDelete(todo.id)}>🗑️</button>
    </li>
  );
}
