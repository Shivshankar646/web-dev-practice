// ✅ 1. What is Fetch API?

// Used to make HTTP requests (like GET, POST, PUT, DELETE).

// Returns a Promise.

// ⚙️ 2. GET Request (Fetch Data)

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())     // convert response to JSON
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//   ⚡ 3. POST Request (Send Data)
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ title: 'Hello', body: 'World' })
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


//   🧩 4. Using async/await
//   async function getData() {
//   try {
//     let res = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }
// getData();

// ⚡ Task 1 – Basic GET Request
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => res.json())
// .then(data => console.log(data.title,data.body))
// .catch(err => console.log(err));

// ⚡ Task 2 – Multiple Posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     // show first 5 posts only
//     for (let i = 0; i < 5; i++) {
//       console.log(`Post ${i + 1}: ${data[i].title}`);
//     }
//   })
//   .catch(err => console.log("Error:", err));

// ⚡ Task 3 – Using async/await
// async function getdata() {
//     try {
//         let res =await fetch('https://jsonplaceholder.typicode.com/posts')
//         let data = await res.json()
   
//       for (const da of data) {
//         console.log(da.title)
//       }
//     } catch (error) {
//         console.log(error)
//     }
// }

// getdata();

const arr = ["x", "y", "z"];
const obj = [{ a: 1, b: 2, c: 3 }
,{a:3,b:5,c:7}];

for (const a of arr) console.log(a); // values: x, y, z
for (const key in obj) {
  console.log(obj[key])
    
    
}
// for (const o in obj) console.log(o, obj[1]); // keys + values

// ⚡ Task 4 – POST Request (send data)

fetch('https://jsonplaceholder.typicode.com/posts',{
method:'post',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
  title: "My First Post",
  body: "Learning Fetch API!",
  userId: 1
}
)
})

.then(res => res.json())
.then(data =>  {  
    for (const key in data) {
   console.log(data[key])
    
    }
})
.catch(err => console.log(err))

