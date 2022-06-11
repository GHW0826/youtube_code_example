const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const people = require('./routes/people');
const auth = require('./routes/auth');
let {peoples} = require('./data');


// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(bodyParser.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use('/api/people', people);
app.use('/login', auth);


app.all('*', (req, res) => {
    res.status(404).send('not found');
});

app.listen(5000, () => {
    console.log('running');
});
