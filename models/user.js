const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,

  profile: {
    name: String,
    gender: String,
    role: String,
    location: String,
    isMod: Boolean,
    isAnon: Boolean,
    picture: String
  }

}, { timestamps: true });


const User = mongoose.model('User', userSchema);

module.exports = User;
