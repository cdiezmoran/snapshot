var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var pug = require('pug');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var app = express();

require('./config/parser')(app);
require('./config/db')(app);

// setting up user sessions
//var expressSession = require('express-session');
//app.use(expressSession({secret: 'mySecretKey'}));



// view engine setup
app.set('view engine', 'pug');
app.set('views', 'views');
app.locals.pretty = true
app.use(express.static(path.join(__dirname, 'public')));
app.locals.basedir = path.join(__dirname, 'views');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());


var routes = require('./routes/index');
var users = require('./routes/user.routes');
var people = require('./routes/person.routes')

app.use('/', routes);
app.use('/users', users);
//app.use('/users', people);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
//need to figure out error handling


module.exports = app;
