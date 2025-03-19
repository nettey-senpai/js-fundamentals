// Simulation for calling Facebook API
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Async operation 1...");
        resolve(1);
    }, 2000);
})

// Simulation for calling Twitter/X API
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 2...");
        reject(new Error("Async operation 2 failed"));
    }, 2000);
})

// Running both asynchronous operations
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log("Error:", error.message));

    Promise.race([p1, p2]) //resolves or rejects based on the first operation
    .then(result => console.log(result))
    .catch(error => console.log("Error:", error.message));