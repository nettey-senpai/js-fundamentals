// old way
// function functionName() {

// }

// Arrow function
// const functionName = () => {

// }

const personArray = [
  {
    name: "Person 1",
    age: "10",
    city: "Bangalore",
  },
  {
    name: "Person 2",
    age: "20",
    city: "New york",
  },
  {
    name: "Person 3",
    age: "30",
    city: "Chicago",
  },
  {
    name: "Person 4",
    age: "45",
    city: "Bangalore",
  },
];

// Map method
let extractPersonsNames = personArray.map((person, index) => {
  console.log(index, "index");

  return `${person.name} - ${person.city}`;
});

console.log(extractPersonsNames);

// Filter method
let extractAllPersonsFromBangalore = personArray.filter(
  (person, index) => person.city === "Bangalore"
);

console.log(extractAllPersonsFromBangalore);

// some and every method
let checkSomeMethod = personArray.some((person, index) => person.age === "20"); // returns true if any one of the persons has an age of 20

console.log(checkSomeMethod);

let checkEveryMethod = personArray.every(
  (person, index) => person.age === "20"
); // returns true only when all persons have an age of  20

console.log(checkEveryMethod);

// find method
const myArr = [1, 2, 3, 4, 5];

let checkFindMethod = myArr.find((item, index) => item === 4); // returns the first element of a match found else returns undefinded

console.log(checkFindMethod, "find");

// reduce method
let checkReduceMethod = myArr.reduce((acc, current, index, array) => {
  console.log(acc, current, index, array);

  return acc + current;
}, 100); // initial value is 100 which becomes the acc, the method adds the current value in the index to the acc and repeats this till it goes throuh all the indexes

console.log(checkReduceMethod, "reduce");

// includes method
console.log(myArr.includes(3), "includes"); // returns true when the value checked exists in the array else returns false

// indexOf Method
let checkIndexMethod = myArr.indexOf(3); // returns the index of the first occurrence of the elements provided for search else returns -1 if the element does not exist

console.log(checkIndexMethod, "index");

// findIndex Method
let checkFindIndexMethod = myArr.findIndex((item) => item === 3); // returns the index of the first element of the given array which satisfies the testing function else returns -1 if the element does not exist

console.log(checkFindIndexMethod, "findIndex");

// use indexOf() when we want to find the index of the first occurrence of a specific value in an array.  Use findIndex() when we want to check a condition for each element of an array, until the condition is met, and get the index of the first array element that passes said condition.
// indexOf() method takes direct element is specified so it is useful when we are working with array of objects.
// findIndex() method takes a callback function which returns the value of the element whose index is to be found.