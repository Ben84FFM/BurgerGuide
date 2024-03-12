import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PolicyBackground from './DynamicBackground';

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
        <PolicyBackground>
      {/* ContainerText */}
      <div className='containerText flex flex-1 ml-6 mr-6 pt-8 pb-4'>
        <p className='container text-cbb26a mx-auto p-4 lg:w-2/3 xl:w-1/2 bg-black opacity-80 rounded-md pt-8 pb-8'>
          <p className='font-bold'>Dear Users,</p>
          <p><br />
            We would like to emphasize the importance of providing a fair review
            for our BurgerStore. Our community and future customers rely on your
            honest opinions to make informed decisions about their visit.
          </p><br /><p>
            Fair reviews not only assist others in selecting the right BurgerStore
            but also help us continuously improve our service and products. Your
            feedback is invaluable and enables us to respond to your needs, creating
            a better shopping experience.
          </p><br /> <p>
            Please take a moment to share your experiences fairly and objectively.
            Include both positive and constructive criticism. Your contribution
            helps build an open and transparent community.
          </p><br />
          <p className='font-bold'>Thank you for your support!</p><br />
          <p className='font-bold'>Your BurgerGuideTeam!</p>
        </p>
      </div>

      {/* ContainerRating */}
      <div className='pt-4 pb-8 ml-4 mr-4 flex items-center justify-center'>
      <div className='p-4 bg-black rounded-md mt-8'>
        <h2 className='text-2xl font-bold text-cbb26a mb-4'>
          Burger Rating for {store.name}
        </h2>
        <input
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Please be fair and respectful in your review.'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 '
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
            className='flex items-center justify-center mx-auto sm:px-4 md:px-6 lg:px-8 text-xl font-bold text-cbb26a bg-black font-bold text-cbb26a text-center imageBorderLogo py-2 px-4 rounded-md transition duration-300 hover:text-white'
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        {submitted && (
          <p className='text-cbb26a mt-2'>Thank you for your rating!</p>
        )}
      </div>
      </div>
    </PolicyBackground>
  );
};

export default BurgerRating;