// Using promises for cleaner syntax
console.log("Before");
getGroceryList(1)
    .then(list => getGroceryItem(list.id))
    .then(items => checkItemAvailability(items[0]))
    .then(availability => console.log("Availability", availability))
    .catch(err => console.error(err));
console.log("After");

// function handleGroceryItems(list) {
//   getGroceryItem(list.id, handleItemAvailability);
// }

// function handleItemAvailability(items) {
//   checkItemAvailability(items[0], displayAvailability);
// }

// function displayAvailability(availability) {
//   console.log("Availability", availability);
// }

function getGroceryList(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulating a call to the database
      console.log("Fetching grocery list from the database...");
      resolve({ id: id, name: "Weekly Groceries" });
    }, 2000);
  });
}

function getGroceryItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulating a call to the database
      console.log("Fetching grocery items...");
      resolve(["Milk", "Bread", "Eggs"]);
    }, 2000);
  });
}

function checkItemAvailability(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulating a call to the database
      console.log("Checking item availability...");
      resolve({ item: item, available: true });
    }, 2000);
  });
}
