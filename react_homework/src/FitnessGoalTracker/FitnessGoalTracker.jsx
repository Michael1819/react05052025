import React, { useState } from 'react';
// import './FitnessGoalTracker.css';  

export default function FitnessGoalTracker() {
  const [form, setForm] = useState({
    goal: '',
    category: 'Strength Training',
    repetitions: ''
  });
  const [goals, setGoals] = useState([]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function addGoal() {
    if (!form.goal.trim() || !form.repetitions.trim()) return;
    setGoals([
      ...goals,
      { ...form, achieved: false }
    ]);
    setForm({
      goal: '',
      category: 'Strength Training',
      repetitions: ''
    });
  }

  function markAsAchieved(index) {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, achieved: true } : goal
    );
    setGoals(updatedGoals);
  }

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Fitness Goal Tracker</h2>

      <input
        type="text"
        name="goal"
        placeholder="Enter fitness goal"
        value={form.goal}
        onChange={handleChange}
        className="tracker-input"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="tracker-select"
      >
        <option value="Strength Training">Strength Training</option>
        <option value="Cardio">Cardio</option>
      </select>

      <input
        type="text"
        name="repetitions"
        placeholder="Enter repetitions"
        value={form.repetitions}
        onChange={handleChange}
        className="tracker-input"
      />

      <button onClick={addGoal} className="tracker-add-button">Add Goal</button>

      <div className="tracker-goal-list">
        {goals.map((goal, index) => (
          <div key={index} className="tracker-goal-item">
            <span className="tracker-goal-text">
              {goal.goal} - <strong>{goal.category}</strong> ({goal.repetitions})
            </span>
            {goal.achieved ? (
              <span className="tracker-achieved-text">Achieved</span>
            ) : (
              <button
                onClick={() => markAsAchieved(index)}
                className="tracker-achieve-button"
              >
                Mark as Achieved
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
