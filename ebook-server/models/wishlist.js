const mongoose = require('mongoose');

/**
 * Mongoose schema for Wishlist.
 * @module Models/Wishlist
 */

const wishlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
