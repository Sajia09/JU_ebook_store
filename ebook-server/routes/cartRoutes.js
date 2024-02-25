// src/routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/**
 * @route POST /cart/add
 * @group Cart - Operations for cart
 * @param {Book.model} book.body.required - The book to add to the cart
 * @returns {object} 200 - The added book
 * @returns {Error}  400 - Bad Request
 */
router.post('/add', cartController.addToCart);

module.exports = router;
