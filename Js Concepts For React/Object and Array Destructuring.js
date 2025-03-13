// Object Destructuring
const productOne = {
  productName: "Product One",
  productInfo: "Product Info",
};

// Old way of doing it
// let productName = productOne.productName;
// let productInfo = productOne.productInfo;

const {productName, productInfo} = productOne;

console.log(productName, productInfo);

// Array Destructuring
let arr = ["jeff", "jane", "john"];

// Old way
// let arrFirstElement = arr[0];
// let arrSecondElement = arr[1];

let [arrFirstElement, arrSecondElement, xyz] = arr;

console.log(arrFirstElement, arrSecondElement, xyz);
