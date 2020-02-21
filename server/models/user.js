const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    minlength: [5, 'Too short, min is 5 characters'],
    maxlength: [40, 'Too long, max is 40 characters'],
    required: 'Email is required'
  },
  email: {
    type: String,
    minlength: [5, 'Too short, min is 5 characters'],
    maxlength: [40, 'Too long, max is 40 characters'],
    unique: true,
    lowercase: true,
    required: 'Email is required',
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
  },
  password: {
    type: String,
    minlength: [8, 'Too short, min is 8 characters'],
    maxlength: [50, 'Too long, max is 50 characters'],
    required: 'Password is required'
  },
  flats: [{ type: Schema.Types.ObjectId, ref: 'Flat' }],
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
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