// Incorrect Synchronous Code
// console.log("before");
// CANNOT get grocery item like this
// const groceryItem = getGroceryItem(1);
// console.log(groceryItem); // undefined
// console.log("after");

// function getGroceryItem(id) {
//   setTimeout(() => {
//     // simulate a call to the database
//     console.log("Reading a grocery item from the database...");
//     return { id: id, name: "Apples" };
//   }, 2000);
// }

// Callbacks Pattern Solution
console.log("before");
// getGroceryList(1, (groceryList) => {
//   getGroceryItem(groceryList.id, (items) => {
//     checkItemAvailability(items[0]);
//   });
// });
getGroceryList(1)
  .then((list) => getGroceryItem(list.id))
  .then((items) => checkItemAvailability(items[0]))
  .then((availability) => console.log("Availability", availability))
  .catch((err) => console.error(err));

console.log("after");

function getGroceryList(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulate a call to the database
      console.log("Fetching grocery list from the database...");
      resolve({ id: id, items: ["apple", "bananas", "bread"] });
    }, 2000);
  });
}

function getGroceryItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching a grocery item from the grocery list...");
      resolve(["apples", "bananas", "bread"]);
    }, 2000);
  });
}

function checkItemAvailability(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Checking availability...");
      resolve(true);
    }, 2000);
  });
}

// Promise Pattern Solution
// console.log("before");
// getGroceryItem(1)
//   .then((item) => console.log(item))
//   .catch((err) => console.error(err));
// console.log("after");

// function getGroceryItem(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading a grocery item from a database");
//       resolve({ id: id, name: "Apple" });
//     }, 2000);
//   });
// }

// Async/Await
// console.log("before");
// async function displayGroceryItem() {
//   const groceryItem = await getGroceryItem(1);
//   console.log(groceryItem);
// }
// displayGroceryItem(1);
// console.log("after");

// function getGroceryItem(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading a grocery item from a database");
//       resolve({ id: id, name: "Apple" });
//     }, 2000);
//   });
// }
