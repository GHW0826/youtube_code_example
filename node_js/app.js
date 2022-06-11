const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let {peoples} = require('./data');


// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(bodyParser.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.all('*', (req, res) => {
    res.status(404).send('not found');
});

app.listen(5000, () => {
    console.log('running');
});
