//controller sytnax from Express.js Blueprints by packt publishing

var path = require('path')
var Person = require('../models/person.model')


module.exports = {
  getAll: function(req, res, next) {
    Person.find(function(err, people) {
      if (err) return res.status(400).json(err);

      res.status(200).json(people);
    });
  },
  showCreatePersonForm: function(req, res, next) {
    res.render('new');
  },
  listPersonView: function(req, res, next) {
    res.render('people');
  },
  createOne: function(req, res, next) {
  Person.create(req.body, function(err, person) {
    if (err) return res.status(400).json(err);

    res.status(201).json(person);
  });
},
  getOne: function(req, res, next) {
    Person.findOne({ id: req.params.id })
    //leave this out for now: .populate('contacts')
    .exec(function(err, person) {
      if (err) return res.status(500).json({
        message: 'Error getting the person'
      });
      if (!person) return res.status(404).json({
        message: 'No such person in the database'
      });

      res.status(200).json(person);
    });
  },
  updateOne: function(req, res, next) {
    Person.findOneAndUpdate({ id: req.params.id }, req.body, function(err, person) {
      if (err) return res.status(400).json(err);
      if (!person) return res.status(404).json();

      res.status(200).json(person);
    });
  },
  deleteOne: function(req, res, next) {
    Person.findOneAndRemove({ id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },
  addMovie: function(req, res, next) {
    Person.findOne({ id: req.params.id }, function(err, person) {
      if (err) return res.status(400).json(err);
      if (!person) return res.status(404).json();

      Movie.findOne({ id: req.body.id }, function(err, contact) {
        if (err) return res.status(400).json(err);
        if (!contact) return res.status(404).json();

        person.contacts.push(contact);
        person.save(function(err) {
          if (err) return res.status(500).json(err);

          res.status(201).json(person);
        });
      })
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
  create: function(newPerson) {
    //syntax taken from online article:
    //hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/
    console.log('The create function is invoked');
    var personInfo = newPerson
    var personRecord = new Person({
      called: personInfo.called,
      givenName: personInfo.givenName,
      surName: personInfo.surName,
      birthDate: personInfo.birthDate
    });
    personRecord.save();
    console.log('The create function is complete');
  },
  save: function(req, res) {

  },
  view: function(req, res) {

  },
  review: function(req, res) {

  },
  addContact: function(req, res) {

  }
}
