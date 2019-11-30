const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findorcreate = require('find-or-create');
const passportLocalMongoose = require('passport-local-mongoose');


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
    }
  })

  questionSchema.plugin(passportLocalMongoose);
  questionSchema.plugin(findorcreate);




  const question = mongoose.model('Question', questionSchema);

   module.exports = question;