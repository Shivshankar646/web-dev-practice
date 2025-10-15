fetch('https://official-joke-api.appspot.com/random_joke')
.then(res => res.json())
.then(data => {
    for (const key in data) {
   
        console.log(key,data[key])
        
    }
})
.catch(err => console.log(err))