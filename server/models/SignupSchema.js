//Schema for inserting new users
var mongoose = require('mongoose');

var SignupSchema = mongoose.Schema({
    username: {type: String, trim: true},
    firstname: {type: String, trim: true},
    lastname: {type: String, trim: true},
    password: {type: String, trim: true},
    email: {type: String, trim: true},
    phone: {type: String, trim: true}
  });
  var signupModel =  mongoose.model('signupModel', SignupSchema);
  module.exports = signupModel; 