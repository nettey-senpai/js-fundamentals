var returnedValue = Math.max(2, 5, 6, 1, 7, 8);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);

function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA)); // ...spread operator: takes a group(array) and spreads it into the multiple values

// rest operator: takes individual values and groups them in an array
function sumTwo(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [multi, sum];
}

console.log(sumTwo(2, 3, 1, 1, 1));
