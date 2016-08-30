var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  areaName: {
    type: String
  },
  gps: {
    type: String
  },
  locationName: {
    type: String
  },
  buildingName: {
    type: String
  },
  streetAddress: {
    type: String
  },
  cityName: {
    type: String
  },
  postCode: {
    type: String
  },
  countryName: {
    type: String
  },
  officeLine: {
    type: String
  },
});

module.exports = mongoose.model('Location', LocationSchema);
