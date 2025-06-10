import React from "react";

function TodoInput({ task, setTask, handleAdd }) {
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

export default TodoInput;
