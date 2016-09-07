//User routes
var express = require('express');
var router = express.Router();
var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/users/register', userRoutes.showRegistrationForm);
app.post('/users/register', userRoutes.createUser);

app.get('/users/login', userRoutes.showLoginForm);
app.post('/users/login', userRoutes.createSession);

app.get('/users/:id', function(req, res, next) {
  if (!req.user || (req.user.id != req.params.id)) {
    return next('Not found');
  }
  res.render('users/profile', { user: req.user.toJSON() });
});

module.exports = router;
