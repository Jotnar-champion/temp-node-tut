//started OS processes
console.log("First Task");

//setTimeout is doing the task after waiting for a specific amount of time.
setTimeout(() => {
  console.log("Second Task");
}, 5);

setTimeout(() => {
    console.log("Fourth Task");
  }, 0);

console.log("Final task");
