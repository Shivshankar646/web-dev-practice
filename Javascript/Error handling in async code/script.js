// 🧩 Error Handling in Async Code

// 1️⃣ Using .catch() (with Promises)
// // When using Promises, errors are handled using .catch().
// fetch("https://api.example.com/data")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log("Error:", err));

//   async function getdata() {
//     try {
//         let res = await fetch('https://api.example.com/data')
//         let data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log("Error:",error)
//     }
//   }

//   getdata();

  async function fetchinfo() {
    try {
        let res = await fetch('https://api.example.com/info')
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("Error:",error)
    } finally {
        console.log("process is completed")
    }
  }
  fetchinfo();

//   Method     	Used With	                              Meaning Explained
// .catch()     	Promises	                    When you use Promises (like fetch(...).then(...)), you handle errors using .catch()
// try...catch	    async/await                  	When you use async functions and await, you handle errors using try...catch
// finally()	    Both	                        The finally() block works with both Promises and async/await — it runs after success or error, always.



// Task 1

let promise = new Promise((resolve, reject) => {
    let math =Math.random()
    if (math > 0.5) {
        resolve("success")
    } else {
        reject("❌ failed")
    }
})
promise
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log("checking completed"))

// Task 2

async function getrandom() {
    let promise =new Promise((resolve, reject) => {
        let math =Math.random()
        if (math > 0.5) {
            resolve("success")
        } else {
            reject("❌ failed")
        }
    })
    promise
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("checking is completed"))
}
getrandom()
async function get() {
    try {
        let promise = new Promise((resolve, reject) => {
            let math =Math.random();
            if (math > 0.5) {
                resolve("success .")
            } else {
                reject("error")
            }
        });
        let result =await promise;
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("process completed")
    }
}
get();

// Task 3

// let promise = new Promise((resolve, reject) => {
//     let math =Math.random()
//     if (math > 0.5) {
//         resolve("success")
//     } else {
//         reject("❌ failed")
//     }
// })
// promise
// .then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(() => console.log("checking completed"))

async function getrandom() {
    let promise =new Promise((resolve, reject) => {
        let math =Math.random()
        if (math > 0.5) {
            resolve("success")
        } else {
            reject("❌ failed")
        }
    })
    promise
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("checking is completed"))
}
getrandom();

// Task 4
fetch('https://api.apis.guru/v2/list.jso')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Error.:",err))
// i have seen fixing url also