let x = 5;

x += 3;  
console.log(x); // 8

x -= 2;  
console.log(x); // 6

x *= 4;  
console.log(x); // 24

x /= 6;  
console.log(x); // 4

x %= 3;  
console.log(x); // 1

x **= 2; 
console.log(x); // 1


let p = 5, q = "5";

console.log(p == q);   // true  (equal, value only)
console.log(p === q);  // false (strict equal, value + type)
console.log(p != q);   // false (not equal, value only)
console.log(p !== q);  // true  (strict not equal)

console.log(p > 3);    // true
console.log(p < 10);   // true
console.log(p >= 5);   // true
console.log(p <= 4);   // false

let age = 20;
let hasID = true;

console.log(age > 18 && hasID); // true (AND → both true)
console.log(age > 18 || hasID); // true (OR → at least one true)
console.log(!(age > 18));       // false (NOT → opposite)


let firstName = "Shiv";
let lastName = "Munde";

console.log(firstName + " " + lastName); // Shiv Munde
console.log("Age: " + 22);               // Age: 22

let num = 5;

console.log(+num);   // 5 (unary plus → converts to number)
console.log(-num);   // -5 (unary minus → negates value)

num++;
console.log(num);    // 6 (increment)
num--;
console.log(num);    // 5 (decrement)

let marks = 85;
let result = (marks >= 40) ? "Pass" : "Fail";
console.log(result); // Pass

let str = "Hello";
let arr = [1, 2, 3];

console.log(typeof str); // string
console.log(typeof arr); // object (arrays are objects in JS)

console.log(10 instanceof Number); // false (primitive not object)
console.log(new Number(10) instanceof Number); // true

let a = 10;

a += 5;  
console.log(a);  

a -= 3;  
console.log(a);  

a *= 2;  
console.log(a);  

a /= 4;  
console.log(a);  

a %= 3;  
console.log(a);  

a **= 3;  
console.log(a);  


let b = 7;

b *= 2;  
console.log(b);  

b -= 5;  
console.log(b);  

b **= 2;  
console.log(b);  

b /= 3;  
console.log(b);  

let c = 4;

c += 3 * 2;  
console.log(c);  

c -= (5 + 1);  
console.log(c);  

c *= 2 ** 2;  
console.log(c);  

c %= 5;  
console.log(c);  
