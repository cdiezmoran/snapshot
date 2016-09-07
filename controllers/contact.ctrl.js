//CRUD pattern taken from Express.js Blueprints
var Contact = require('../models/contact');
var Person = require('../models/person');

module.exports = {

  getAll: function(req, res, next) {
    Contact.find(function(err, contacts) {
      if (err) return res.status(400).json(err);

      res.status(200).json(contacts);
    });
  },


  createOne: function(req, res, next) {
    Contact.create(req.body, function(err, contact) {
      if (err) return res.status(400).json(err);

      res.status(201).json(contact);
    });
  },


  getOne: function(req, res, next) {
    Contact.findOne({ id: req.params.id })
    .populate('people')
    .exec(function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      res.status(200).json(contact);
    });
  },


  updateOne: function(req, res, next) {
    Contact.findOneAndUpdate({ id: req.params.id }, req.body, function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      res.status(200).json(contact);
    });
  },


  deleteOne: function(req, res, next) {
    Contact.findOneAndRemove({ id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },


  addPerson: function(req, res, next) {
    Contact.findOne({ id: req.params.id }, function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      Person.findOne({ id: req.body.id }, function(err, person) {
        if (err) return res.status(400).json(err);
        if (!person) return res.status(404).json();

        contact.people.push(person);
        contact.save(function(err) {
          if (err) return res.status(500).json(err);

          res.status(201).json(contact);
        });
      })
    });
  },


  deletePerson: function(req, res, next) {
    Contact.findOne({ id: req.params.id }, function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      // HACK TO CHANGE
      contact.people = [];
      contact.save(function(err) {
        if (err) return res.status(400).json(err);

        res.status(204).json(contact);
      })
    });
  }

};
