const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    min: [5, 'Too short, min is 5 characters'],
    max: [40, 'Too long, max is 40 characters']
  },
  email: {
    type: String,
    min: [5, 'Too short, min is 5 characters'],
    max: [40, 'Too long, max is 40 characters'],
    unique: true,
    lowercase: true,
    required: 'Email is required',
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
  },
  password: {
    type: String,
    min: [8, 'Too short, min is 8 characters'],
    max: [50, 'Too long, max is 50 characters'],
    required: 'Password is required'
  }
});

userSchema.methods.isCorrectPassword = function(reqPassword) {

  return bcrypt.compareSync(reqPassword, this.password);
}

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(11, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);