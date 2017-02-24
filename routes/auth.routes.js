
//User routes
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', {failureRedirect: '/login'}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {scope: ['profile']}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', {failureRedirect: '/login'}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;
