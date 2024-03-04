import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import mongoose from 'mongoose';


const BurgerRating = () => {
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    price: 0,
    ambiance: 0,
    service: 0,
    accessibility: 0,
  });

  const [averageRating, setAverageRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [restaurantId, setRestaurantId] = useState('');

  const handleStarClick = (category, stars) => {
    if (!submitted) {
      setRatings(prevRatings => ({ ...prevRatings, [category]: stars }));
    }
  };

  const handleSubmit = async () => {
    setSubmitted(true);

    try {
      if (mongoose.Types.ObjectId.isValid(restaurantId)) {
        await axios.post('http://localhost:5173/submit-rating', { ...ratings, restaurantId });
      } else {
        console.error('Ungültige restaurantId');
      }
    } catch (error) {
      console.error('Fehler beim Übermitteln der Bewertung:', error.message);
    }
  };

  useEffect(() => {
    if (submitted) {
      const totalStars = Object.values(ratings).reduce((total, rating) => total + rating, 0);
      const totalCategories = Object.keys(ratings).length;
      const newAverageRating = totalStars > 0 ? totalStars / totalCategories : 0;
      setAverageRating(newAverageRating);
    }
  }, [submitted, ratings]);

  return (
    <div className="max-w-screen-md mx-auto mt-8 p-4 bg-black rounded-md shadow">
      <h2 className="text-2xl font-bold text-cbb26a mb-4">Burger Rating</h2>

      <div className="mb-4">
        <p className="text-lg font-semibold text-cbb26a mb-2">Name of the Restaurant:</p>
        <input
          type="text"
          value={restaurantId}
          onChange={(e) => setRestaurantId(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>

      {Object.keys(ratings).map((category) => (
        <div key={category} className="mb-4">
          <p className="text-lg font-semibold text-cbb26a mb-2">
            {category.charAt(0).toUpperCase() + category.slice(1)}: {ratings[category]} stars
          </p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              role="button"
              onClick={() => handleStarClick(category, star)}
              className={`text-yellow-500 cursor-pointer ${star <= ratings[category] && 'opacity-100'} ${star > ratings[category] && 'opacity-50'}`}
            >
              ⭐
            </span>
          ))}
        </div>
      ))}

      {submitted && (
        <div>
          <p className="text-lg font-semibold text-cbb26a">Average Rating: {averageRating.toFixed(2)} stars</p>
        </div>
      )}

      {!submitted && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}

      {submitted && (
        <p className="text-cbb26a mt-2">Thank you for your rating!</p>
      )}
    </div>
  );
};

export default BurgerRating;