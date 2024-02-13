// Review.js file (Review component)
import React from 'react';

/**
 * Component for displaying a review.
 * @component
 * @param {object} props - React props
 * @param {string} props.user - The user who provided the review
 * @param {number} props.rating - The rating given in the review
 * @param {string} props.content - The content of the review
 * @returns {JSX.Element} - React component
 */
const Review = ({ user, rating, content }) => {
  return (
    <div>
      <h4>{user}'s Review</h4>
      <p>Rating: {rating}</p>
      <p>{content}</p>
    </div>
  );
};

export default Review;
