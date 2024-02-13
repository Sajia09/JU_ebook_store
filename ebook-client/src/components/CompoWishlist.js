import React from 'react';

function Wishlist({ books }) {
    return (
        <div>
            <h2>Wishlist</h2>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;
