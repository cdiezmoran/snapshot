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
  gender: {
    type: String
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

PersonSchema.virtual('fullName').get(function() {
    return this.called + ' '  + this.surName;
}).set(function(fullName) {
    var parts = fullName.split(' ');
    this.called = parts[0];
    this.surName = parts[1];
});

module.exports = mongoose.model('Person', PersonSchema);
