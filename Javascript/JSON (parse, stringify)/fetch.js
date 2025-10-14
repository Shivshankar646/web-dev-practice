fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>{ for (let i = 0; i < data.length; i++) {
   
    console.log(data[i].name)
}})
.catch(err => console.log(err))