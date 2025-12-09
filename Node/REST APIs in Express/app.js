const express =require('express');
const app = express();
const port = 3000;

app.use(express.json());
let users =[
    {id:1,name:'shiv'},{
        id:2,name:'bro'
    }
];
app.get('/users',(req,res)=>{
    res.json(users);
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})