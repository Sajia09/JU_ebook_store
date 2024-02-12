const mongoose = require('mongoose');

/**
 * @typedef Wishlist
 * @property {string} userId - The user id who owns the wishlist
 * @property {Array.<string>} books - Array of book ids added to the wishlist
 */

const WishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

const Wishlist = mongoose.model('Wishlist', WishlistSchema);

module.exports = Wishlist;
