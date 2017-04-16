//controller sytnax from Express.js Blueprints by packt publishing

var path = require('path')
var Organization = require('../models/organization.model')


module.exports = {
  getAll: function (req, res, next) {
    Organization.find(function (err, people) {
      if (err) return res.status(400).json(err);

      res.status(200).json(people);
    });
  },
  createOne: function (req, res, next) {
    Organization.create(req.body, function (err, person) {
      if (err) return res.status(400).json(err);

      res.status(201).json(person);
    });
  },
  getOne: function (req, res, next) {
    Organization.findOne({ id: req.params.id })
      .populate('contacts')
      .exec(function (err, person) {
        if (err) return res.status(500).json({
          message: 'Error getting the person'
        });
        if (!person) return res.status(404).json({
          message: 'No such person in the database'
        });

        res.status(200).json(person);
      });
  },
  updateOne: function (req, res, next) {
    Organization.findOneAndUpdate({ id: req.params.id }, req.body, function (err, person) {
      if (err) return res.status(400).json(err);
      if (!person) return res.status(404).json();

      res.status(200).json(person);
    });
  },
  deleteOne: function (req, res, next) {
    Organization.findOneAndRemove({ id: req.params.id }, function (err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  }
}
