const express = require('express');
const app = express();

// get, post, put, delete, all, use
app.get('/', (req, res) => {
    res.status(200).send('home');
});

app.get('/about', (req, res) => {
    res.status(200).send('about');
});

// wildcard word
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
    console.log('running');
});
