// Review.js file (Review component)

import React from 'react';

/**
 * @typedef {Object} ReviewProps
 * @property {string} user - The user who provided the review.
 * @property {number} rating - The rating given in the review.
 * @property {string} content - The content of the review.
 */

/**
 * Component for displaying a review.
 * @param {ReviewProps} props - React props
 * @returns {JSX.Element} - React component
 */
function Review({ user, rating, content }) {
  /**
   * Render the Review component.
   * @returns {JSX.Element} - React component
   */
  return (
    <div>
      <h4>{user}'s Review</h4>
      <p>Rating: {rating}</p>
      <p>{content}</p>
    </div>
  );
}

export default Review;
