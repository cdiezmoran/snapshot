// Person routes

var express = require('express');
var app = express();
var router = express.Router();
var passport = require('passport');
var person = require('../controllers/people.ctrl')
var peopleCtrl = require('../controllers/people.ctrl')


router.get('/new', peopleCtrl.showCreatePersonForm);
router.post('/new', peopleCtrl.createOne);

// I was using some convention I don't remember how to use.  
app.route('/people')
.get(person.getAll)
.post(person.createOne);

app.route('/person/:id')
.get(person.getOne)
.put(person.updateOne)
.delete(person.deleteOne);

app.post('/person/:id/contact', person.addContact);


module.exports = router;