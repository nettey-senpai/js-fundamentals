const cards = document.querySelectorAll(".card");

// variables
let isFlipped = false;
let firstCard,
  secondCard = null;


const flip = (e) => {
  e.currentTarget.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = e.currentTarget;
  } else {
    secondCard = e.currentTarget;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
};

const checkIt = () => {
  //   console.log("Checking...");
  const isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? success() : fail();
};

const success = () => {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

const fail = () => {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
};

const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

const shuffle = () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 20);
    card.style.order = index;
  });
};

// shuffle cards on window load
window.addEventListener("load", shuffle);

cards.forEach((card) => card.addEventListener("click", flip));