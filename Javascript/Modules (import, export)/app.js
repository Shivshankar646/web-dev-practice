// =======================
// Math module imports
// =======================
import { pi, add, square } from "./math.js";   // named exports
import cube, { multiply } from "./math.js";    // default + named

console.log(`Add 2 + 3 = ${add(2, 3)}`);
console.log(`Pi = ${pi}`);
console.log(`Multiply 5 * 2 = ${multiply(5, 2)}`);
console.log(`Square of 4 = ${square(4)}`);
console.log(`Cube of 3 = ${cube(3)}`);

// =======================
// Greet module imports
// =======================
import greet from "./greet.js";   // default export
import hero from "./greet.js";    // default export again (just another name)

console.log(greet("Shiv"));      // Hello Shiv!
console.log(hero("Bhai"));       // Hello Bhai!

// =======================
// User module imports
// =======================
import { user, greet as greetUser } from "./user.js";  // named exports

console.log(greetUser(user));   // "Hello Shiv from Nanded"

// =======================
// Products module imports
// =======================
import * as shop from "./products.js";  // import everything

// Print all products
for (const pro of shop.products) {
    console.log(pro);
}

// Filter expensive products
console.log(shop.getExpensiveProducts(20000));
