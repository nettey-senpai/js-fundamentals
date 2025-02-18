// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const myStates = [
    "Rajasthan",
    "Dehli",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra"
];


for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== 'string') break;
    console.log(myStates[i]);
}