// Arrow Function

const add = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}

// Closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
// counter();
// counter();

function createCounters() {
  let count = 0;
  return [() => ++count, () => ++count];
}

const [a, b] = createCounters();
// console.log(a());
// console.log(b());

function createIndependentCounter() {
  let count = 0;
  return () => ++count;
}

const x = createIndependentCounter();
const y = createIndependentCounter();
// console.log(x());
// console.log(y());

function createBankAccount() {
  let balance = 100;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposit:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Withdraw:", balance);
    },
    checkBalance() {
      console.log("Balance:", balance);
    },
  };
}

const myAccount = createBankAccount();
// myAccount.deposit(50);     // 150
// myAccount.withdraw(20);    // 130
// myAccount.checkBalance();  // 130

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log("i:", i);
//   }, 1000);
// }

function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

const init = once(() => console.log("Initialized!"));
// init();
// init();

// Object prototypes and methods -- Entries, keys, values
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const alice = new Person("Alice");
// alice.sayHello();

const obj = { name: "Tom", age: 30 };
// console.log(Object.keys(obj)); // ["name", "age"]
// console.log(Object.values(obj)); // ["Tom", 30]
// console.log(Object.entries(obj)); // [["name", "Tom"], ["age", 30]]

const user = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "123-456",
  },
  age: 28,
};

const topKeys = Object.keys(user); // ['name', 'contact', 'age']
const nestedKeys = Object.keys(user.contact); // ['email', 'phone']

// console.log("Top level keys:", topKeys);
// console.log("Nested keys:", nestedKeys);


