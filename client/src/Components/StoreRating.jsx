import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BurgerRating = () => {
  const { storeId } = useParams();

  const [store, setStore] = useState({});
  const [comment, setComment] = useState('');
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
      const response = await axios.post(
        `http://localhost:5000/reviews/${storeId}`,
        {
          comment,
          cleanliness: ratings.cleanliness,
          taste: ratings.taste,
          service: ratings.service,
          priceValue: ratings.priceValue,
          ambience: ratings.ambience,
          waitTime: ratings.waitTime,
          locationRating: ratings.locationRating,
        },
        {
          withCredentials: true,
        }
      );
      // console.log('Review submitted:', response.data);
    } catch (error) {
      console.error('Error submitting the review:', error);
    }
  };

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/stores/${storeId}`
        );
        // console.log(response);
        setStore(response.data.data.store);
      } catch (error) {
        console.error('Error loading store data:', error);
      }
    };

    fetchStore();
  }, [storeId]);

  useEffect(() => {
    const totalStars = Object.values(ratings).reduce(
      (total, rating) => total + rating,
      0
    );
    const totalCategories = Object.keys(ratings).length;
    const newAverageRating = totalStars / totalCategories;
    setAverageRating(newAverageRating);
  }, [ratings]); 

  if (!store) {
    return <p>Lade Store-Daten...</p>;
  }

  return (
    <div className='max-w-screen-md mx-auto mt-8 p-4 bg-black rounded-md shadow'>
      <h2 className='text-2xl font-bold text-cbb26a mb-4'>
        Burger Rating for {store.name}
      </h2>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Your comment here'
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
      />
      {Object.keys(ratings).map((category) => (
        <div key={category} className='mb-4'>
          <p className='text-lg font-semibold text-cbb26a mb-2'>
            {category.charAt(0).toUpperCase() + category.slice(1)}:{' '}
            {ratings[category]} stars
          </p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              role='button'
              onClick={() => handleStarClick(category, star)}
              className={`text-yellow-500 cursor-pointer ${
                star <= ratings[category] ? 'opacity-100' : 'opacity-50'
              }`}
            >
              ⭐
            </span>
          ))}
        </div>
      ))}
      {submitted && (
        <div>
          <p className='text-lg font-semibold text-cbb26a'>
            Average Rating: {averageRating.toFixed(2)} stars
          </p>
        </div>
      )}
      {!submitted && (
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer mt-4'
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      {submitted && (
        <p className='text-cbb26a mt-2'>Thank you for your rating!</p>
      )}
    </div>
  );
};

export default BurgerRating;