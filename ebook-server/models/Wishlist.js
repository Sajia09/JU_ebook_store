
const { getDb } = require('../utils/database');

/**
 * @typedef Wishlist
 * @property {string} userId - The user id who owns the wishlist
 * @property {Array.<string>} books - Array of book ids added to the wishlist
 */

/**
 * Retrieves the wishlist collection from the database.
 * @returns {Promise<Collection>} - Wishlist collection
 */
const getWishlistCollection = async () => {
  const db = await getDb();
  return db.collection('wishlist');
};

module.exports = {
  /**
   * Get wishlist of a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - Array of book ids in the wishlist
   */
  async getWishlist(userId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOne({ userId });
  },

  /**
   * Add a book to the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async addToWishlist(userId, bookId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOneAndUpdate(
      { userId },
      { $addToSet: { books: bookId } },
      { returnOriginal: false, upsert: true }
    );
  },

  /**
   * Remove a book from the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async removeFromWishlist(userId, bookId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOneAndUpdate(
      { userId },
      { $pull: { books: bookId } },
      { returnOriginal: false }
    );
  }
};