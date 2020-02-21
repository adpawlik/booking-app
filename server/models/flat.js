const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flatSchema = new Schema({
  title: { type: String, required: true, maxlength: [140, 'Too long, max is 140 characters'] },
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, lowercase: true },
  category: { type: String, required: true, lowercase: true },
  images: { type: String, required: true },
  description: { type: String, required: true },
  guests: { type: Number, required: true },
  beds: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  dailyRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

module.exports = mongoose.model('Flat', flatSchema);