const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  dateFrom: { type: Date, required: 'Starting date is required' },
  dateTo: { type: Date, required: 'Ending  date is required' },
  totalPriece: Number,
  days: Number,
  guests: Number,
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  flat: { type: Schema.Types.ObjectId, ref: 'Flat' }
});

module.exports = mongoose.model('Booking', bookingSchema);