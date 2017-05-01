// Person routes

var express = require('express');
var router = express.Router();
var passport = require('passport');
//var person = require('../controllers/people.ctrl');
//var persons = require('../controllers/people.ctrl');
var peopleCtrl = require('../controllers/people.ctrl');


//router.get('/', peopleCtrl.listPersonView);
router.get('/getAll', peopleCtrl.getAll);
//router.get('persons/getAll', peopleCtrl.getAll);

// router.get('/new', peopleCtrl.showCreatePersonForm);
//router.post('/new', peopleCtrl.createOne);

// I was using some convention I don't remember how to use.
// router.get('/people',person.getAll);
router.get('/:id', peopleCtrl.getOne)

router.post('/new',peopleCtrl.createOne);
// router.get('/person',peopleCtrl.getAll);
//router.delete('/persons/:id',peopleCtrl.deleteOne);

router.put('/:id',peopleCtrl.updateOne);
router.delete('/person/:id',peopleCtrl.deleteOne);

router.post('/person/:id/contact', peopleCtrl.addContact);


module.exports = router;
