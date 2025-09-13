let age=20;
console.log(age)
const pi=3.14;
console.log(pi)
age=21;
console.log(age)

let x = 5;
let y = 7;

console.log(x + y)
console.log(x-y); 
console.log(x/y)  
console.log(x*y)
console.log(x**y)
console.log(x ** y);  // 25
console.log(x > y);   // true
console.log(x == "5");  // true (loose equality)
console.log(x === "5"); // false (strict equality)

let me="shiv";
const bhai=5;
let va=3.14;
let ta=true;
let un=undefined;
let sh=null;
let sm=Symbol;
const big=BigInt;
console.log(typeof me,typeof bhai,typeof va,typeof ta,typeof un,typeof sh,typeof sm)
let school={
    name:"shiv",
    age:22 ,
    village:"mahur"
  

}
console.log( school)
 array=["appple","banana","orange"]
console.log(typeof array,array)

function greet(name){
    console.log("good morning:",name)
}
greet("shiv");

//Assignment
let t = 5;
t += 3;  // x = x + 3 → 8
t -= 2;  // x = x - 2 → 6
t *= 4;  // x = x * 4 → 24
t /= 6;  // x = x / 6 → 4
t %= 3;  // x = x % 3 → 1
t **= 2; // x = x ** 2 → 1
console.log(t);

let agea = 18;
let canVote = (agea >= 18) ? "Yes" : "No";
console.log(canVote);
