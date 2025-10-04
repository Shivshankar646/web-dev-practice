// 🟢 Synchronous vs Asynchronous JavaScript
// 🔹 1. Synchronous JS
// JavaScript executes one task at a time (single-threaded).
// Next line of code runs only after the previous one finishes.

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// output:
// Task 1
// Task 2
// Task 3

// 🔹 2. Asynchronous JS

// Some operations take time (API calls, timers, file read, etc.).

// Instead of blocking the code, JS uses callbacks, promises, async/await.

console.log("Start");

setTimeout(() => {
  console.log("Async Task (2 sec later)");
}, 2000);

console.log("End");
// Start → End → Async Task

// 🔹 3. Call Stack

// Place where JS keeps track of function calls.

// Functions are pushed into stack and popped out after execution.

// Works LIFO (Last In, First Out).

// 🔹 4. Web APIs

// Browser provides features like setTimeout, fetch, DOM events.

// These run outside the call stack.

// 🔹 4. Web APIs

// Browser provides features like setTimeout, fetch, DOM events.

// These run outside the call stack.

// 🔹 5. Callback Queue

// When async tasks finish, results are placed in the queue.

// 🔹 6. Event Loop

// Constantly checks:

// If Call Stack is empty,

// Then takes the next task from Callback Queue and pushes it into the stack.

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");
// 👉 Output: A → C → B
// (B waits for call stack to clear, event loop then executes it.)

function greet() {
  console.log("Hello");
}

setTimeout(() => {
  console.log("World");
}, 1000);

greet();
console.log("Done");
