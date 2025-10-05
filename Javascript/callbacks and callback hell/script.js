// 🧩 1. What is a Callback?

// A callback is simply a function passed as an argument to another function —
// and it runs after that function finishes its work.

// It’s like saying:

// “When you’re done, call me back!”

// function goodmorning(name,callback){
//     console.log("goodmorning"+name);
//     callback();
    
// }
// function hello(){
//     console.log("saying hello after good morning");
//     greey("shiv")
    

// }

// function greey(name){
//     console.log("hello"+name);
 
    
// }
// goodmorning("shiv",hello);

// setTimeout(() => {
//     console.log("data loaded!");
// }, 2000);
// console.log("Loading...");

// function goingtoso(name,callback){
// console.log("mam can i go for washroom" + name );
// callback();
// }

// function maycome(){
//     setTimeout(() => {
//         console.log("may i come madam")
//     }, 2000);
// }
// goingtoso("mam",maycome);


// setTimeout(() => {
//     console.log("step 1")
//     setTimeout(() => {
//         console.log("step 2")
//         setTimeout(() => {
//             console.log("step 3")
//         }, 1000);
//     }, 1000);
// }, 1000);


// Task 1: Simple greeting callback
function greet(name,callback){
    console.log("Hello "+ name +"!");
    callback();
}
function asking(){
    console.log("How are you?")
}
greet("shiv",asking);

// Task 2: Delayed message

function task(callback){
    console.log("Start task");
    setTimeout(callback, 2000);
}
task(() => console.log("Task finished!"));


// Task 3: Calculator with callback

function calculate(a, b,callback ){
    console.log("Result");
    callback(a,b)
};
function result(a,b){
    console.log("add: ",a+b);
    console.log("multiplication",a*b)
}
calculate(2,4,result)


// Task 4: Nested callbacks (callback hell practice)
setTimeout(() => {
    console.log("step 1")
    setTimeout(() => {
        console.log("step 2")
        setTimeout(() => {
            console.log("step 3")
        }, 1000);
    }, 1000);
}, 1000);

// Task 5: Converting callback to Promise (challenge)
new Promise((resolve) => {
    setTimeout(() => {
        console.log("Step 1");
        resolve();
    }, 1000);
}).then(() => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Step 2");
        resolve();
    }, 1000);
})).then(() => {
    setTimeout(() => {
        console.log("Step 3");
    }, 1000);
});
