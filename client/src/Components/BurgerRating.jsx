import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    address: '',
    zip: '',
    website: '',
    phone: '',
  });

  const handleStarClick = (category, stars) => {
    if (!submitted) {
      const updatedRatings = { ...ratings, [category]: stars };
      setRatings(updatedRatings);
    }
  };

  const handleSubmit = async () => {
    setSubmitted(true);

    try {
      await axios.post('http://localhost:5173/submit-rating', { ...ratings, restaurantId });
} catch (error) {
      console.error('Fehler beim Übermitteln der Bewertung:', error.message);
}
  };

  const handleAddRestaurant = async () => {
    try {
      const response = await axios.post('http://localhost:5173/add-restaurant', newRestaurant);
      setRestaurantId(response.data._id); 
} catch (error) {
      console.error('Fehler beim Hinzufügen des Restaurants:', error.message);
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

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-cbb26a mb-4">Add New Restaurant</h2>

        <div className="mb-4">
          <p className="text-lg font-semibold text-cbb26a mb-2">Name:</p>
          <input
            type="text"
            value={newRestaurant.name}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-cbb26a mb-2">Address:</p>
          <input
            type="text"
            value={newRestaurant.address}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-cbb26a mb-2">ZIP:</p>
          <input
            type="text"
            value={newRestaurant.zip}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, zip: e.target.value })}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-cbb26a mb-2">Website:</p>
          <input
            type="text"
            value={newRestaurant.website}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, website: e.target.value })}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-cbb26a mb-2">Phone:</p>
          <input
            type="text"
            value={newRestaurant.phone}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, phone: e.target.value })}
            className="p-2 border rounded-md"
          />
        </div>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer"
          onClick={handleAddRestaurant}
        >
          Add Restaurant
        </button>
      </div>

      {submitted && (
        <p className="text-cbb26a mt-2">Thank you for your rating!</p>
      )}
    </div>
  );
};

export default BurgerRating;