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

/**
 * @route POST /api/wishlist/add/:userId/:bookId
 * @returns {object} - Updated wishlist
 * @group Wishlist
 */
router.post('/add/:userId/:bookId', async (req, res) => {
  const { userId, bookId } = req.params;
  const updatedWishlist = await wishlistController.addToWishlist(userId, bookId);
  res.json(updatedWishlist);
});
/**
 * @route POST /api/wishlist/remove/:userId/:bookId
 * @returns {object} - Updated wishlist
 * @group Wishlist
 */
router.post('/remove/:userId/:bookId', async (req, res) => {
    const { userId, bookId } = req.params;
    const updatedWishlist = await wishlistController.removeFromWishlist(userId, bookId);
    res.json(updatedWishlist);
  });
  
  module.exports = router;