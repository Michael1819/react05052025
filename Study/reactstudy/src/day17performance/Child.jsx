import React from "react";

function Child() {
  console.log("Child");

  return <div>Child</div>;
}

export default React.memo(Child);