const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    console.log('in logger');
    next();
}

// req => middleware => res
app.get('/', logger, (req, res) => {
    console.log("in path");
    res.status(200).send('home');
});

app.get('/about', logger, (req, res) => {
    res.send('about');
});

app.all('*', logger, (req, res) => {
    res.status(404).send('not found');
});

app.listen(5000, () => {
    console.log('running');
});
