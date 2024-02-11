const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  // Add more fields as needed
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
