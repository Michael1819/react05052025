import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "../components/TodoInput";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("renders input and add button", () => {
  render(
    <Provider store={store}>
      <TodoInput task="" setTask={() => {}} />
    </Provider>
  );

  expect(screen.getByPlaceholderText(/add a task/i)).toBeInTheDocument();
  expect(screen.getByText("+")).toBeInTheDocument();
});

test("allows typing in input", () => {
  const mockSetTask = vi.fn();
  render(
    <Provider store={store}>
      <TodoInput task="" setTask={mockSetTask} />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/add a task/i);
  fireEvent.change(input, { target: { value: "New Task" } });

  expect(mockSetTask).toHaveBeenCalledWith("New Task");
});
