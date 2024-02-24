const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

/**
 * Route for purchasing a book.
 * 
 * @route POST /books/purchase
 * @group Book - Operations related to books
 * @param {string} title.body.required - The title of the book to purchase
 * @param {string} author.body.required - The author of the book to purchase
 * @param {number} price.body.required - The price of the book to purchase
 * @returns {object} 201 - The purchased book
 * @returns {Error} 500 - Internal server error
 */
router.post('/purchase', async (req, res) => {
    const { title, author, price } = req.body;
    try {
        const purchasedBook = await bookController.purchaseBook(title, author, price);
        res.status(201).json(purchasedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
