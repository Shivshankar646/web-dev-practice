let notes = [
  { id: 1, title: "first" },
  { id: 2, title: "second" }
];

function createNote(notes, title) {
const newnote ={
    id:notes.length + 1,
    title:title
};
return [...notes,newnote];
}

console.log(createNote(notes,"this is new note"));


function findlastid(notes){
return notes.find(note => note.id > note.id)
};

console.log(findlastid(notes));



// Print numbers from 1 to 10 using a loop.

for (let i = 1; i <= 10; i++) {
    console.log(i)
    
}

// Print numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
   
    if (i%2 === 0) {
        console.log(`${i}-EVEN`);
    } else {
         console.log(`${i}-ODD`);
    }
}

// Print numbers from 1 to 30, but:

for (let i = 1; i <= 30; i++) {
    
    if (i % 3 === 0 || i % 5 === 0) {
        
    } else{
        console.log(i);
    };
};

// Q4.Write a function:
function sumEven(n) {
    let num =0;
    for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
       num = num+i;
       
    }
    
}
console.log(num);
}

sumEven(10);

// Q5.Count how many numbers between 1 and 50 are divisible by 4.

let Count =0;
for (let i = 0; i <= 50; i++) {
    if (i % 4 === 0) {
       Count =Count+1;
       console.log(Count);
    }
};

// Q6.Given a number:

let num = 45821;
console.log(num.length)


// Q7.Find the largest number from these three:
let a = 12;
let b = 45;
let c = 7;

if (a > b) {
    if (a > c) {
        console.log(a)
    } else{
        console.log(c)
    }
} else if (a < b) {
    if (b > c) {
        console.log(b)
    } else{
        console.log(c)
    } 
};