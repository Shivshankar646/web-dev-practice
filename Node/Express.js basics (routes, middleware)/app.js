const express =require('express');
const app =express();

app.use((req,res,next) =>{
    console.log('Requested url:',req.url);
    next();
});

app.get('/',(req,res) =>{
    res.send('home page');
});

app.get('/about',(req,res) =>{
res.send('this is about page')
});

app.get('/contact',(req,res)=>{
    res.send('this is contact page')
})

app.listen(3000,()=>{
    console.log('server running on http://localhost:3000')
})