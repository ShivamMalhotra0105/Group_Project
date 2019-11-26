const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');



router.get('/login', (req, res, next) => {
  res.render('auth/login', { error: req.flash('error') });
});

router.get('/register', (req, res, next) => {
  res.render('auth/register', {});
});


router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/',
    failureFlash: 'Error with your username and password',
  })
);


router.post('/register', (req, res, next) => {
  
  User.register(
    new User({ username: req.body.username }),
    req.body.password,req.body.email,req.body.name,
    function(err, account) {
      if (err) {
        
        console.log(err);
        return res.render('auth/register', { account: account });
      }

    
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

module.exports = router;