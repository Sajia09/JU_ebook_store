const express = require('express');
const router = express.Router();
const WishlistController = require('../controllers/WishlistController');

/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Wishlist management
 */

/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Get all books from the wishlist
 *     tags: [Wishlist]
 *     responses:
 *       200:
 *         description: A list of books in the wishlist
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 */
router.get('/', async (req, res) => {
    try {
        const books = await WishlistController.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /wishlist:
 *   post:
 *     summary: Add a book to the wishlist
 *     tags: [Wishlist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The created book object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request, invalid input
 */
router.post('/', async (req, res) => {
    try {
        const book = await WishlistController.addToWishlist(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
