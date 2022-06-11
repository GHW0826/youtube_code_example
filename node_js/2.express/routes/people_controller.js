const express = require('express');
let {people} = require('../data');
const router = express.Router();
const {
    getPeople,
    createPersonPostman,
    updatePerson,
    updatePostmanPerson,
    deletePerson
} = require('../controllers/people');

// router.get('/', getPeople);
// router.post('/', createPersonPostman);
// router.post('/postman', updatePostmanPerson);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPersonPostman);
router.route('/postman').put(updatePerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;