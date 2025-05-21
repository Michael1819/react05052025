import { useState } from "react";

export default function Day12Play() {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const [car, setCar] = useState({ year: " ", make: " ", model: " " });

  function clickhandler() {
    console.log("button clicked");
  }

  type AlertButtonProps = {
    message: string;
    children: React.ReactNode;
  };
  function AlertButton({ message, children }: AlertButtonProps) {
    return <button onClick={() => alert(message)}>{children}</button>;
  }

  return (
    <div>
      <h1>Day 12 Notes</h1>

      <button onClick={clickhandler}>Click</button>
      <button>Click me</button>

      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>

      <form>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>

      <p>
        Your car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={(e) => setCar({...car, year: e.target.value})} />
      <br />
      <input type="text" value={car.make} onChange={(e) => setCar({...car, make: e.target.value})} />
      <br />
      <input type="text" value={car.model} onChange={(e) => setCar({...car, model: e.target.value})} />
      <br />
    </div>
  );
}
