/**
 * Mongoose schema for Payment.
 * @module Models/Payment
 */

const mongoose = require('mongoose');

/**
 * Represents a payment.
 * @class
 */
const paymentSchema = new mongoose.Schema({
    /**
     * The ID of the order associated with the payment.
     * @type {mongoose.Schema.Types.ObjectId}
     * @required
     */
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    /**
     * The status of the payment.
     * @type {String}
     * @enum {['pending', 'completed', 'failed']}
     * @default 'pending'
     */
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    /**
     * The amount of the payment.
     * @type {Number}
     * @required
     */
    amount: {
        type: Number,
        required: true
    },
    /**
     * The date of the payment.
     * @type {Date}
     * @default Date.now
     */
    paymentDate: {
        type: Date,
        default: Date.now
    }
    // You can add more fields as per your requirement
});

/**
 * Represents a payment model.
 * @type {mongoose.Model}
 */
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;