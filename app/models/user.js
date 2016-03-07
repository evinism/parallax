const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  salt: String
});

// --- Auth! ---

userSchema.methods.setPassword = function(plaintext){
  this.salt = crypto.randomBytes(256).toString('hex');
  const hash = crypto.createHash('sha256');
  hash.update(plaintext);
  hash.update(this.salt);
  this.password = hash.digest('hex');
  return this.password;
}

userSchema.methods.checkPassword = function(plaintext){
  const hash = crypto.createHash('sha256');
  hash.update(plaintext);
  hash.update(this.salt);
  var digest = hash.digest('hex');
  return digest===this.password;
}

var User = mongoose.model('User', userSchema);

module.exports = User;
