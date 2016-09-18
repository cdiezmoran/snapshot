var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataPointSchema = new Schema({
  // handles are the official syntax published in internal documentation
  // uses lowercase acronmym with @ symbol, such as @mrr for monthly recurring revenue
  handle: {
    type: String
  },
  //the industry standard name of the metric, such as Trailing Twelve Month's Revenue
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
  //relates it to the many Categories that will include this DataPoint
  categoryMetricsGroupings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MarketCategory'
  }],
  //describes the metric so that others can use it appropriately
  description: {
    type: String
  }
});

module.exports = mongoose.model('DataPoint', DataPointSchema);
