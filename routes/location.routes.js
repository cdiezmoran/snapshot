// Person routes

var express = require('express');
var router = express.Router();
var passport = require('passport');
var locationCtrl = require('../controllers/location.ctrl');

router.get('/getAll', locationCtrl.getAll);
router.get('/:id', locationCtrl.getOne)
router.post('/new',locationCtrl.createOne);
router.put('/:id',locationCtrl.updateOne);
router.delete('/:id',locationCtrl.deleteOne);

module.exports = router;
