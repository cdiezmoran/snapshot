//Contact routes
var express = require('express');
var app = express();

var contact = require('../controllers/contact.ctrl');

app.route('/')
.get(contact.getAll)
.post(contact.createOne);

// /contact/person/123
app.route('/person/:id')
.get(contact.getAllByPerson)

app.route('/:id')
.get(contact.getOne)
.put(contact.updateOne)
.delete(contact.deleteOne);

module.exports = app;
