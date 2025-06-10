import React from "react";

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
      <button onClick={() => onDelete(todo.id)}>🗑️</button>
    </li>
  );
}
