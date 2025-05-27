import React from 'react';

export default function EventExamples() {
  return (
    <div>
      <h2>Example 1: Basic Click</h2>
      <EventExample1 />

      <h2>Example 2: Props in Event</h2>
      <EventExample2 />

      <h2>Example 3: Passing Event Handlers</h2>
      <EventExample3 />

      <h2>Example 4: Prevent Default</h2>
      <EventExample4 />
    </div>
  );
}

function EventExample1() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

type AlertButtonProps = {
  message: string;
  children: React.ReactNode;
};

function AlertButton({ message, children }: AlertButtonProps) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function EventExample2() {
  return (
    <div>
      <AlertButton message="Hello from the first button!">First</AlertButton>
      <AlertButton message="Hello from the second button!">Second</AlertButton>
    </div>
  );
}

type ToolbarProps = {
  onPlayMovie: () => void;
  onUploadImage: () => void;
};

function Toolbar({ onPlayMovie, onUploadImage }: ToolbarProps) {
  return (
    <div>
      <button onClick={onPlayMovie}>Play Movie</button>
      <button onClick={onUploadImage}>Upload Image</button>
    </div>
  );
}

function EventExample3() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing movie')}
      onUploadImage={() => alert('Uploading image')}
    />
  );
}

function EventExample4() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    alert('Link click prevented');
  }

  return (
    <a href="https://react.dev" onClick={handleClick}>
      Visit React.dev
    </a>
  );
}
