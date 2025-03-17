const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error message"))
  }, 2000);
});
p
  .then(res => console.log(res))
  .catch(err => console.log(err.message));
