const http =require('http');
const fs = require('fs');
const path =require('path');

const server =http.createServer((req,res) =>{
    let filepath ='';
    if (req.url === '/' || req.url === '/home') {
       filepath =path.join(__dirname,'home.html');
           
    } else if(req.url === '/about') {
       filepath =path.join(__dirname,'about.html');
    } else if(req.url === '/services') {
      filepath = path.join(__dirname,'services.html')
    } else {
       filepath = path.join(__dirname,'404.html')
    }

    fs.readFile(filepath,(err,data) =>{
        if (err) {
            res.writeHead(500,{'Content-Type' : 'text/plain'})
            res.end('server error hai')
        } else {
            res.writeHead(200,{'Content-Type' :'text/html'});
            res.end(data)
        }
    })
});

server.listen(3000,()=>{
    console.log('server http://localhost:3000')
})