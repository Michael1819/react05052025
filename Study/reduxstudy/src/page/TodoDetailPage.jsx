import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/actions";

function TodoDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const todo = useSelector(state =>
        state.todos.find(item => item.id.toString() === id)
    );

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(todo?.task || "");
    const [editedDesc, setEditedDesc] = useState(todo?.description || "");

    if (!todo) {
        return (
            <div className="app-container">
                <div className="todo-box">
                    <div className="nav-links">
                        <Link to="/" className="nav-link">← Back</Link>
                    </div>
                    <h2>Todo Not Found</h2>
                </div>
            </div>
        );
    }

    async function handleSave() {
        const updated = {
            ...todo,
            task: editedTask,
            description: editedDesc
        };

        await fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated)
        });

        dispatch(fetchTodos());
        setIsEditing(false);
    }

    return (
        <div className="app-container">
            <div className="todo-box">
                <div className="nav-links">
                    <Link to="/" className="nav-link">← Back</Link>
                </div>
                <h2>Todo Detail</h2>

                {isEditing ? (
                    <div className="todo-detail">
                        <p>
                            <strong>Task:</strong><br />
                            <input
                                value={editedTask}
                                onChange={e => setEditedTask(e.target.value)}
                            />
                        </p>
                        <p>
                            <strong>Description:</strong><br />
                            <textarea
                                value={editedDesc}
                                onChange={e => setEditedDesc(e.target.value)}
                            />
                        </p>
                        <div className="button-group">
                            <button className="pretty-button" onClick={handleSave}>Save</button>
                            <button className="pretty-button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className="todo-detail">
                        <p><strong>ID:</strong> {todo.id}</p>
                        <p><strong>Task:</strong> {todo.task}</p>
                        <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
                        <p><strong>Date:</strong> {todo.date}</p>
                        <p><strong>Description:</strong> {todo.description}</p>
                        <button className="pretty-button" onClick={() => setIsEditing(true)}>Edit</button>
                    </div>

                )}
            </div>
        </div>
    );
}

export default TodoDetailPage;

