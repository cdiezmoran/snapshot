// server.js
var mongoose = require('mongoose');
var User = require('../models/user.model');
var passport = require('./passport');

var uri = 'mongodb://localhost/snapshotTest';
var db = mongoose.connect(uri, function(err) {
 if (err) throw err;
});
…
app.use(require('cookie-parser')('my secret string'));
app.use(require('express-session')({ secret: "my other secret string" }));
app.use(require('body-parser')());
app.use(passport.initialize());
app.use(passport.session());
