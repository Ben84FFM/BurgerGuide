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
    <div className="text-center px-4 lg:px-0">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl text-cbb26a font-bold mb-6">Featured Stores</h2>
      <Slider {...settings} className="mx-auto max-w-screen-lg">
        {stores.map((store) => (
          <div key={store._id} className="px-2 lg:px-4">
            <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md">
              <h3 className="text-lg lg:text-xl xl:text-2xl text-cbb26a font-bold mb-2">{store.name}</h3>
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