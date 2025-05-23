const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const totalAge = Object.values(people).reduce(
    (sum, person) => sum + person.age,
    0
  );
  return totalAge / Object.keys(people).length;
};
