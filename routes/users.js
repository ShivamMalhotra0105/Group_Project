// File Name : User.js
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Routes File 


var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/',  function(req, res, next) {
 
  res.send('respond with a resource');
});

module.exports = router;