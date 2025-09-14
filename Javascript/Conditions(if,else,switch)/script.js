let age = 18;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

let marks = 40;

if (marks >= 90) {
  console.log("grade a");
} else if (marks >= 75) {
  console.log("grade b");
} else if (marks >= 50) {
  console.log("grade c");
} else {
  console.log("fail");
}

let age1 = 20;

let hasid = false;
if (age1 >= 18) {
  if (hasid) {
    console.log("you can enter in club");
  } else {
    console.log("id required");
  }
} else {
  console.log("you are underage");
}

let day = 10;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid day");
}

if (age >= 18) console.log("You can vote");

let num=100;
if (num%2==0) {
    console.log("Even:",num)
} else {
    console.log("Odd:",num)
}

let mark=40;
if (mark >=90) {
    console.log("A")
} else if (mark >=75) {
    console.log("B")
} else if (mark >=50) {
    console.log("C")
} else {
    console.log("fail")
}

let d=10;
switch (d){
    case 1:console.log("monday"); break;
    case 2:console.log("tuesday"); break;
    case 3:console.log("wednesday"); break;
    case 4:console.log("thursday"); break;
    case 5:console.log("friday"); break;
    case 6:console.log("saturday"); break;
    case 7:console.log("sundayday"); break;
    default:console.log("invalid day");
}