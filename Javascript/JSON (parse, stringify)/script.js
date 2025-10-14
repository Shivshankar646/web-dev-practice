// 🧠 JSON (JavaScript Object Notation)

// JSON is a lightweight data format used for storing and exchanging data between a client and server.
// It looks like a JavaScript object but is actually a string.

// 📦 1. JSON.stringify()

// ✅ Converts a JavaScript object → JSON string.
let user ={name:"shiv",age:22};
let jsondata =JSON.stringify(user);
console.log(jsondata);

// 📥 2. JSON.parse()

// ✅ Converts a JSON string → JavaScript object.

let jsonData ='{"name":"shiv","age":22}';
let obj =JSON.parse(jsonData);
console.log(obj);


