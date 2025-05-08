// var let const\
if (true) {
  var varVariable = "This is true";
}
var varVariable = "This is false";
console.log(varVariable);
if (true) {
  let letVariable = "This is true";
}
// let letVariable = "true";
// let letVariable = "false";
console.log(letVariable);

console.log(varTest);
var varTest = "true";
// let varTest = "true";
// const varTest = "true";
console.log(varTest);

const constVar = 1;
let letVar = 1;
letVar = 2;
constVar = 2;

const constName = { name: "Bob" };
constName.name = "Sally";
console.log(constName);

// Hoisting
const sumConst = (a, b) => a + b;
console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`);
function sumFunc(a, b) {
  return a + b;
}

console.log(a); // output undefined
var a = 2; // hoisted initialization to the top as var a = undefined;
