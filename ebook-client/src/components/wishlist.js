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
