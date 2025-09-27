// 1. let

// Used to declare a variable.

// Value can change later.

// Block scoped (works only inside { } where it is written).

let age =22;
age=21;
console.log(age);

// 2. const

// Also used to declare a variable.

// Value cannot change (constant).

// Must give value at the time of declaration.

const pi1=3.14;
// pi=3.12;//
console.log(pi1)
//(But if const is an array or object, you can change its content — not reassign the variable itself.)

// 3. Template literals (` ` backticks)

// A better way to join strings.

// Use ${variable} inside them.

// Supports multi-line strings easily.

let name = "Shiv";
let age1 = 21;

console.log("My name is " + name + " and I am " + age1 + " years old."); // old way
console.log(`My name is ${name} and I am ${age1} years old.`);           // ✅ template literal
console.log(`
             i am shivshankar 
             i am learning we development
             and i like coding now`);


//4. Default parameters

// Give a default value to a function parameter.

// If the caller doesn’t pass anything, default is used.

function greet(name="guest"){
    console.log(`hello ${name}!`)
}
greet("shiv");
greet();

//practicing

let age2=21;
console.log(age2);
age2=20;
console.log(age2);

const pi=3.1415;
// pi=3.15;
console.log(pi);
const fruit=["apple","banana"];
fruit.push("mango");
console.log(fruit);

let name1="shiv";
let city="nanded";
console.log(`my name is ${name1}.I live in ${city}`);
console.log(`i am going to united states
    i want to live in my village
    i am also want to do work from home`);

    function greet(name="guest"){
        console.log(`hello ${name}!`)
}
greet("shiv");
greet();


function add(a=0,b=0){
    return a+b;
}
console.log(add(2,4));
console.log(add(2));
console.log(add());