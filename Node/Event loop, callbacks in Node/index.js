// console.log("start");
// setTimeout(() => {
//     console.log("inside callback")
// }, 3000);

// console.log("end")

// const fs = require('fs');

// console.log('Start');
// fs.writeFileSync('demo.txt','hi i am shiv');

// fs.readFile('demo.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// console.log('End');

// console.log("1");
// setTimeout(() => {
//     console.log('2')
// }, 0);
// console.log('3')
// function done() {
//     console.log("Task completed");
// }

// setTimeout(done, 2000);


// let mypromise = new Promise((resolve, reject) => {
//     let success =false;

//     if (success) {
//         resolve('task completed successfuly')
//     } else {
//         reject('task failed')
//     }

// });

// mypromise
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))

// function wait() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("2 seconds done!");
//     }, 2000);
//   });
// }

// wait().then((msg) => console.log(msg));

// const fs = require('fs');

// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// });

const fs = require('fs').promises;

fs.readFile('demo.txt', 'utf8')
.then(data => console.log(data))
.catch(err => console.log(err));
