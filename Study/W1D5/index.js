const a = ["A", "B", "C", "D"];

// console.log(a[2]);

a.push([1, 2]);
// console.log(a);

const b = [
  ["A", "B"],
  [1, 2],
];

// console.log(b[0][1]);

const person1 = {
  firstName: "Michael",
  lastName: "Zhang",
  age: 24,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! I am Michael");
  },
  eat: function () {
    console.log("I am eating pizza");
  },
};
const person2 = {
  firstName: "Bob",
  lastName: "Li",
  age: 25,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi! I am Bob");
  },
  eat: function () {
    console.log("I am eating beef");
  },
};
// console.log(person1.firstName);
// console.log(person1.age);
// console.log(person2.lastName);
// console.log(person2.isEmployed);
// person1.eat();
// person2.sayHello();

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filteredItem = items.filter((item) => {
  return item.price <= 100;
});
const itemNames = items.map((item) => {
  return item.name;
});
const foundItem = items.find((item) => {
  return item.name === "Book";
});

// console.log(filteredItem);
// console.log(itemNames);
// console.log(foundItem);

// items.forEach((item) => {
//   console.log(item.price);
// });
const cheapItems = items.some((item) => {
  return item.price <= 0;
});
const hascheapItems = items.every((item) => {
  return item.price <= 1000;
});
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 500);

const items1 = [1, 2, 3, 4];
const includItem = items1.includes(4);
// console.log(cheapItems);
// console.log(hascheapItems);
// console.log(total);
// console.log(includItem);

const arr = ["1", "2", "3"];

const [one, , , four = "4"] = arr;
// console.log(four);

const obj = {
  //book: "1",
  apple: "2",
  banana: "3",
  parent: {
    child: "A",
  },
};

const { book: first = "100" } = obj;
const {
  parent: { child: son },
} = obj;

// console.log(obj);
// console.log(first);
// console.log(son);

function sumAndMuti(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, muti, division = "none"] = sumAndMuti(2, 4);
// console.log(sum, muti, division);

const xArray = [1, 2, 3, 4];
const yArray = xArray;
const zArray = [...yArray];

yArray[2] = 9;
// console.log(zArray);

// console.log(xArray === yArray);
// console.log(yArray === zArray);

const vArray = [...xArray, [2, 3, 4]];
const tArray = [...vArray];
tArray[4] = [1, 2];
// console.log(vArray);

function calculatePrice(price, taxes, description) {
  // taxes = taxes || 0.05;
  taxes = taxes ?? 0.05;
  //   if (taxes == null) {
  //     taxes = 0.05;
  //   }
  description = description || "Default item";
  const total = price * (1 + taxes);
  console.log(
    `%c${description} With Tax: %c$${total}`,
    "font-weight: bold",
    "color: green"
  );
}

calculatePrice(100, 0.07, "My item");
calculatePrice(100, 0, "My other item");
calculatePrice(100, undefined, "");
