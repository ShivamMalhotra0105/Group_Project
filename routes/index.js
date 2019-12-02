// File Name : Index.js
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Routes File 

var express = require('express');
var router = express.Router();
var Question = require('../models/question');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Usurvey' });
});

/* Post response to the database. */
router.post('/submit', (req, res, next) => {
  const newquestion = new Question({
    questionOne: req.body.q1,
    questionTwo: req.body.q2,
    questionThree: req.body.q3,
    questionFour: req.body.q4,
    questionFive: req.body.q5
  })

   newquestion.save();

   res.redirect('/');
});


 
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {  });
});

/* GET privacy page. */
router.get('/privacy', function(req, res, next) {
  res.render('privacy', {  });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('auth/register', { });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('auth/login', {  });
});

/* GET survey page. */
router.get('/usurvey', function(req, res, next) {
  res.render('usurvey', { });
});


module.exports = router;
