const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { name: 'Shiv Bro hi you are learning very fast ' });
});


app.get('/about', (req, res) => {
    res.render( 'bhai',{hero:'you are my inspiration '});
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
