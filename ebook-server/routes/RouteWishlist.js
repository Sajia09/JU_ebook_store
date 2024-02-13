const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/', async (req, res) => {
    try {
        const books = await wishlistController.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const book = await wishlistController.addToWishlist(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
