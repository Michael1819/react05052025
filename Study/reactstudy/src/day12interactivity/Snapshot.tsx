import React, { useState } from 'react';

export default function StateSnapshot() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            // setCount(prevCount => prevCount + 1);
            // setCount(prevCount => prevCount + 1);
            // setCount(prevCount => prevCount + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}