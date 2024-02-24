const mongoose = require('mongoose');

/**
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {number} price - The price of the book.
 */

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;