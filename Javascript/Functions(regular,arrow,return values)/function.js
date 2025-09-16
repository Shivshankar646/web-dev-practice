// //1.Regular function
// function greet(name){
//     console.log("Hello,"+name+"!")
// }
// greet("shivshankar");


// //2.Function with return
// // function add(a,b){
// //     return a+b;
// // }
// // let result=add(3,5);
// // console.log(result);
// // console.log(add(3,5)) //same output

// //3.Function Expression
// const square = function(num) {
//     console.log(num)
//     return num*num;
// };
// console.log(square(5));

// //4.Arrow Function
// const multiply = (a,b) => a*b;
// console.log(multiply(5,5));

// //5.Arrow Function(single line)
// const double=x => x*2;
// console.log(double(2))

// //✅ Key points to remember:

// //.function keyword → Regular function.

// //.return → Sends value back to where function is called.

// //.Arrow functions (=>) are shorter & modern.

// //.You can store functions in variables.

// //This is for practice purpose:

// //even or odd
// function checkevenodd (num){
//     if(num%2==0){
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }
// console.log(checkevenodd(5));
// console.log(checkevenodd(4));

// //factorial of a number
// function factorial (n){
//     let result=1;
//     for (let i = n; i >=1; i--) {
       
//         result*=i;
//     }
//     return result;
// }

// console.log(factorial(5));

// //Write a function that takes n and returns the sum from 1 to n.
// function nsum (n){
//     let sum=0;
//     for (let i = 1; i <=n ; i++) {
     
//         sum+=i;
//     }
//     return sum;
// }
// console.log(nsum(100));

// //Write a function that prints the multiplication table of a number.
// function table (n){
//     for (let i = 1; i <=10 ; i++) {
     
//         console.log(n,'x',i,'=',(n*i))
//     }
// }
// table(100);

// //sum of first n numbers:
// const sumtonarrow=(n) => {
//     let sum=0;
//     for (let i = 1; i <=n ; i++) {
//        sum+=i;
        
//     }
//     return sum;
// }
// console.log(sumtonarrow(50));

// const sumToNArrow = n => (n * (n + 1)) / 2; // formula
// console.log(sumToNArrow(5)); // 1275

//for finding prime number

function isprime (num){
    if (num<=1) return false;
    for (let i = 2; i <= num ; i++) {

    if((num%1==0 && num%i===0)){
     return false;
       
    }
   return true;
}
}
console.log(isprime(1));