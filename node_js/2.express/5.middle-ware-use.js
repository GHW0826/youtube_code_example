const express = require('express');
const app = express();
const morgan = require('morgan');   // log module
const logger = require('./logger');
const authorize = require('./authorize');
const fs = require('fs');
const path = require('path');
let logStream = fs.createWriteStream(path.join(__dirname, 'file.log'), {flags: 'a'})

// function order check, if after get '/' declare no work get request '/'
// relative
// app.use('/api', logger);
app.use(express.static('./public'));
app.use(morgan('tiny',  { stream: logStream }));
// app.use([ logger, authorize ]);

// req => middleware => res
app.get('/', (req, res) => {
    console.log("in path");
    res.status(200).send('home');
});

app.get('/about', (req, res) => {
    console.log('in about');
    res.send('about');
});

app.all('*', (req, res) => {
    console.log('not found');
    res.status(404).send('not found');
});

app.listen(5000, () => {
    console.log('running');
});
