const http =require('http');

const server =http.createServer((req,res) =>{
    res.writeHead(200,{ 'content-Type':'text/plain' });
    res.end('this is my first time writing')
});
server.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
});