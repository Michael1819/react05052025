import React, { useState, useEffect } from 'react';

export default function RenderAndCommitDemo() {
  const [count, setCount] = useState(0);

  console.log('Render phase: Component is rendering');

  useEffect(() => {
    console.log('Commit phase: DOM has been updated');
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
