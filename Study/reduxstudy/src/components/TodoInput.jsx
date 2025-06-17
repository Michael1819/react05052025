import React from "react";

export default function TodoInput({ task, setTask, handleAdd }) {
  return (
    <div className="input-group">
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

