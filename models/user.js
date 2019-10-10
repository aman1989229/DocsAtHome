const mongoose = require('mongoose');

var Schema= mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  }
});


const User = module.exports = mongoose.model('user', UserSchema);