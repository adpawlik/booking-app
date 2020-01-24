const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flatSchema = new Schema({
  title: { type: String, required: true, max: [140, 'Too long, max is 140 characters'] },
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, lowercase: true },
  category: { type: String, required: true, lowercase: true },
  images: { type: String, required: true },
  description: { type: String, required: true },
  guests: Number,
  beds: Number,
  bedrooms: Number,
  bathrooms: Number,
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Flat', flatSchema);