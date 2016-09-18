var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarketCategorySchema = new Schema({
  // handles are the official syntax published in internal documentation
  // uses lowercase acronmym with @ symbol
  handle: {
    type: String
  },
  //the longer name of the market category
  completeName: {
    type: String
  },
  //the commonly used acronym, such as TTMR for Trailing Twelve Month's Revenue
  acronym: {
    type: String
  },
  //possible user inputs that should save to this DataPoint
  inputVariations: {
    type: String
  },
  //relates it to the many DataPoints that will be included for this MarketCategory
  suggestedDataPoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DataPoint'
  }],
  includesOrganizations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }],
  //describes the MarketCategory so that others can use it appropriately
  description: {
    type: String
  }
});

module.exports = mongoose.model('MarketCategory', MarketCategorySchema);
