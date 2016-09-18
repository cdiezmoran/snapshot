var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SnapshotSchema = new Schema({
//need to figure out how to actually save the data that's supposed to be paired
//withDataPoints


  forOrganization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  fromInteraction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interaction'
  },
  //relates it to the many DataPoints that will be included for this Snapshot
  dataPoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DataPoint'
  }],
  //describes the MarketCategory so that others can use it appropriately
  description: {
    type: String
  }
});

module.exports = mongoose.model('MarketCategory', MarketCategorySchema);
