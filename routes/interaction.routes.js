var express = require('express');
var router = express.Router();
var passport = require('passport');
var interactionCtrl = require('../controllers/interaction.ctrl');

router.get('/getAll', interactionCtrl.getAll);
router.post('/new', interactionCtrl.createOne);
router.get('/:interaction',interactionCtrl.getOne);
router.put('/:interaction',interactionCtrl.updateOne);
router.delete('/:interaction',interactionCtrl.deleteOne);


module.exports = router;