var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InteractionSchema = new Schema({
  includedPeople: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persons'
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  interactionType: {
    type: String,
    enum: ['Call','Meeting','Ran Into','Meal']
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  interactionData: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InteractionData'
  }]
});

InteractionSchema.virtual('duration').get(function() {
  return this.endTime - this.startTime;
});

var InteractionDataSchema = new Schema({
  note: {type: String}, //free text
  link: {type: String}, //external files
  file: {type: String},  //path to the file in the server
  attachedDate: {
    type: Date
  },
})

let Interaction = mongoose.model('Interaction', InteractionSchema);
let InteractionData = mongoose.model('InteractionData', InteractionDataSchema);

module.exports = {Interaction, InteractionData}
