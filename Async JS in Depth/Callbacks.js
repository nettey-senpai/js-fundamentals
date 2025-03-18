// Callbacks Pattern Solution
console.log("before");
getGroceryList(1, (groceryList) => {
  console.log("Grocery List:", groceryList);

  // get the grocery list items
  getGroceryItem(groceryList.id, (items) => {
    console.log("Items:", items);
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
