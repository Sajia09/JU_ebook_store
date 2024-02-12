import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/books?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
