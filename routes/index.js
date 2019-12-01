
var express = require('express');
var router = express.Router();
var Question = require('../models/question')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Usurvey' });
});


router.post('/submit', (req, res) => {
  const newquestion = new Question({
    questionOne: req.body.q1,
    questionTwo: req.body.q2,
    questionThree: req.body.q3
  })

   newquestion.save();

   res.redirect('/')
})

router.get('/about', function(req, res, next) {
  res.render('about', {  });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', {  });
});

router.get('/register', function(req, res, next) {
  res.render('auth/register', { });
});

router.get('/login', function(req, res, next) {
  res.render('auth/login', {  });
});

router.get('/usurvey', function(req, res, next) {
  res.render('usurvey', { });
});


module.exports = router;
