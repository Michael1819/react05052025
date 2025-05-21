import React from "react";
// // Basic AnimalList
// function AnimalList() {
//   const animals = ["Dog", "Cat", "Rabbit"];
//   return (
//     <ul>
//       {animals.map((animal, index) => (
//         <li key={index}>{animal}</li>
//       ))}
//     </ul>
//   );
// }

// // AnimalList with props
// function AnimalList(props: { animals: string[] }) {
//   return (
//     <ul>
//       {props.animals.map((animal, index) => (
//         <li key={index}>{animal}</li>
//       ))}
//     </ul>
//   );
// }

// // Component Splitting
// function AnimalItem(props: { animal: string }) {
//   return <li>{props.animal}</li>;
// }

// function AnimalList() {
//   const animals = ["Dog", "Cat", "Rabbit"];
//   return (
//     <ul>
//       {animals.map((animal, index) => (
//         <AnimalItem key={index} animal={animal} />
//       ))}
//     </ul>
//   );
// }

// // Object array
// type Animal = {
//   emoji: string;
//   name: string;
// };

// const animals: Animal[] = [
//   { emoji: "🐶", name: "Dog" },
//   { emoji: "🐱", name: "Cat" },
//   { emoji: "🐰", name: "Rabbit" },
// ];

// function AnimalList() {
//   return (
//     <ul>
//       {animals.map((animal, index) => (
//         <li key={index}>
//           {animal.emoji} - {animal.name}
//         </li>
//       ))}
//     </ul>
//   );
// }

// Conditional Rendering
function AnimalList() {
  const animals = ["🐶 Dog", "🐱 Cat", "🐰 Rabbit"];
  return (
    <ul>
      {animals
        .filter((a) => a.includes("🐱"))
        .map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
    </ul>
  );
}

export default function Props() {
  return (
    <div>
      <h1>Props</h1>
      {/* Basic AnimalList, Component Splitting, Object array */}
      <AnimalList />
      {/* AnimalList with props */}
      {/* <AnimalList animals={['Lion', 'Tiger', 'Bear']} />  */}
    </div>
  );
}
