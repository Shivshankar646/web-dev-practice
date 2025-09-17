//Array stores multiple values
let fruits=["apple","banana","mango"];
// console.log(fruits[0]);


//1.push(add at the end)
// let numbers=[1,2,3,4];
// numbers.push("shiv");
// numbers.push(5)
// console.log(numbers);

//2.pop(remove last element)
// let numbers=[1,2,3,4];
// numbers.pop();
// console.log(numbers)

//3.foreach(loop through array)
// let numbers=[1,2,3,4];
// numbers.forEach(num => {
//     console.log(num*2)
// });

//4.map(create new array)

// let numbers=[1,2,3];
// let squares = numbers.map(num => num*num);
// console.log(squares);

//practice of arrays

//1.Start with an array of numbers: [1, 2, 3, 4, 5].
let numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
numbers.pop()
console.log(numbers);

//2.
let fruit=["apple","banana","mango"];
fruit.forEach(fru => {
    console.log(fru)
});

//3.
let num=[2,4,6,8];
let double=num.map(n => n*2);
console.log(double);

//4.
let some=[1,2,3,4,5];
let square =some.map(s => s*s);
console.log(square);

//5.
// let number = [5,10,15,20];
// number.forEach(nu => {
//  if (nu>10) {
//     console.log(nu)
//  }
// });
//this problem eith another method using filter
let number=[5,10,15,20];
// console.log(number.filter(n => n>10))
number.filter(n => n>10).forEach(n => { console.log(n)});

let nums=[5,10,15,20,25];
let result=nums.map(n => n*2).filter(n => n>20);
console.log(result);
//6.reduce
let sum=[1,2,3,4].reduce((acc, curr) => acc + curr, 1); // 10

let na=[1,2,3,4];
let results=na.reduce((acc,curr) => acc<curr ? curr:acc,0)

console.log(results)
