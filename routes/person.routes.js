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
router.get('/:person', peopleCtrl.showCreatePersonForm)

router.post('/people',peopleCtrl.createOne);
// router.get('/person',peopleCtrl.getAll);




// router.get('/persons',person.getAll);
//router.get('/persons/:id',peopleCtrl.getOne);
//router.put('/persons/:id',peopleCtrl.updateOne);
//router.post('/persons',peopleCtrl.createOne);
//router.post('persons/new', peopleCtrl.createOne);
//router.delete('/persons/:id',peopleCtrl.deleteOne);


router.get('/person/:id',peopleCtrl.getOne);
router.put('/person/:id',peopleCtrl.updateOne);
router.delete('/person/:id',peopleCtrl.deleteOne);

router.post('/person/:id/contact', peopleCtrl.addContact);


module.exports = router;
