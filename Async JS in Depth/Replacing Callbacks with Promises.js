console.log("before");

function getGroceryList(id, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulate a call to the database
      console.log("Fetching groceryy list from the database...");
      resolve({ id: id, items: "Weekly Groceries" });
    }, 2000);
  });
}

function getGroceryItems(listName, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching a grocery item from a grocery list...");
      resolve(["Milk", "Bread", "Eggs"]);
    }, 2000);
  });
}

function checkItemAvailability(item, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Checking item availability...");
      resolve({ item: item, availabile: true });
    }, 2000);
  });
}

getGroceryList(1)
    .then(list => getGroceryItems(list.name))
    .then(items => checkItemAvailability(items[0]))
    .then(availability => console.log("Availability:", availability))
    .catch(err => console.error("Error:", err.message));

console.log("after");
