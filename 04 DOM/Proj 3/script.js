const courses = [
  {
    name: "Complete JS course",
    price: "2.5",
  },
  {
    name: "Complete React JS course",
    price: "2.3",
  },
  {
    name: "Complete Angular course",
    price: "2.1",
  },
  {
    name: "Complete MERN course",
    price: "2.7",
  },
  {
    name: "Complete Next.JS course",
    price: "5.5",
  },
];

// Create unordered list
function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    // create list element and add class name
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // add text to list element
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    // create span element, add class name, add text to span
    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode(" $" + course.price);
    span.appendChild(price);

    // add span to list element
    li.appendChild(span);
    // add list element to unordered list
    ul.appendChild(li);
  });
}

// generateList();

window.addEventListener("load", generateList);

// add sort course button
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});
