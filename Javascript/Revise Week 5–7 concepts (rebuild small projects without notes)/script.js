// ===============================
// 🔥 WEEK 5 – Modern JavaScript
// ===============================

// 1️⃣ let, const, template literals, default params
let name = "Shiv";
const age = 22;
function greet(user = "Bro") {
  return `Hello ${user}, welcome back!`;
}
console.log(greet(name));

// 2️⃣ Arrow functions
const add = (a, b) => a + b;
console.log("Sum:", add(5, 10));

// 3️⃣ Spread & Rest
const numbers = [1, 2, 3];
const newNums = [...numbers, 4, 5];
console.log("Spread:", newNums);

const sumAll = (...nums) => nums.reduce((a, b) => a + b);
console.log("Rest + Reduce:", sumAll(1, 2, 3, 4));

// 4️⃣ Destructuring
const person = { first: "John", last: "Doe", city: "Pune" };
const { first, city } = person;
console.log(`Destructured: ${first} from ${city}`);

const [x, y, z] = [10, 20, 30];
console.log("Array destructuring:", x, y, z);

// 5️⃣ Higher-Order Functions
const marks = [80, 90, 70, 60, 100];
const above75 = marks.filter(m => m > 75);
const avg = marks.reduce((a, b) => a + b, 0) / marks.length;
console.log("Marks >75:", above75, "| Avg:", avg);

// 6️⃣ for...of / for...in / Object.keys
for (const m of marks) console.log("for...of:", m);
for (const key in person) console.log("for...in:", key, person[key]);
console.log(Object.keys(person), Object.values(person), Object.entries(person));

// 7️⃣ Modules (just recall)
/// file1.js → export const PI = 3.14;
/// file2.js → import { PI } from './file1.js';

// 🧩 Mini Project → Student Marks Analyzer
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 90 },
  { name: "C", marks: 70 }
];
const total = students.reduce((acc, s) => acc + s.marks, 0);
const avgMarks = total / students.length;
const topStudent = students.reduce((a, b) => (a.marks > b.marks ? a : b));
console.log("Avg:", avgMarks, "| Top:", topStudent.name);

// ===============================
// 🔥 WEEK 6 – Asynchronous JavaScript
// ===============================

// 1️⃣ Synchronous vs Asynchronous
console.log("Start");
setTimeout(() => console.log("Async after 2s"), 2000);
console.log("End");

// 2️⃣ Promise
const promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("✅ Success") : reject("❌ Failed");
});
promise.then(console.log).catch(console.error).finally(() => console.log("Done"));

// 3️⃣ async/await + Fetch API
async function getJoke() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    console.log("😂 Joke:", data.value);
  } catch (err) {
    console.error("Error fetching joke:", err);
  }
}
getJoke();

// 🧩 Mini Project → Weather App (Console)
async function getWeather(city = "London") {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=demo&q=${city}`);
    const data = await res.json();
    console.log(`🌤️ ${city}: ${data.current.temp_c}°C`);
  } catch (e) {
    console.log("Weather fetch failed:", e.message);
  }
}
getWeather();

// ===============================
// 🔥 WEEK 7 – DOM + APIs
// ===============================

// For the browser only 👇

// 1️⃣ DOM Traversal + Event Delegation
// <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
document.querySelector("#list").addEventListener("click", e => {
  if (e.target.tagName === "LI") console.log("Clicked:", e.target.textContent);
});

// 2️⃣ LocalStorage + JSON
const user = { name: "Shiv", age: 22 };
localStorage.setItem("user", JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Stored user:", storedUser);

// 3️⃣ Fetch API + DOM → Mini Movie Search
// <input id="movieInput"/><button id="searchBtn">Search</button><div id="result"></div>
document.querySelector("#searchBtn").addEventListener("click", async () => {
  const name = document.querySelector("#movieInput").value;
  const res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=demo`);
  const data = await res.json();
  document.querySelector("#result").innerHTML = `
    <h3>${data.Title}</h3>
    <img src="${data.Poster}" width="150"/>
  `;
});

// 🧩 Mini Project → To-Do App (LocalStorage)
const input = document.createElement("input");
const btn = document.createElement("button");
btn.textContent = "Add Task";
document.body.append(input, btn);

btn.addEventListener("click", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  console.log("✅ Saved:", tasks);
});
