import React from "react";

function Hello() {
  return <h1>Hello, React!</h1>;
}

function Welcome(props: { name: string }) {
  return <h2>Welcome, {props.name}!</h2>;
}
function Header() {
  return <h2>Welcome to My App</h2>;
}

function Footer() {
  return <p>© 2025 Yuxian</p>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is the main content.</p>
      <Footer />
    </div>
  );
}

export function Welcome1() {
  return <h2>Hello from Welcome!</h2>;
}

export function Goodbye() {
  return <p>Goodbye!</p>;
}

function TaskList() {
  const tasks = ["Learn JSX", "Build Components", "Understand Props"];

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

function LoginStatus(props: { isLoggedIn: boolean }) {
  return <p>{props.isLoggedIn ? "Logged In" : "Please log in"}</p>;
}

export default function Day11App() {
  return (
    <div>
      <Hello />
      <Welcome name="Yuxian" />
      <App />
      <TaskList />
      <LoginStatus isLoggedIn={true} />
    </div>
  );
}
