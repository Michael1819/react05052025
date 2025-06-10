export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function fetchTodos() {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    dispatch({ type: FETCH_TODOS, payload: data });
  };
}

export function addTodo(todoData) {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoData)
    });
    const data = await res.json();
    dispatch({ type: ADD_TODO, payload: data });
  };
}

export function deleteTodo(id) {
  return async function (dispatch) {
    await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
    dispatch({ type: DELETE_TODO, payload: id });
  };
}

export function toggleTodo(todo) {
  return async function (dispatch) {
    const updated = { ...todo, completed: !todo.completed };
    const res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    });
    const data = await res.json();
    dispatch({ type: TOGGLE_TODO, payload: data });
  };
}

