const express = require('express');
let {people} = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(people);
});

router.post('/', (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({success:false, msg:'please provide name'});
    }
    res.status(201).json({ sucess:true, person:[...people, name] });
});

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const person = people.find((person)=> person.id === Number(id));
    if (!person) {
        return res.status(400).json({success:false, msg:`no person with id ${id}`});
    }

    const delPeople = people.filter((person)=> person.id !== Number(id));
    res.status(200).json({sucess:true, data:delPeople});
});

router.post('/postman', (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({success:false, msg:'please provide name'});
    }
    res.status(201).json({ sucess:true, person:name });
});




module.exports = router;