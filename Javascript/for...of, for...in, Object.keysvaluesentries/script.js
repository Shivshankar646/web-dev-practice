// 🔹 1. for...of
// Used to loop through values of an iterable (like arrays, strings, maps, sets).

const fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
// apple, banana, mango


// 🔹 2. for...in
// Used to loop through keys (properties) of an object.
const user = { name: "Shiv", age: 22, city: "Nanded" };
for (let key in user) {
  console.log(key, user[key]);
}
// name Shiv
// age 22
// city Nanded

// 🔹 3. Object.keys(obj)
// Returns an array of keys.

const user1 = { name: "Shiv", age: 22 };
console.log(Object.keys(user1)); 
// ["name", "age"]

// 🔹 4. Object.values(obj)
// Returns an array of values.
console.log(Object.values(user1));

// 🔹 5. Object.entries(obj)
// Returns an array of [key, value] pairs.
console.log(Object.entries(user1));
// [["name", "Shiv"], ["age", 22]]

for (let [key, value] of Object.entries(user1)) {
  console.log(key, value);
}


// 🔹 Task 1: Student Marks
// You have marks of a student:
const marks = [85, 90, 78, 88];
for (const mark of marks) {
    console.log(mark)
}

// 🔹 Task 2: Car Object
const car = { brand: "BMW", model: "X5", year: 2022 };
for (const key in car) {
console.log(key,car[key])
    
    
}

// 🔹 Task 3: Product Details
const product = { name: "Laptop", price: 50000, seller: "TechStore" };
console.log(Object.entries(product));

for (let [keys,value]  of Object.entries(product)) {
    console.log(`${keys}:${value}`)
};


// 📝 Challenge: E-commerce Orders
// You have an array of order objects:
const orders = [
  { id: 1, product: "Laptop", price: 50000, status: "delivered" },
  { id: 2, product: "Phone", price: 20000, status: "pending" },
  { id: 3, product: "Headphones", price: 2000, status: "delivered" }
];

// ✅ 1. for...of
for (const order of orders) {
  console.log(`${order.product} - ₹${order.price}`);
}

// ✅ 2. for...in (only first order)
for (const key in orders[0]) {
  console.log(`${key} : ${orders[0][key]}`);
}

// ✅ 3. Object.entries + destructuring (second order)
for (let [key, value] of Object.entries(orders[1])) {
  if (key === "product" || key === "status") {
    console.log(`${key}=${value}`);
  }
}

const { product, status } = orders[1];
console.log(product, status); // Phone pending
