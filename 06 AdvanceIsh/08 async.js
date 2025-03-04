const un = () => {
  console.log("I am One");
};

const deux = () => {
  setTimeout(() => {
    console.log("Bankaiiiii");
  }, 3000);
  console.log("I am Two");
};

const trois = () => {
  console.log("I am Three");
};

un();
deux();
trois();
