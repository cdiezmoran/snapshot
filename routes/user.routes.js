//User routes
var express = require('express');
var router = express.Router();
var app = express();
var userCtrl = require('../controllers/user.ctrl')
var passport = require('passport');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', userCtrl.listUsers);

router.get('/register', userCtrl.showRegistrationForm);
router.post('/register', userCtrl.createUser);

router.get('/login', userCtrl.showLoginForm);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}));



router.get('/:id', function(req, res, next) {
  if (!req.user || (req.user.id != req.params.id)) {
    return next('Not found');
  }
  res.render('users/profile', { user: req.user.toJSON() });
});

module.exports = router;
