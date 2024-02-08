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
}
module.exports = WishlistController;