var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/snapshotTest';

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true,
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

  // mongoose.set('debug', true);
  console.log("Mongoose connected.");
  return mongoose;
};
