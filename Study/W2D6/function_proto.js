function greet(greeting1, greeting2) {
  console.log(`${greeting1}, I'm ${this.name} and ${greeting2}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello");
greet.apply(person, ["Hi", "Hello"]);
const boundGreet = greet.bind(person, "Hey");
boundGreet();
