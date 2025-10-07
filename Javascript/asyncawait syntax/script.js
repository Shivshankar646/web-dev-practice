
async function functionName(){
    try {
        let result = await functiondata();
        console.log(result);
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Done")
    }
}



function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received ✅");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  const data = await fetchData();  // waits until promise resolves
  console.log(data);
  console.log("Done ✅");
}

getData();

async function shodata() {
    try {
        let result = await Promise.reject("network error");
        console.log(result)
    } catch (error) {
        console.log("error:",error)
    } finally {
        console.log("all done")
    }
}
shodata();

// 🧩 Level 1 – Basics
 function task() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed ✅")
        }, 2000);
    })
    
}
async function get() {
   const data =await task();
   console.log(data)
}
get();

// Task 2:
function getuser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("shiv")
        }, 1000);
    })
}
async function getdata() {
  const result =await getuser();
  console.log(`Hello ${result}`)
}
getdata();

// ⚡ Level 2 – Using try...catch
function here(){
    return new Promise((resolve, reject) => {
        let math =Math.random();
        console.log(math)
        if (math > 0.3) {
            resolve("Data received ✅")
        } else {
            reject("Error ❌")
        }
    })
}

async function successerror() {
    try {
        let result = await here();
        console.log(result)
    } catch (error) {
        console.log("Error:",error)
    }
}
successerror();

// 🚀 Level 3 – Chaining async

function orderPizza(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve("🍕 Ordered pizza")
    }, 1000);
})
}


function cookPizza(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve("👨‍🍳 Pizza cooked")
    }, 2000);
    
})
}


function deliverPizza(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve("🚚 Pizza delivered")
    }, 1000);
})
}

async function fetchpizza() {
    try {
        let get1 =await orderPizza();
        console.log(get1);
        let get2 =await cookPizza();
        console.log(get2);
        let get3 =await deliverPizza();
        console.log(get3);
    } catch (error) {
        console.log(error)
    }
}
fetchpizza();

// Task 5:
async function fetchData() {
  console.log("Fetching data...");
  await wait(2000); // wait 2 seconds
  console.log("Data received ✅");
}

fetchData()