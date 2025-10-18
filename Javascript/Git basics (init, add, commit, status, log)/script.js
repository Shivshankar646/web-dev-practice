// app.js
// Simple JavaScript Practice Code

const name = "Shiv";
const scores = [85, 90, 78, 92];

function getAverage(arr) {
  const total = arr.reduce((acc, n) => acc + n, 0);
  return total / arr.length;
}

console.log(`Hello ${name}!`);
console.log(`Your average score is ${getAverage(scores)}`);
