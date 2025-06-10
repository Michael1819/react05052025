import React from "react";
import { useFitnessGoal } from "./FitnessGoalContext";
import TrackerItem from "./TrackerItem";

export default function TrackerList() {
  const { goals } = useFitnessGoal();

  return (
    <div>
      {goals.map(function (goal) {
        return <TrackerItem key={goal.id} goal={goal} />;
      })}
    </div>
  );
}
