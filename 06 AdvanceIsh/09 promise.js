const un = () => {
  return "I am One";
};

// const deux = () => {
//   setTimeout(() => {
//     return "I am Two";
//   }, 3000);
// };

const deux = () => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am two")
    }, 3000);
   })
  };

const trois = () => {
  return "I am Three";
};

const callMe = async () => {
  let valOne = un();
  console.log(valOne);

  let valTwo = await deux(); // this has to finish runninng before the next function runs
  console.log(valTwo);

  let valThree = trois();
  console.log(valThree);
};

callMe();
