var express = require('express');
var router = express.Router();
var person = require('../controllers/people.ctrl')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content', { title: 'SnapshotJS' });
});

router.get('/people', function(req, res, next) {
  res.render('people', { people: people.list });
});

//syntax below taken from article
//hackhands.com/mongodb-crud-mvc-way-with-passport-authentication
router.post('/person/create', function(req,res, next) {
  app.route('/person/create').post(person.create);
});

module.exports = router;
