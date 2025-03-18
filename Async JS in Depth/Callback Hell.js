// Callbacks Pattern Solution
console.log("before");
// callback hell
getGroceryList(1, (groceryList) => {
  getGroceryItem(groceryList.id, (items) => {
    checkItemAvailability(items[0]);
  });
});
console.log("after");

function getGroceryList(id, callback) {
  setTimeout(() => {
    // simulate a call to the database
    console.log("Fetching groceryy list from the database...");
    callback({ id: id, items: ["Apples", "Bananas", "Bread"] });
  }, 2000);
}

function getGroceryItem(id, callback) {
  setTimeout(() => {
    console.log("Fetching a grocery item from a grocery list...");
    callback(["Apples", "Bananas", "Bread"]);
  }, 2000);
}

function checkItemAvailability(item) {
  setTimeout(() => {
    console.log("Checking availability");
    return true;
  }, 2000);
}


console.log("Before");
const list = getGroceryList(1);
const items = getGroceryItem(list.id);
const availability = checkItemAvailability(item[0]);
console.log("After");

