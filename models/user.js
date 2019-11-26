const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findorcreate = require('find-or-create');
const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
const userSchema = new Schema({
  name:{
    type: String,
    required: true
  },
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

 module.exports = user