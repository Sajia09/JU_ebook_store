const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', async (req, res) => {
  const { search } = req.query;
  try {
    const books = await bookController.searchBooks(search);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
