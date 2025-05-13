function printThis(param) {
  console.log(param);
}

// printThis("tapas");
const printMe = function () {
  console.log("print");
};

function printMe1() {
  console.log("print");
}

const printMeParam = function (a, b) {
  console.log(a, b);
};

// printMeParam(19, 29);

function calc(a, b = 0) {
  return 2 * (a + b);
}

// console.log(calc(2));

function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}

// collectThings(1, 2, 3, 4, 5, 6);

const add = (x, y) => x + y;
const ff = (x) => x;

function outer() {
  console.log("a");
  function inner() {
    console.log("b");
  }
  inner();
}

function doSomething() {
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x, y, z);
}
// doSomething();

let x = 10;
const y = 20;
var z = 30;

function doSomething1() {
  console.log(x, y, z);
}

// doSomething1();
// console.log(x);
// console.log(y);
// console.log(z);

// closure

function outer(x  ) {
  return function inner(y) {
    console.log(x + y);
  };
}

const inner = outer(10);
inner(20);

function foo(bar) {
  bar();
}

function named() {
  console.log("bar");
}

foo(named);
function foo(bar) {
  bar();
}

function outer(outerVar) {
  const outer2 = "Hi";
  return function inner(innerVar) {
    console.log(outerVar, innerVar, outer2);
  };
}

// const newFunc = outer("outside");
// newFunc("inside");

const buildSandwich = (bread) => {
  return (filling) => {
    return (topping) => {
      return `${bread} ${filling} ${topping}`;
    };
  };
};

const mySandwich = buildSandwich("bread")("lettuce")("tomato");
console.log(mySandwich);

const buildSammy = bread => filling => topping =>
  `${bread} ${filling} ${topping}`;

const mySammy = buildSammy("bread")("lettuce")("tomato");
console.log(mySammy);

const multiply = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));

const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(10));

  
