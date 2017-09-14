//Schema for login
var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
  username: {type: String, trim: true, required: true},
  password: {type: String, trim: true, required: true}
});
var loginModel =  mongoose.model('loginModel', loginSchema);

module.exports = loginModel;