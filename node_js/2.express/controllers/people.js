const getPeople = (req, res) => {
    res.status(200).json(people);
};

const createPersonPostman = (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (!name) { 
        return res.status(400).json({success:false, msg:'please provide name'});
    }
    res.status(201).json({ sucess:true, person:[...people, name] });
};

const updatePerson = (req, res) => {
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
};

const updatePostmanPerson =  (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({success:false, msg:'please provide name'});
    }
    res.status(201).json({ sucess:true, person:name });
};

const deletePerson =  (req, res) => {
    const {id} = req.params;
    const person = people.find((person)=> person.id === Number(id));
    if (!person) {
        return res.status(400).json({success:false, msg:`no person with id ${id}`});
    }

    const delPeople = people.filter((person)=> person.id !== Number(id));
    res.status(200).json({sucess:true, data:delPeople});
};

module.exports = {
    getPeople,
    createPersonPostman,
    updatePerson,
    updatePostmanPerson,
    deletePerson
};