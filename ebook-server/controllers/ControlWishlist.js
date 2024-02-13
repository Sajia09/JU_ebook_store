const Wishlist = require("../models/Wishlist");

/**
 * Controller for managing wishlist functionality.
 * @module Controllers/Wishlist
 */

/**
 * Get all books in the wishlist.
 * @function
 * @name getAllBooks
 * @returns {Promise<Array>} Array of book objects.
 */
async function getAllBooks() {
    return await Wishlist.find();
}

/**
 * Add a book to the wishlist.
 * @function
 * @name addToWishlist
 * @param {Object} book - Book object to be added to the wishlist.
 * @returns {Promise<Object>} The added book object.
 */
async function addToWishlist(book) {
    return await Wishlist.create(book);
}

module.exports = {
    getAllBooks,
    addToWishlist
};
