const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next(); // move to next step
});

app.get('/', (req, res) => {
    res.send('Welcome Home Page here! 🚀');
});

app.get('/about', (req, res) => {
    res.send('This is About Page 2');
});

app.get('/contact', (req, res) => {
    res.send('This is Contact Page 5');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
