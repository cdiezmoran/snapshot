//this is an example of a controller I found in an article.
//I liked the convention.  I haven't made it work yet.

var path = require('path'),
    Person = require('./models/person.model')

module.exports = {
  index: function(req, res) {

  };
  match: function(req, res) {
    //Below are possible ways of getting a text search to match a record
    //var givenName = req.query.givenName;
    //Person.find(
      //{ $text : { $search : "text to look for" } },
      //{ score : { $meta: "textScore" } }
    //)
    //console.log('Searching for: ' + name);
    //res.send(name);

  };
  save: function(req, res) {

  };
  view: function(req, res) {

  };
  review: function(req, res) {

  };
}
