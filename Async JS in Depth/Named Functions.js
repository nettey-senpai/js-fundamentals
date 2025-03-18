// Using named functions
console.log("Before");
getGroceryList(1, handleGroceryItems);
console.log("After");

function handleGroceryItems(list) {
  getGroceryItem(list.id, handleItemAvailability);
}

function handleItemAvailability(items) {
  checkItemAvailability(items[0], displayAvailability);
}

function displayAvailability(availability) {
  console.log("Availability", availability);
}

function getGroceryList(id, callback) {
  setTimeout(() => {
    // simulating a call to the database
    console.log("Fetching grocery list from the database...");
    callback({ id: id, name: "Weekly Groceries" });
  }, 2000);
}

function getGroceryItem(id, callback) {
  setTimeout(() => {
    // simulating a call to the database
    console.log("Fetching grocery items...");
    callback(["Milk", "Bread", "Eggs"]);
  }, 2000);
}

function checkItemAvailability(item, callback) {
  setTimeout(() => {
    // simulating a call to the database
    console.log("Checking item availability...");
    callback({ item: item, available: true });
  }, 2000);
}
