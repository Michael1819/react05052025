import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { BrowserRouter } from "react-router-dom";

describe("TodoList", () => {
  const todos = [
    { id: "1", task: "Task 1", completed: false },
    { id: "2", task: "Task 2", completed: true },
  ];

  const mockToggle = vi.fn();
  const mockDelete = vi.fn();

  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  test("renders all todo items", () => {
    renderWithRouter(
      <TodoList todos={todos} onToggle={mockToggle} onDelete={mockDelete} />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    // 检查是否有两个 Detail 按钮
    const detailButtons = screen.getAllByText("Detail");
    expect(detailButtons).toHaveLength(2);
  });
});
