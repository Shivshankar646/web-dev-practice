let marks = 0;
const students = [
  { name: "Shiv", marks: [85, 90, 78] },
  { name: "Riya", marks: [92, 88, 79] },
  { name: "Amit", marks: [70, 60, 80] }
];

let newresult =[];

for (const student of students) {
  
  
 
    if (students) {
       let separate = students.map( student => students === marks );
      
   let result = (student.marks).reduce((acc,curr) => acc+curr,0)
   newresult.push(result);
}


}
let  highest =newresult.reduce((acc,curr) => acc>curr ? acc:curr,0);
let lowest = newresult.reduce((acc,curr) => curr < acc ? curr:acc,newresult[0])
let average=newresult.map(avg => avg/3)
newresult.push(highest,lowest,average)

console.log(newresult);
for (const student of students) {
}



