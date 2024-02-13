const Wishlist = require('../models/Wishlist');

/**
 * Controller for managing wishlist operations
 */
class WishlistController {
  /**
   * Get wishlist of a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - Array of book ids in the wishlist
   */
  async getWishlist(userId) {
    return await Wishlist.getWishlist(userId);
  }
/**
   * Add a book to the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
async addToWishlist(userId, bookId) {
    return await Wishlist.addToWishlist(userId, bookId);
  }
  /**
   * Remove a book from the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  
}
module.exports = WishlistController;