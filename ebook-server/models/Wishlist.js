const { getDb } = require('../utils/database');

/**
 * @typedef Wishlist
 * @property {string} userId - The user id who owns the wishlist
 * @property {Array.<string>} books - Array of book ids added to the wishlist
 */

/**
 * Retrieves the wishlist collection from the database.
 * @returns {Promise<Collection>} - Wishlist collection
 */
const getWishlistCollection = async () => {
  const db = await getDb();
  return db.collection('wishlist');
};

module.exports = {
  /**
   * Get wishlist of a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - Array of book ids in the wishlist
   */
  async getWishlist(userId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOne({ userId });
  },

  /**
   * Add a book to the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async addToWishlist(userId, bookId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOneAndUpdate(
      { userId },
      { $addToSet: { books: bookId } },
      { returnOriginal: false, upsert: true }
    );
  },

  /**
   * Remove a book from the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async removeFromWishlist(userId, bookId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOneAndUpdate(
      { userId },
      { $pull: { books: bookId } },
      { returnOriginal: false }
    );
  }
};backend/models/Wishlist.js


const { getDb } = require('../utils/database');

/**
 * @typedef Wishlist
 * @property {string} userId - The user id who owns the wishlist
 * @property {Array.<string>} books - Array of book ids added to the wishlist
 */

const getWishlistCollection = async () => {
  const db = await getDb();
  return db.collection('wishlist');
};

module.exports = {
  /**
   * Get wishlist of a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - Array of book ids in the wishlist
   */
  async getWishlist(userId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOne({ userId });
  },

  /**
   * Add a book to the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async addToWishlist(userId, bookId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOneAndUpdate(
      { userId },
      { $addToSet: { books: bookId } },
      { returnOriginal: false, upsert: true }
    );
  },

  /**
   * Remove a book from the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async removeFromWishlist(userId, bookId) {
    const wishlistCollection = await getWishlistCollection();
    return wishlistCollection.findOneAndUpdate(
      { userId },
      { $pull: { books: bookId } },
      { returnOriginal: false }
    );
  }
};


backend/controllers/wishlistController.js:
javascript


const Wishlist = require('../models/Wishlist');

/**
 * Controller for managing wishlist operations
 */
class WishlistController {
  /**
   * Get wishlist of a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - Array of book ids in the wishlist
   */
  async getWishlist(userId) {
    return await Wishlist.getWishlist(userId);
  }

  /**
   * Add a book to the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async addToWishlist(userId, bookId) {
    return await Wishlist.addToWishlist(userId, bookId);
  }

  /**
   * Remove a book from the user's wishlist
   * @param {string} userId - User ID
   * @param {string} bookId - Book ID
   * @returns {Promise<Wishlist>} - Updated wishlist
   */
  async removeFromWishlist(userId, bookId) {
    return await Wishlist.removeFromWishlist(userId, bookId);
  }
}

module.exports = WishlistController;


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
frontend/components/Wishlist.js: (Same as before)
javascript
Copy code
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * @component Wishlist
 * @description Component for displaying user's wishlist
 */
const Wishlist = ({ userId }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(`/api/wishlist/${userId}`);
      setWishlist(response.data.books);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map(bookId => (
          <li key={bookId}>{bookId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;