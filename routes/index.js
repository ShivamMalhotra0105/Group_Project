var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Usurvey' });
});

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
