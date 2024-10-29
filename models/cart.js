const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [{
        medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine', required: true },
        quantity: { type: Number, required: true, default: 1 }
    }],
    totalQuantity: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cart', cartSchema);
