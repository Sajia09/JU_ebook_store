const Book = require('../models/Book');

exports.searchBooks = async (searchTerm) => {
  try {
    const regex = new RegExp(searchTerm, 'i');
    return await Book.find({ title: regex });
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};

