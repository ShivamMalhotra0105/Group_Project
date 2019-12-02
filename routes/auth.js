// File Name : Auth.js
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Authetication Routing File 


const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

//Get Login Page 
router.get('/login', (req, res, next) => {
  res.render('auth/login', { error: req.flash('error') });
});

// Post Login Page
router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: 'Error with username and password',
    failureRedirect: '/login',
    successRedirect: '/'
  })
);

// Get Registeration Page
router.get('/register', (req, res, next) => {
  res.render('auth/register', {});
});

// Post Registeration Page
router.post('/register', (req, res, next) => {
  
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    req.body.email,
    function(err, account) {
      if (err) {
       
        console.log(err);
        return res.render('register', { account: account });
      }

      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

// Get out from the login session i.e. Logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login');
  });
});

module.exports = router;