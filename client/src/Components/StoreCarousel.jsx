import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StoreCarousel = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stores');
        setStores(response.data.data); // Zugriff auf die 'data'-Eigenschaft des Objekts
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading stores.</p>;
  }

  if (!Array.isArray(stores)) {
    console.error('Stores is not an array:', stores);
    return <p className="text-center text-red-500">Error loading stores data.</p>;
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Featured Stores</h2>
      <Slider {...settings} className="mx-auto max-w-screen-lg">
        {stores.map((store) => (
          <div key={store._id} className="px-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
              <p className="text-gray-600 mb-2">{store.phonenumbers}</p>
              <p className="text-blue-500 mb-2">{store.website}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StoreCarousel;