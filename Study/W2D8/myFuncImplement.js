Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this);
  }
};

const arr = [1, 2, 3, 4, 5];
// arr.myEach((element, index, array) => console.log("elemen:", element, "index:", index, "array:", array));

Array.prototype.myMap = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callbackFn(this[i], i, this));
  }
  return result;
};

// const double = arr.myMap((element, index, array) => {
//   console.log("index:", index, "array:", array);
//   return element * 2;
// });
// // console.log(double);

Array.prototype.myFilter = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// const test = arr.myFilter((element, index, array) => {
//   console.log("index:", index, "array:", array);
//   return element > 2;
// });
// console.log(test);

Array.prototype.myReduce = function (callbackFn, initial) {
  let acc;
  let startIndex;

  if (initial !== undefined) {
    acc = initial;
    startIndex = 0;
  } else {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }

  return acc;
};

const sum = arr.myReduce((acc, curr, index, array) => {
  console.log(
    "accumulator:",
    acc,
    "currentValue:",
    curr,
    "currentIndex:",
    index,
    "array:",
    array
  );
  return acc + curr;
}, 0);

console.log("sum:", sum);
