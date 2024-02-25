const mongoose = require('mongoose');

/**
 * Represents an order in the system.
 * @typedef {Object} Order
 * @property {string} orderId - The unique identifier for the order.
 * @property {string} status - The status of the order.
 */

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['pending', 'processed', 'shipped', 'delivered'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
