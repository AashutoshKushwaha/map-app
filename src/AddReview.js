import React, { useState } from 'react';
import axios from 'axios';

const AddReview = () => {
  const [locationId, setLocationId] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:5000/api/reviews',
        { locationId, review },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Review added successfully');
      setLocationId('');
      setReview('');
    } catch (error) {
      console.error('Error adding review:', error);
      alert('Please log in to add a review');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
        placeholder="Location ID"
      />
      <input
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Your Review"
      />
      <button type="submit">Add Review</button>
    </form>
  );
};

export default AddReview;