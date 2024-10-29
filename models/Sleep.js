const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Sleep Schema
const sleepSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    sleepHours: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Default to the current date
    }
});

// Create Sleep model
const Sleep = mongoose.model('Sleep', sleepSchema);

module.exports = Sleep;
