import { useState } from "react";
const cars = [
  {
    id: 1,
    year: 2010,
    name: "A",
    model: "model1",
    owner: { name: "John" },
  },
  {
    id: 2,
    year: 2011,
    name: "B",
    model: "model2",
    owner: { name: "Bob" },
  },
  {
    id: 3,
    year: 2012,
    name: "C",
    model: "model3",
    owner: { name: "Max" },
  },
];

function Test() {
  return (
    <div id="app">
      <h1>Car</h1>
      {/* <Car
        name="Toyota"
        year={2023}
        model="Corolla"
        owner={{ id: 1, name: "Bob" }}
      /> */}
      {cars.map((car) => {
        // const { id, name, year, model, owner } = car;
        return <Car key={car.id} {...car} />;
      })}
    </div>
  );
}

export default Test;

const Car = ({ name, year, model, owner }: any) => {
  console.log("owner", owner);

  return (
    <div className="car">
      <div style={{ color: "blue" }}>Name: {name}</div>
      <div>Year: {year}</div>
      <div>Model: {model}</div>
      <div>Owner: {owner.name}</div>
    </div>
  );
};
