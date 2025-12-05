const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/' || req.url === '/home') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'contact.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Page Not Found bro');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Error loading the page');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
