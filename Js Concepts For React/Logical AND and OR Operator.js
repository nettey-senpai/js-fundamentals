let a = true;
let b = true;

// console.log(a && b); // b will only be checked when a is true, answer will be true when both are true
// console.log(a || b); // answer will be true when anyone are true, and false only when both are false

function getName() {
    return "Jeffrey"
}

console.log(a || getName());
