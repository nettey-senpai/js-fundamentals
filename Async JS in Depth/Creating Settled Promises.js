const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const pTwo = Promise.reject(new Error("reason for rejection..."));
pTwo.catch((error) => console.log(error.message))
