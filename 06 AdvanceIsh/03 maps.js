var myMap = new Map();

myMap.set(1, "Un");
myMap.set(2, "deux");
myMap.set(3, "trois");
myMap.set(4, "quatre");

// console.log(myMap);


for (let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}

for (let value of myMap.values()) {
    console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) {
    console.log(`Key is : ${key} and Value is ${value}`); //for of loop gives key first befor value
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`)); //forEach loop gives value first befor key

myMap.delete(4);
console.log(myMap);