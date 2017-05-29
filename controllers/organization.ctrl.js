//controller sytnax from Express.js Blueprints by packt publishing

var path = require('path')
var Organization = require('../models/organization.model')
var Contact = require('../models/contact.model')

module.exports = {
  getAll: function (req, res, next) {
    Organization.find(function (err, organization) {
      if (err) return res.status(400).json(err);

      res.status(200).json(organization);
    });
  },
  createOne: function (req, res, next) {
    console.log(req.body)
    Organization.create(req.body, function (err, organization) {
      if (err) return res.status(400).json(err);

      res.status(201).json(organization);
    });
  },
  getOne: function (req, res, next) {
    let org;
    Organization.findById(req.params.organization)
      .populate('contacts')
      .then(organization=>{
        org=organization;
        return Contact.find({atOrganization: organization._id.toString()}).populate("forPerson");
      })
      .then(contacts=>{
        if (!org) return res.status(404).json({
          message: 'No such organization in the database'
        });
        res.status(200).json({organization: org, contacts: contacts});
      })
      .catch(err=>{
        console.log(err);
         if (err) return res.status(500).json({
          message: 'Error getting the organization'
        });
      });
  },
  find: function (req, res, next) {
    let query={};
    if(req.query.name) {
        query.longName= { $regex: `.*${req.query.name}.*`};
    }
    console.log(query);
    Organization.find(query,function (err, organization) {
      if (err) return res.status(400).json(err);

      res.status(200).json(organization);
    });
  },
  updateOne: function (req, res, next) {
    Organization.findOneAndUpdate({ _id: req.params.organization }, req.body, function (err, organization) {
      if (err) return res.status(400).json(err);
      if (!organization) return res.status(404).json();

      res.status(200).json(organization);
    });
  },
  deleteOne: function (req, res, next) {
    Organization.findOneAndRemove({ _id: req.params.organization }, function (err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  }
}
