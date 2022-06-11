const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let {people} = require('./data');


// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(bodyParser.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get('/', (req, res) => {

});

app.get('/api/people', (req, res) => {
    res.status(200).json(people);
});

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({success:false, msg:'please provide name'});
    }
    res.status(201).json({ sucess:true, person:[...people, name] });
});

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person)=> person.id === Number(id));
    if (!person) {
        return res.status(400).json({success:false, msg:`no person with id ${id}`});
    }

    const newPeople = people.map((person)=> {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({sucess:true, data:newPeople});
});

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params;
    const person = people.find((person)=> person.id === Number(id));
    if (!person) {
        return res.status(400).json({success:false, msg:`no person with id ${id}`});
    }

    const delPeople = people.filter((person)=> person.id !== Number(id));
    res.status(200).json({sucess:true, data:delPeople});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({success:false, msg:'please provide name'});
    }
    res.status(201).json({ sucess:true, person:name });
});


app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(name);
    }
    else {
        res.status(401).send('no name');
    }
});

app.all('*', (req, res) => {
    res.status(404).send('not found');
});

app.listen(5000, () => {
    console.log('running');
});
