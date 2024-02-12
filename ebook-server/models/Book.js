const mongoose = require('mongoose');

/**
 * Represents a book.
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {string} genre - The genre of the book.
 */

/**
 * Mongoose schema for a book.
 * @type {import('mongoose').Schema}
 */
const bookSchema = new mongoose.Schema({
  /**
   * The title of the book.
   * @type {string}
   */
  title: String,
  /**
   * The author of the book.
   * @type {string}
   */
  author: String,
  /**
   * The genre of the book.
   * @type {string}
   */
  genre: String,
  // Add more fields as needed
});

/**
 * Mongoose model for a book.
 * @type {import('mongoose').Model<Book>}
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
