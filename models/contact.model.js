var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  forPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person'
    },
  atOrganization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization'
    },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  title: {
    type: String
  },
  roleDescription: {
    type: String
  },
  atLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  directLine: {
    type: String
  },
  officeLine: {
    type: String
  }
});
module.exports = mongoose.model('Contact', ContactSchema);
