//this is an example of a controller I found in an article.
//I liked the convention.  I haven't made it work yet.

var path = require('path'),
    Person = require('../models/person.model')

module.exports = {
  index: function(req, res) {
    //syntax taken from online article:
    //hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/
    Person.find({}, function(err, people) {
      if(err) {
        return next(err);
      }
      else {
        res.json(people);
      }
    });
  },
  list: function(req, res, next) {
    //syntax taken from online article:
    //hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/
    Person.find({}, function(err, people) {
      if(err) {
        return next(err);
      }
      else {
        res.json(people);
      }
    });
  },
  match: function(req, res) {
    //Below are possible ways of getting a text search to match a record
    //var givenName = req.query.givenName;
    //Person.find(
      //{ $text : { $search : "text to look for" } },
      //{ score : { $meta: "textScore" } }
    //)
    //console.log('Searching for: ' + name);
    //res.send(name);

  },
  create: function(req, res, next) {
    //syntax taken from online article:
    //hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/
    var person = new Person(req.body);
    person.save(function(err) {
      if (err) {
        return next(err);
      }
      else {
        res.json(person)
      }
    });
  },
  save: function(req, res) {

  },
  view: function(req, res) {

  },
  review: function(req, res) {

  }
}
