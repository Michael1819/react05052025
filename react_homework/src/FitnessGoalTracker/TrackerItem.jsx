import React from "react";
import { useFitnessGoal } from "./FitnessGoalContext";

export default function TrackerItem(props) {
  const { markAsAchieved } = useFitnessGoal();
  const goal = props.goal;

  function handleMark() {
    markAsAchieved(goal.id);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <span>
        {goal.name} - <strong>{goal.category}</strong> ({goal.repetitions})
      </span>
      {goal.achieved ? (
        <span style={{ color: "green", fontWeight: "bold" }}>✅ Achieved</span>
      ) : (
        <button onClick={handleMark}>Mark as Achieved</button>
      )}
    </div>
  );
}