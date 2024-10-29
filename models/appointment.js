const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  patientEmail: String,
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  appointmentTime: Date,
  roomId: String, 
});

module.exports = mongoose.model('Appointment', appointmentSchema);
