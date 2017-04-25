// Person routes

var express = require('express');
var router = express.Router();
var passport = require('passport');
var organizationCtrl = require('../controllers/organization.ctrl');


router.get('/getAll', organizationCtrl.getAll);
router.post('/new', organizationCtrl.createOne);
router.get('/:organization',organizationCtrl.getOne);
router.put('/:organization',organizationCtrl.updateOne);
router.delete('/:id',organizationCtrl.deleteOne);


module.exports = router;
