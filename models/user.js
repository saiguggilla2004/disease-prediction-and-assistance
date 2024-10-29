const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    age: Number,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    height: Number,
    weight: Number,
    image: String,  // Field for storing profile image URL
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    
    address: String,
    reminders: [{ // Link to reminders
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reminder'
    }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
