import React, { useState } from 'react';

export default function StateExamples() {
  return (
    <div>
      <h2>Example 1: Counter</h2>
      <Counter />

      <hr />

      <h2>Example 2: Text Input</h2>
      <TextInput />

      <hr />

      <h2>Example 3: Multiple Independent States</h2>
      <MultipleStates />

      <hr />

      <h2>Example 4: Updating Object State</h2>
      <ObjectState />

      <hr />

      <h2>Example 5: Updating Array State</h2>
      <ArrayState />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function TextInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>You entered: {text}</div>
    </div>
  );
}

function MultipleStates() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <div>
        Name: {name}, Age: {age}
      </div>
    </div>
  );
}

function ObjectState() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <div>
        Name: {user.name}, Email: {user.email}
      </div>
    </div>
  );
}

function ArrayState() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
