// 🚀 Modern JavaScript (ES6+) – Arrow Functions, Spread & Rest Operators.
// 1. Arrow Functions

//✅ Benefits: shorter, no function keyword, automatically returns if one expression.
//Shorter way to write functions.
//example are given below.
function add(a,b){
    return a+b;
}
console.log(add(3,5));

const addarrow = (a , b ) => a + b;
console.log(addarrow(3,5));

const minues=(c,d) => c-d;
console.log(minues(5,2));

const multipli=(e,f,h) => e*f*h;
console.log(multipli(1,2,3));


// 2. Spread Operator (...)
// Expands (spreads) elements of an array or object.
//✅ Useful for copying arrays/objects or combining.
const arr=[1,2,3,4];
const newarr=[...arr];
// const newarr=[...arr,5,6,7];
console.log(newarr);

const obj={name:"shiv",age:21};
const newobj = {...obj,city:"mahur"};
console.log(newobj);

let shiv={hero:"shiv",bhai:"shiv"};
let newshiv={...shiv,city:"nanded",pincode:431721};
console.log(newshiv);


//3. Rest Operator (...)
//Collects multiple values into an array. Opposite of spread.
//✅ Used in functions when you don’t know how many arguments will come.
function sum(...numbers){
    return numbers.reduce((acc,curr) => acc*curr,1);
};
console.log(sum(1,2,3,3,1));

function minuess(...num){
    return num.reduce((acc,curr) => acc-curr,0);
};
console.log(minues(5,2));

//practice
const multi=(g,f) => g*f;
console.log(multi(2,5));

const fruits = ["apple", "banana"];
const moreFruits = ["mango", "orange"];
const addedfruit=[...fruits,...moreFruits];
console.log(addedfruit);

function sumall(...num1){
    return num1.reduce((acc,curr) => acc+curr,0)
}
console.log(sumall(2,3,4));