// Callbacks Pattern Solution
console.log("before");
// callback hell
// getGroceryList(1, (groceryList) => {
//   getGroceryItem(groceryList.id, (items) => {
//     checkItemAvailability(items[0]);
//   });
// });

getGroceryList(1)
    .then(list => getGroceryItem(list.id))
    .then(items => checkItemAvailability(items[0]))
    .then(availability => console.log("Availability",availability))
    .catch(err => console.error(err));
    
console.log("after");

function getGroceryList(id, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulate a call to the database
      console.log("Fetching groceryy list from the database...");
      resolve({ id: id, items: ["Apples", "Bananas", "Bread"] });
    }, 2000);
  });
}

function getGroceryItem(id, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching a grocery item from a grocery list...");
      resolve(["Apples", "Bananas", "Bread"]);
    }, 2000);
  });
}

function checkItemAvailability(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Checking availability");
      resolve(true);
    }, 2000);
  });
}
