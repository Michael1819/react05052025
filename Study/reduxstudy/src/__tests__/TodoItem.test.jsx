import React from "react";  
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { BrowserRouter } from "react-router-dom";

describe("TodoItem", () => {
  const mockTodo = {
    id: "123",
    task: "Test task",
    completed: false
  };

  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  test("renders task text and Detail button", () => {
    renderWithRouter(
      <TodoItem todo={mockTodo} onToggle={() => {}} onDelete={() => {}} />
    );

    expect(screen.getByText("Test task")).toBeInTheDocument();
    expect(screen.getByText("Detail")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("calls onToggle when checkbox is clicked", () => {
    const onToggle = vi.fn();
    renderWithRouter(
      <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={() => {}} />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledWith(mockTodo);
  });

  test("calls onDelete when delete button is clicked", () => {
    const onDelete = vi.fn();
    renderWithRouter(
      <TodoItem todo={mockTodo} onToggle={() => {}} onDelete={onDelete} />
    );

    const deleteButton = screen.getByText("🗑️");
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledWith("123");
  });

  test("has a correct detail link", () => {
    renderWithRouter(
      <TodoItem todo={mockTodo} onToggle={() => {}} onDelete={() => {}} />
    );

    const link = screen.getByRole("link", { name: /detail/i });
    expect(link).toHaveAttribute("href", "/detail/123");
  });
});
