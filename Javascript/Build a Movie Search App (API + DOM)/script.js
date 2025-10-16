fetch('http://www.omdbapi.com/?i=tt3896198&apikey=19356e')
.then(res => res.json())
.then(data => console.log(data.Title))
.catch(err => console.log(err))