// models/Reminder.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    reminderTime: {
        type: Date,
        required: true
    },
    isSent: {
        type: Boolean,
        default: false
    }
});

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;
