import React, { useState } from "react";
import { useFitnessGoal } from "./FitnessGoalContext";
import TrackerList from "./TrackerList";

export default function FitnessGoalTracker() {
  const { addGoal } = useFitnessGoal();

  const [form, setForm] = useState({
    name: "",
    category: "Strength Training",
    repetitions: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleAdd(e) {
    e.preventDefault();
    addGoal(form);
    setForm({
      name: "",
      category: "Strength Training",
      repetitions: "",
    });
  }

  return (
    <div>
      <h2>Fitness Goal Tracker</h2>
      <form onSubmit={handleAdd}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter fitness goal name"
        />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="Strength Training">Strength Training</option>
          <option value="Cardio">Cardio</option>
        </select>

        <input
          name="repetitions"
          value={form.repetitions}
          onChange={handleChange}
          placeholder="Enter repetitions"
        />

        <button type="submit">Add Goal</button>
      </form>
      <TrackerList />
    </div>
  );
}