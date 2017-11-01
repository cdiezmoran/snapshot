var Interaction = require('../models/interaction.model').Interaction;

module.exports = {

    getAll: function(req, res, next) {
        Interaction.find(function(err, interactions) {
          if (err) return res.status(400).json(err);
    
          res.status(200).json(interactions);
        });
      },
    getAllByPerson: function(req, res, next) {
        //need to figure out best way to query interactions through the Person component
        //may need to push created interactions into an interactions array in the Person model
        Interaction.find({includedContacts: req.params.id},function(err, interactions) {
          if (err) return res.status(400).json(err);
          res.status(200).json(interactions);
        });
      },
    getAllByOrganization: function(req, res, next) {
        //need to figure out best way to query interactions through the Organization component
        //may need to push created interactions into an interactions array in the Organization model
        Interaction.find({includedContacts: req.params.id},function(err, interactions) {
          if (err) return res.status(400).json(err);
          res.status(200).json(interactions);
        });
      },
    getOne: function(req, res, next) {
        Interaction.findOne({ _id: req.params.id })
        .populate('interactions')
        .exec(function(err, interaction) {
          if (err) return res.status(400).json(err);
          if (!interaction) return res.status(404).json();
    
          res.status(200).json(interaction);
        });
      },
    createOne: function(req, res, next) {
        Interaction.create(req.body, function(err, interaction) {
          if (err) return res.status(400).json(err);
          res.status(201).json(interaction);
        });
      },
    updateOne: function(req, res, next) {
        Interaction.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, function(err, interaction) {
          if (err) return res.status(400).json(err);
          if (!interaction) return res.status(404).json();
    
          res.status(200).json(interaction);
        });
      },
    deleteOne: function(req, res, next) {
        Interaction.findOneAndRemove({ _id: req.params.id }, function(err) {
          if (err) return res.status(400).json(err);
    
          res.status(204).json();
        });
      },  
};