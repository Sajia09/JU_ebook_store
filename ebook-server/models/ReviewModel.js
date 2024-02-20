// Review.js file (review model)
const mongoose = require('mongoose');

/**
 * Represents a review for a book.
 * @typedef {Object} Review
 * @property {string} bookId - The ID of the associated book.
 * @property {string} user - The user providing the review.
 * @property {number} rating - The rating given in the review.
 * @property {string} content - The content of the review.
 */

/**
 * Mongoose schema for a review.
 * @type {import('mongoose').Schema}
 */
const reviewSchema = new mongoose.Schema({
  /**
   * The ID of the associated book.
   * @type {string}
   */
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  /**
   * The user providing the review.
   * @type {string}
   */
  user: String,
  /**
   * The rating given in the review.
   * @type {number}
   */
  rating: Number,
  /**
   * The content of the review.
   * @type {string}
   */
  content: String,
  // Add more fields as needed
});
/**
 * Mongoose model for a review.
 * @type {import('mongoose').Model<Review>}
 */
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
