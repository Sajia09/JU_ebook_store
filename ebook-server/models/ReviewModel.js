const { getDb } = require('ebookstore');

/**
 * @typedef {Object} Review
 * @property {string} bookId - The ID of the associated book
 * @property {string} user - The user providing the review
 * @property {number} rating - The rating given in the review
 * @property {string} content - The content of the review
 */

/**
 * Get MongoDB collection for reviews
 * @returns {Promise<import('mongodb').Collection<Review>>} - MongoDB collection for reviews
 */
const getReviewCollection = async () => {
  const db = await getDb();
  return db.collection('reviews');
};

module.exports = {
  /**
   * Create a new review in the database
   * @param {string} bookId - The ID of the associated book
   * @param {Review} review - The review object
   * @returns {Promise<Review>} - The created review object
   */
  async createReview(bookId, review) {
    const reviewCollection = await getReviewCollection();
    const result = await reviewCollection.insertOne({ bookId, ...review });
    return result.ops[0];
  },
};