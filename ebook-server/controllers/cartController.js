// src/controllers/cartController.js
const Book = require('../models/bookModel');

/**
 * Add a book to the cart
 *
 * @route POST /cart/add
 * @param {Book.model} req.body.book - The book to add to the cart
 * @returns {object} 200 - The added book
 * @returns {Error}  400 - Bad Request
 */
const addToCart = async (req, res) => {
  try {
    const { title, author, price } = req.body.book;
    const newBook = new Book({ title, author, price });
    await newBook.save();
    res.status(200).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
};
