const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); // Import passport-local-mongoose

const doctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // Unique email for each doctor
  specialization: { type: String, required: true },
  availableSlots: [Date], // Array of available appointment slots
  image: { type: String } // Field to store image URL
});

// Add passport-local-mongoose to handle password hashing and authentication
doctorSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Doctor', doctorSchema);
