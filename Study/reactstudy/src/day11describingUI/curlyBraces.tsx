import React from "react";

export default function curlyBraces() {
  const username = "Yuxian";
  const age = 20;
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];

  function greet(name: string) {
    return `Hi, ${name}!`;
  }

  const style = {
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div>
      <h1>JavaScript in JSX (with {`{}`})</h1>

      {/* Inserting String Variables */}
      <p>Hello, {username}!</p>

      {/* numeric expression */}
      <p>Next year, you will be {age + 1} years old.</p>

      {/* function call*/}
      <p>{greet(username)}</p>

      {/* ternary operator */}
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>

      {/* Rendering numbers using map */}
      <ul>
        {numbers.map((num) => (
          <li key={num}>Number: {num}</li>
        ))}
      </ul>

      {/* logical and && */}
      {age >= 18 && <p>You are an adult.</p>}

      {/* Inline Style */}
      <p style={style}>This text is styled with a JS object.</p>

      {/* Template String Expressions */}
      <p>{`Hello again, ${username.toUpperCase()}`}</p>
    </div>
  );
}
