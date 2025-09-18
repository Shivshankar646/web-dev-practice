// const person={
//     name:"shiv",
//     age:21,
//     isstudent:true
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age)

// const persons = {
//     name:"shiv",
//     greet: function (){
// return "Hello,my name is "+this.name
//     }
// };
// console.log(person.greet());
// person.city="nanded";
// console.log(person);
// person.age=22;
// console.log(person);
// delete person.age;
// console.log(person);


const student = {
    name:"shiv",
    age:8,
    isstudent:true,
    city:"noida",
    fatherwork:"farmer"
};
console.log(student)

const car = { brand: "Tesla", model: "X" };
car.color="black";
car.model="y";
console.log(car);


const calculator = {
    add: function (a,b){
        return a+b;
    }
}
console.log(calculator.add(3,5))

const phone = { brand: "Apple", price: 80000, color: "white" };
console.log(phone);
delete phone.color;
console.log(phone);

const person = {
    name:"shiv",
    greet: function (){
        return "hi, my name is "+this.name
    }
}

console.log(person.greet())