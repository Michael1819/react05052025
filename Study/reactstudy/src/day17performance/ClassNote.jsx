import React, { useEffect, useState, useMemo } from "react";
import Child from "./Child";

export default function ClassNote() {
  const [count, setCount] = useState(0);
  // const [person, setPerson] = useState({ name: ""});
  const testobj = useMemo(() => ({}), []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child testobj={testobj} />
      {/* <input type="text" value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} />
      <p>Person: {person.name}</p> */}

    </div>
  );
}

