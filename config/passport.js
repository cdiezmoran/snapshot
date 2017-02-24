// passport.js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('mongoose').model('User');
var accounts = require("./accounts");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, done);
});

function authFail(done) {
  done(null, false, { message: 'incorrect email/password combination' });
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    console.log("Login",email, password);
    User.findOne({
      email: email
    }, function(err, user) {
      if (err) return done(err);
      if (!user) {
        return authFail(done);
      }
      if (!user.validPassword(password)) {
        return authFail(done);
      }
      return done(null, user);
    });
}));

function tryRegisteringWith(authProvider, profile, cb, error) {
  var search = {};
  search[authProvider] = profile.id;
  User.findOne(search, function(err, existingUser) {
    if (existingUser) return cb(existingUser, null);
    User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
      if (existingEmailUser) return error('There is already an account using this email address');
      var user = new User();
      console.log(profile._json.email);
      user.email = profile._json.email;
      user[authProvider] = profile.id;
      cb(null, user);
    });
  });
}

passport.exposeUser = function() {
  return function(req, res, next) {
    res.locals.user = req.user;
    next();
  };
};

passport.use(new TwitterStrategy({
    consumerKey: accounts.twitter.consumerKey,
    consumerSecret: accounts.twitter.consumerSecret,
    callbackURL: accounts.twitter.callbackURL
  },
  function(token, tokenSecret, profile, cb) {
    User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));



passport.use(new GoogleStrategy({
    clientID: accounts.google.clientID,
    clientSecret: accounts.google.clientSecret,
    callbackURL: accounts.google.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new GitHubStrategy({
    clientID: accounts.github.clientID,
    clientSecret: accounts.github.clientSecret,
    callbackURL: accounts.github.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


module.exports = passport;
