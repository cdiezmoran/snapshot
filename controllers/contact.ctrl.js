//CRUD pattern taken from Express.js Blueprints
var Contact = require('../models/contact.model');
var Person = require('../models/person.model');

module.exports = {

  getAll: function(req, res, next) {
    Contact
    .find()
    .populate('forPerson')
    .populate('atOrganization')
    .exec(function(err, contacts) {
      if (err) return res.status(400).json(err);

      res.status(200).json(contacts);
    });
  },
  getAllByPerson: function(req, res, next) {
    Contact
    .find({forPerson: req.params.id})
    .populate('forPerson')
    .populate('atOrganization')
    .exec(function(err, contacts) {
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
    Contact.findOne({ _id: req.params.id })
    .populate('forPerson')
    .populate('atOrganization')
    .exec(function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      res.status(200).json(contact);
    });
  },

  find: function(req, res, next) {
    Contact.find({ email: req.params.email })
    .populate('forPerson')
    .populate('atOrganization')
    .exec(function(err, contacts) {
      if (err) return res.status(400).json(err);
      if (!contacts) return res.status(404).json();
      contacts = contacts.map(c=>{
        return c.toObject();
      });
      res.status(200).json(contacts);
    });
  },


  updateOne: function(req, res, next) {
    Contact.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      res.status(200).json(contact);
    });
  },


  deleteOne: function(req, res, next) {
    Contact.findOneAndRemove({ _id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },


  addPerson: function(req, res, next) {
    Contact.findOne({ _id: req.params.id }, function(err, contact) {
      if (err) return res.status(400).json(err);
      if (!contact) return res.status(404).json();

      Person.findOne({ _id: req.body.id }, function(err, person) {
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
    Contact.findOne({ _id: req.params.id }, function(err, contact) {
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
