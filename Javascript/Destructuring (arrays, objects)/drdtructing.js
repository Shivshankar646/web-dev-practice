// 1.Array Destructuring

const numbers = [10, 20, 30];

// Old way
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
console.log(c);

// ES6 Destructuring
let [x,y,z] = numbers;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

// const [first,,third] = numbers;
// console.log(first,third);

const [p,q,r=100]=[1,2];
console.log(p,q,r);

// 2.Object Destructuring

// const person = {
//   name: "Shiv",
//   age: 21,
//   city: "Nanded"
// };

// Old way
// let userName = person.name;

// ES6 Destructuring
// let {name,age,city} = person;

// console.log(name); // Shiv
// console.log(age);  // 21
// console.log(city); // Nanded

// let { name, country = "India" } = person;
// console.log(name, country); // Shiv India
// let {name:fullname,age:years} = person;
// console.log(fullname,years);

// const student={
//     id:1,
//     profile:{
//         username:"shiv123",
//         email:"shiv@example.com"
//     }
// };

// let { profile:{username,email}} =student;
// console.log(username, email); // shiv123 shiv@example.com


//practice

// 🔹 Level 1 (Basic)
//1.Extract first two values from array:

const colors = ["red", "blue", "green"];
// 👉 get red into c1, blue into c2
let [c1,c2] = colors;
console.log(c1,c2)

//2.Extract values from object:
// const user = { name: "Shiv", age: 21 };
// // 👉 get name into uname, age into uage
// let {name:uname,age:uage} = user;
// console.log(uname,uage);

// 🔹 Level 2 (Intermediate)

//3.Use default value in destructuring:
const person = { name: "Shiv" };
// 👉 get name, and city="Nanded" if not present
// let {name,city="Nanded"} = person;
// console.log(name,city);

// 4.Skip values in array:
// const nums = [10, 20, 30, 40];
// // 👉 get first and fourth only
// let [first,,,fourth] = nums;
// console.log(first,fourth);

// 🔹 Level 3 (Advanced)
// Nested object destructuring:
const student = {
  id: 1,
  profile: { username: "shiv123", city: "Nanded" }
};
// 👉 get username and city
// let {profile:{username,city}} =student;
// console.log(username,city);

// 📝 Practice Tasks (Real-Life)
// 🔹 Task 1: User Profile

// You get a user object:
const user = {
  id: 101,
  name: "Shiv",
  contact: {
    email: "shiv@gmail.com",
    phone: "12345"
  }
};

let {name,contact:{email,phone}} =user;
console.log(name,email,phone);

// 🔹 Task 2: API Response

// Imagine you got this response from an API:
const response = {
  status: "success",
  data: {
    product: "Laptop",
    price: 45000,
    seller: {
      name: "TechStore",
      location: "Mumbai"
    }
  }
};
let {data:{product,price,seller:{location}}} =response;
console.log(product,price,location);

// 🔹 Task 3: Coordinates
// You have an array of coordinates:
const coords = [19.07, 72.87];
let [lat=0,lng=0] =coords;
console.log(lat,lng);

// 🔹 Task 4: Shopping Cart
const cart = ["apple", "banana", "mango", "orange"];
let [first,,,fourth] = cart;
console.log(first,fourth);
