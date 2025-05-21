import React from "react";

function BasicElement() {
  return <h1>Hello, world!</h1>;
}

function MultipleElements() {
  return (
    <>
      <h2>Title</h2>
      <p>This is a paragraph.</p>
    </>
  );
}

function ExpressionExample() {
  const username = "Yuxian";
  return <h2>Hello, {username}!</h2>;
}

function ConditionalRender() {
  const isLoggedIn = true;
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>;
}

function AnimalList() {
  const animals = ["Dog", "Cat", "Rabbit"];
  return (
    <ul>
      {animals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  );
}

function StyledText() {
  const style = { color: "blue", fontWeight: "bold" };
  return <p style={style}>This is styled text.</p>;
}

function ImageExample() {
  const imgUrl = "https://i.imgur.com/MK3eW3As.jpg";
  return <img src={imgUrl} alt="Katherine Johnson" width="150" />;
}

function DynamicClass() {
  const isActive = true;
  return <div className={isActive ? "active" : "inactive"}>Status Box</div>;
}

function Avatar() {
  return <img src="https://i.imgur.com/1bX5QH6.jpg" alt="Avatar" width="100" />;
}

function Profile() {
  return (
    <div>
      <h2>Yuxian Zhang</h2>
      <Avatar />
    </div>
  );
}

function ButtonClick() {
  function handleClick() {
    alert("Button clicked!");
  }
  return <button onClick={handleClick}>Click me</button>;
}

export default function JSXMarkup() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>JSX Practice Collection</h1>
      <BasicElement />
      <MultipleElements />
      <ExpressionExample />
      <ConditionalRender />
      <AnimalList /> 
      <StyledText />
      <ImageExample />
      <DynamicClass />
      <Profile />
      <ButtonClick />
    </div>
  );
}
