//User routes
var express = require('express');
var router = express.Router();
var app = express();
var userCtrl = require('../controllers/user.ctrl')
var passport = require('passport');
app.use(passport.initialize());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/users/register', userCtrl.showRegistrationForm);
app.post('/users/register', userCtrl.createUser);

app.get('/users/login', userCtrl.showLoginForm);
app.post('/users/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));



app.get('/users/:id', function(req, res, next) {
  if (!req.user || (req.user.id != req.params.id)) {
    return next('Not found');
  }
  res.render('users/profile', { user: req.user.toJSON() });
});

module.exports = router;
