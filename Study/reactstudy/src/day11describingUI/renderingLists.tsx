import React from "react";

export default function RenderingLists() {
  const fruits = ["Apple", "Banana", "Orange"];

  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 27 },
  ];

  const fruitData = {
    category: "Fruits",
    fruits: [
      { id: 1, name: "Apple", color: "Red" },
      { id: 2, name: "Banana", color: "Yellow" },
      { id: 3, name: "Orange", color: "Orange" },
    ],
  };

  return (
    <div>
      <h1>Rendering Lists</h1>

      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>

      <h2>User Cards</h2>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} age={user.age} />
        ))}
      </div>

      <h2>{fruitData.category} Detail List</h2>
      <ul>
        {fruitData.fruits.map((fruit) => (
          <FruitItem key={fruit.id} name={fruit.name} color={fruit.color} />
        ))}
      </ul>
    </div>
  );
}

function UserCard({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
    </div>
  );
}

function FruitItem({ name, color }: { name: string; color: string }) {
  return (
    <li>
      {name} - {color}
    </li>
  );
}
