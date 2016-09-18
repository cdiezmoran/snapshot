var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
  called: {
    type: String
  },
  longName: {
    type: String
  },
  url: {
    type: String
  },
  emailSuffix: {
    type: String
  },
  description: {
    type: String
  },
  parentOrganization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  childOrganizations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }],
  Locations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }],
  People: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }],
  inMarketCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MarketCategory'
  }],
});

module.exports = mongoose.model('Organization', OrganizationSchema);
