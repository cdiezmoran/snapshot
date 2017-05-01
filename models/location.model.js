var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Sample code from Complete NodeJS course on Udemy:
const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

*/

var LocationSchema = new Schema({
  areaName: {
    type: String
  },
  googleMapsApiUrl: {
    type: String
  },
  googleMapsApiPlaceId: {
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
  streetAddressNumber: {
    type: String
  },
  streetName: {
    type:String
  }
  cityName: {
    type: String
  },
  stateName: {
    type: String
  },
  stateCode: {
    type: String
  },
  postCode: {
    type: String
  },
  postCodeSuffix: {
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
