//controller sytnax from Express.js Blueprints by packt publishing

var path = require('path')
var Person = require('../models/person.model')
var Contact = require('../models/contact.model')
var newGlobalPerson = null;
var mongoose = require('mongoose');

module.exports = {

  getAll: function(req, res, next) {
    console.log("People called of null error");


    Person.find().populate('currentOrganizations')
      //leave this out for now: .populate('contacts')
      .exec(function(err, people) {
        if (err) return res.status(500).json(err);

        res.status(200).json(people);
      });
  },
  showCreatePersonForm: function(req, res, next) {
    res.render('new');
    console.log('hit show form')
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
    Person.findOne({
        _id: req.params.id
      }).populate('currentOrganizations')
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
    Person.findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(function(person) {
        if (!person) return res.status(404).json();

        return Contact.find({
          forPerson: mongoose.Types.ObjectId(req.params.id)
        })
      })
      .then((contacts) => {
        if (!contacts) contacts = [];
        console.log(contacts)
        // Remove contact if they aren't at the person's currentOrganization (when someone changes jobs?)
        contacts.forEach(contactObj => {
          var found = req.body.currentOrganizations.find(currentOrg => {
            return currentOrg == contactObj.atOrganization.toString()
          });
          if (!found) {
            contactObj.endDate = new Date();
            contactObj.save();
          }
        });

        //Adding new 
        req.body.currentOrganizations.forEach(currentOrg => {
          var found = contacts.find(contactObj => {
            return contactObj.atOrganization.toString() ==
              currentOrg;
          });
          if (!found) {
            var newContact = {
              forPerson: req.params.id,
              atOrganization: currentOrg,
              startDate: new Date()
            }
            Contact.create(newContact);
          }
        })
        res.sendStatus(200);
      }).catch(e => {
        if (e) return res.status(400).json(e);
      })
  },
  deleteOne: function(req, res, next) {
    Person.findOneAndRemove({
      _id: req.params.id
    }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },
  addPerson: function(req, res, next) {
    Person.findOne({
      _id: req.params.id
    }, function(err, person) {
      if (err) return res.status(400).json(err);
      if (!person) return res.status(404).json();

      Contact.findOne({
        _id: req.body.id
      }, function(err, contact) {
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
  createFromOrganization: function(req, res, next) {
    Organization.findById(req.body.organization).exec(function(err,
      organization) {
      if (err) {
        return res.status(300)
      };
      // function()
      var personInfo = newPerson
      var personRecord = new Person({
        called: personInfo.called,
        givenName: personInfo.givenName,
        surName: personInfo.surName,
        birthDate: personInfo.birthDate,
        currentOrganization: organization
      });
      personRecord.save()
      organization.People.push(personRecord)
      organization.save()
    })
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
