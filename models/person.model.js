var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  called: {
    type: String
  },
  givenName: {
    type: String
  },
  surName: {
    type: String
  },
  fullName: {
    type: String,
    index: true
  },
  birthDate: {
    type: Date
  },
  currentOrganization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  currentContact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  },
  hasUserAccount: {
    type: Boolean
  },
  isTeamMember: {
    type: Boolean
  }
});

module.exports = mongoose.model('Person', PersonSchema);
