// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// static sign up method
userSchema.statics.signup = async function (email, password) {

  // validation
  if (!email || !password) {
    throw Error('Email and password are required');
  } 
  
  if (!validator.isEmail(email)) {
    throw Error('Email is invalid');
  } 

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('User already exists');
  } 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hashedPassword });

  return user;
}

// static login method
userSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw Error('Email and password are required');
  } 

  const user = await this.findOne({ email });
  if (!user) {
    throw Error('User do not exist');
  } 

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Password Incorrect");
  }

  return user;
}

module.exports = mongoose.model('User', userSchema);
