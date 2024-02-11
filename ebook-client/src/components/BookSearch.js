import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component for searching books.
 * @component
 */
function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  /**
   * Handles the book search.
   * @param {string} term - The search term entered by the user.
   * @returns {void}
   */
  const handleSearch = async (term) => {
    try {
      const response = await axios.get(`/api/books?search=${term}`);
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
      <button onClick={() => handleSearch(searchTerm)}>Search</button>
      <ul>
        {searchResults.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
