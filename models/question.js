// File Name : Question.js
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Mongoose Schema File For Survey Questions


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const findorcreate = require('mongoose-findorcreate');

// Question Schema 
const questionSchema = new Schema({
    questionOne: {
      type: String,
      default: ''
    },
  
    questionTwo: {
      type: String,
      default: ''
    },
  
    questionThree: {
      type: String,
      default: ''
    },

    questionFour: {
      type: String,
      default: ''
    },

    questionFive: {
      type: String,
      default: ''
    }
  })

  questionSchema.plugin(passportLocalMongoose);
  questionSchema.plugin(findorcreate);


  const question = mongoose.model('Question', questionSchema);

   module.exports = question;