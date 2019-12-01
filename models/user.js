// File Name : Question.js
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Mongoose Schema File For Registration 



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const findorcreate = require('mongoose-findorcreate');

// User Schema
const userSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});



userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findorcreate);


const user = mongoose.model('User', userSchema);



 module.exports = user;