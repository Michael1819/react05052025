import { useState } from "react";
import "./App.css";
import SelectAllFormSolution from "./many_practices/SelectAllForm/solution";
import ReduxTodoSolution from "./ReduxTodoSolution";
import Day12Play from "./day12_interactivity/notes";
import Checkbox from "./day12_interactivity/ControlledComponents/Checkbox";
import Select from "./day12_interactivity/ControlledComponents/Select";
import RadioGroup from "./day12_interactivity/ControlledComponents/RadioGroup";
import TodoListApp from "./day12_interactivity/TodoListApp";
function App() {
  return (
    <>
      <Day12Play />
      <Checkbox />
      <Select />
      <RadioGroup />
      <TodoListApp />
    </>

  );
}

export default App;
