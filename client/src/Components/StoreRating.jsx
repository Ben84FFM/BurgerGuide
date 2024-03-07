import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BurgerRating = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState(null);
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
      if (store && store._id) {
        await axios.post(`http://localhost:5173/reviews`, { 
          storeId: store._id,
          cleanliness: ratings.cleanliness,
          taste: ratings.taste,
          service: ratings.service,
          priceValue: ratings.priceValue,
          ambience: ratings.ambience,
          waitTime: ratings.waitTime,
          locationRating: ratings.locationRating,
        });
      } else {
        console.error('Ungültiges oder fehlendes Store-Objekt');
      }
    } catch (error) {
      console.error('Fehler beim Übermitteln der Bewertung:', error.message);
    }
  };

  useEffect(() => {
    if (submitted && store) {
      const totalStars = Object.values(ratings).reduce((total, rating) => total + rating, 0);
      const totalCategories = Object.keys(ratings).length;
      const newAverageRating = totalStars > 0 ? totalStars / totalCategories : 0;
      setAverageRating(newAverageRating);
    }
  }, [submitted, ratings, store]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5173/restaurants/${storeId}`);
      setStore(response.data);
    } catch (error) {
      console.error('Fehler beim Laden der Store-Daten:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [storeId]);

  if (!store) {
    return <p>Lade Store-Daten...</p>;
  }

  return (
    <div className="max-w-screen-md mx-auto mt-8 p-4 bg-black rounded-md shadow">
      <h2 className="text-2xl font-bold text-cbb26a mb-4">Burger Rating für {store.name}</h2>

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