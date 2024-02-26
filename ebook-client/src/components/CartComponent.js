// src/components/CartComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const CartComponent = () => {
  const [book, setBook] = useState({ title: '', author: '', price: 0 });

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:3000/cart/add', { book });
      console.log('Book added to cart:', response.data);
    } catch (error) {
      console.error('Error adding book to cart:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Add Book to Cart</h2>
      <label>
        Title:
        <input type="text" name="title" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" name="author" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CartComponent;
