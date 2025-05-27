import React, { useState } from 'react';

export default function UpdatingArrayState() {
  return (
    <div>
      <h2>Example 1: Add item</h2>
      <AddItem />

      <h2>Example 2: Remove item by id</h2>
      <RemoveItem />

      <h2>Example 3: Update item by id</h2>
      <UpdateItem />

      <h2>Example 4: Toggle boolean field in array object</h2>
      <ToggleComplete />
    </div>
  );
}


function AddItem() {
  const [items, setItems] = useState<string[]>([]);

  function addItem() {
    setItems(prev => [...prev, `Item ${prev.length + 1}`]);
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

function RemoveItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
  ]);

  function removeById(id: number) {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name} <button onClick={() => removeById(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'Dog' },
    { id: 2, name: 'Cat' }
  ]);

  function updateName(id: number, newName: string) {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  }

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name}{' '}
          <button onClick={() => updateName(item.id, item.name + '!')}> 
            Rename
          </button>
        </div>
      ))}
    </div>
  );
}
    
function ToggleComplete() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', done: false },
    { id: 2, title: 'Do Homework', done: true }
  ]);

  function toggleDone(id: number) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          {task.title} [{task.done ? 'Done' : 'Not Done'}]{' '}
          <button onClick={() => toggleDone(task.id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
}
