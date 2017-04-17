//controller sytnax from Express.js Blueprints by packt publishing

var path = require('path')
var Organization = require('../models/organization.model')


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
    Organization.findOne({ id: req.params.id })
      .populate('contacts')
      .exec(function (err, organization) {
        if (err) return res.status(500).json({
          message: 'Error getting the organization'
        });
        if (!organization) return res.status(404).json({
          message: 'No such organization in the database'
        });

        res.status(200).json(organization);
      });
  },
  updateOne: function (req, res, next) {
    Organization.findOneAndUpdate({ id: req.params.id }, req.body, function (err, organization) {
      if (err) return res.status(400).json(err);
      if (!organization) return res.status(404).json();

      res.status(200).json(organization);
    });
  },
  deleteOne: function (req, res, next) {
    Organization.findOneAndRemove({ id: req.params.id }, function (err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  }
}
