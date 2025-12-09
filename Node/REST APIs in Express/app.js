const express =require('express');
const app = express();
const port = 3000;

app.use(express.json());
let users =[
    {id:1,name:'shiv'},{
        id:2,name:'bro'
    }
];
app.post('/users',(req,res)=>{
    const newuser =req.body;
    users.push(newuser);
    res.status(201).json(newuser)
})
;
app.get('/users',(req,res)=>{
    res.json(users);
    console.log(users)
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedData = req.body;

    users = users.map(user =>
        user.id === userId ? updatedData : user
    );

    res.json({ message: 'User updated', updatedData });
    console.log(users);

});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: 'User removed' });
    console.log(users)
});



app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})