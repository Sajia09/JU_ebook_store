const express = require('express');
const router = express.Router();
const WishlistController = require('../controllers/wishlistController');

const wishlistController = new WishlistController();

/**
 * @route GET /api/wishlist/:userId
 * @returns {Array} - Array of book ids in the wishlist
 * @group Wishlist - Operations related to wishlist
 */
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const wishlist = await wishlistController.getWishlist(userId);
  res.json(wishlist);
});