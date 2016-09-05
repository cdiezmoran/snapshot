var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InteractionSchema = new Schema({
  indcludedPeopele: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persons'
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  interactionType: {
    type: String
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
});
module.exports = mongoose.model('Interaction', InteractionSchema);
