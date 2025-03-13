//spread operators
const arrOne = [1, 2, 3]

const arrTwo = [4, 5, 6]

console.log([...arrOne,100,...arrTwo]);

// rest operator
function someThing(a,b,c,...d) {
    console.log(a,b,c,d);
    return "Hello"
}

console.log(someThing(1,2,3,4,5));
