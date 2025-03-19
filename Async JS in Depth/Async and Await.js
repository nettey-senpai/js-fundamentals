console.log("before");

function getGroceryList(id, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulate a call to the database
      console.log("Fetching grocery list from the database...");
      resolve({ id: id, items: "Weekly Groceries" });
    }, 2000);
  });
}

function getGroceryItems(listName, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching grocery items from grocery list...");
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

async function displayItemAvailability() {
  try {
    const list = await getGroceryList(1);
    const items = await getGroceryItems(list.name);
    const availability = await checkItemAvailability(items[0]);
    console.log("Availability:", availability);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

displayItemAvailability();

console.log("after");
