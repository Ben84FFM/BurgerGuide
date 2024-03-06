import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BurgerRating = () => {
  const [restaurant, setRestaurant] = useState(null); // State für das Restaurant-Objekt
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    taste: 0,
    service: 0,
    priceValue: 0,
    ambience: 0,
    waitTime: 0,
    locationRating: 0,
  });

  const [averageRating, setAverageRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (category, stars) => {
    if (!submitted) {
      setRatings((prevRatings) => ({ ...prevRatings, [category]: stars }));
    }
  };

  const handleSubmit = async () => {
    setSubmitted(true);
  
    try {
      if (restaurant && restaurant._id) {
        await axios.post('http://localhost:5173/submit-rating', {
          restaurantId: restaurant._id,
          ratings: { ...ratings },
        });
      } else {
        console.error('Ungültiges oder fehlendes Restaurant-Objekt');
      }
    } catch (error) {
      console.error('Fehler beim Übermitteln der Bewertung:', error.message);
    }
  };

  useEffect(() => {
    if (submitted && restaurant) {
      const totalStars = Object.values(ratings).reduce((total, rating) => total + rating, 0);
      const totalCategories = Object.keys(ratings).length;
      const newAverageRating = totalStars > 0 ? totalStars / totalCategories : 0;
      setAverageRating(newAverageRating);
    }
  }, [submitted, ratings, restaurant]);


  const fetchData = async () => {
    try {
      const response = await axios.get('Ihre_API_Endpoint_Hier'); 
      setRestaurant(response.data);
    } catch (error) {
      console.error('Fehler beim Laden der Restaurantdaten:', error.message);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  if (!restaurant) {
    return <p>Lade Restaurantdaten...</p>;
  }

  return (
    <div className="max-w-screen-md mx-auto mt-8 p-4 bg-black rounded-md shadow">
      <h2 className="text-2xl font-bold text-cbb26a mb-4">Burger Rating für {restaurant.store.name}</h2>

      <div className="mb-4">
        <p className="text-lg font-semibold text-cbb26a mb-2">Name of the Restaurant:</p>
        <input
          type="text"
          value={restaurant._id}
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
              className={`text-yellow-500 cursor-pointer ${star <= ratings[category] ? 'opacity-100' : 'opacity-50'}`}
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