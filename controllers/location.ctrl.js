//controller sytnax from Express.js Blueprints by packt publishing

var path = require('path')
var Location = require('../models/location.model')
var newGlobalPerson = null;
var mongoose = require('mongoose');
var Organization = require('../models/organization.model')

module.exports = {

  getAll: function(req, res, next) {
    console.log("location called of null error");
    Location.find(function(err, location) {
      if (err) return res.status(400).json(err);

      res.status(200).json(location);
    });
  },
  createOne: function(req, res, next) {
    console.log(req.body)
    Location.create(req.body, function(err, location) {
      if (err) return res.status(400).json(err);
      Organization.findOneAndUpdate({_id: req.body.organization_id}, {
        $push: {locations: location._id}
      }).then (function() {
        res.status(201).json(location);
      })
    });
  },
  getOne: function(req, res, next) {
    Location.findOne({ _id: req.params.id })
    //leave this out for now: .populate('contacts')
    .exec(function(err, location) {
      if (err) return res.status(500).json({
        message: 'Error getting the location'
      });
      if (!location) return res.status(404).json({
        message: 'No such location in the database'
      });

      res.status(200).json(location);
    });
  },
  updateOne: function(req, res, next) {
    Location.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function( location) {
      if (!location) return res.status(404).json();
      res.status(200).json({success: 'OK'});
    }).catch(e=>{
      if (e) return res.status(400).json(e);
    })
  },
  deleteOne: function(req, res, next) {
    Location.findOneAndRemove({ _id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },
  find: function(req, res, next) {
    Location.find({ called: req.params.called })

    .exec(function(err, contacts) {
      if (err) return res.status(400).json(err);
      if (!contacts) return res.status(404).json();
      contacts = contacts.map(c=>{
        return c.toObject();
      });
      res.status(200).json(contacts);
    });
  }
}
