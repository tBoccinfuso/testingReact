//Schema for inserting contact Requests
var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
  firstname: {type: String, trim: true, required: true},
  lastname: {type: String, trim: true,  required: true},
  email: {type: String, trim: true, required: true},
  message: {type: String, trim: true, required: true},
  subject: {type: String, trim: true, required: true}
});
var contactModel =  mongoose.model('contactModel', ContactSchema);

module.exports = contactModel;