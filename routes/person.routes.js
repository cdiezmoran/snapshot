// Person routes

var express = require('express');
var app = express();

app.route('/people')
.get(person.getAll)
.post(person.createOne);

app.route('/person/:id')
.get(person.getOne)
.put(person.updateOne)
.delete(person.deleteOne);

app.post('/person/:id/contact', person.addContact);
