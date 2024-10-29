const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodNeedSchema = new Schema({
    patientName: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true
    },
    requiredDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    doctor: { // Reference to the doctor who posted the blood need
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }
});

module.exports = mongoose.model('BloodNeed', bloodNeedSchema);
