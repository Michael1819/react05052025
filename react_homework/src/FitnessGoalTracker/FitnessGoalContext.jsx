import React, { createContext, useContext, useState } from "react";

const FitnessGoalContext = createContext();

export function FitnessGoalProvider(props) {
  const [goals, setGoals] = useState([]);

  function addGoal(form) {
    if (!form.name.trim() || !form.repetitions.trim()) return;
    setGoals([
      ...goals,
      {
        ...form,
        id: Date.now(),
        achieved: false,
      },
    ]);
  }

  function markAsAchieved(id) {
    setGoals(function (prev) {
      return prev.map(function (goal) {
        return goal.id === id ? { ...goal, achieved: true } : goal;
      });
    });
  }

  return (
    <FitnessGoalContext.Provider value={{ goals, addGoal, markAsAchieved }}>
      {props.children}
    </FitnessGoalContext.Provider>
  );
}

export function useFitnessGoal() {
  return useContext(FitnessGoalContext);
}
