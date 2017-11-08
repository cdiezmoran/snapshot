var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Locations serve as the place where interactions occur, as well as 
the address of the contact. Organizations can have many locations, representing 
the fact that many organizations have multiple offices beyond a headquarters.  
*/

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
  called: {
    type: String
  },
  /*
  "formattedAddress": "R. Santa Catarina, 123 - Centro, Belo Horizonte - MG, 30170-080, Brazil",
  "latitude": -19.921538200000000529,
  "longitude": -43.943432100000002549,
  "administrativeLevels": { "level2long": "Belo Horizonte", "level1long": "Minas Gerais"}
  */

  // TODO: consider place id instead of all details. (alternatively, cache both?)
  address: {
    type: Object
  },
  latLng: {
    type: [Number],
    index: '2dsphere'
  },
  // Office phone number.
  officeLine: {
    type: String
  },
});

module.exports = mongoose.model('Location', LocationSchema);
