import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StoreCarousel = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]); // if time > time
  const [error, setError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('https://burgerguide-ecdo.onrender.com/stores');
        setStores(response.data.data);
        console.log(response.data.data);
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
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    if (containerRef.current) {
      const maxHeight = Math.max(
        ...Array.from(containerRef.current.children).map(
          (child) => child.clientHeight
        )
      );
      Array.from(containerRef.current.children).forEach(
        (child) => (child.style.height = `${maxHeight}px`)
      );
    }
  }, [stores]);

  if (loading) {
    return <p className='text-center'>Loading...</p>;
  }

  if (error) {
    return <p className='text-center text-red-500'>Error loading stores.</p>;
  }

  if (!Array.isArray(stores)) {
    console.error('Stores is not an array:', stores);
    return (
      <p className='text-center text-red-500'>Error loading stores data.</p>
    );
  }

  return (
    <div className='container text-center px-4 lg:px-0'>
      <h2 className='text-2xl lg:text-3xl xl:text-4xl text-cbb26a font-bold mb-6 text-outline'>
        Burger & BBQ Stores
      </h2>
      <Slider {...settings} className='mx-auto w-full mb-12'>
        {stores.map((store) => (
          <div key={store._id} className='flex items-center px-2 lg:px-4'>
            <div className='flex rounded-md overflow-hidden bg-gradient-to-r from-black via-zinc-800 to-black p-4 lg:p-6 shadow-md'>
              <Link to={`/store/${store._id}`} className='w-48 h-48'>
                <img
                  src={store.images}
                  alt={store.name}
                  className='w-full h-full object-cover rounded-md shadow-lg'
                />
              </Link>
              <div className='ml-4 flex-grow'>
                <h3 className='text-sm lg:text-xl xl:text-lg text-cbb26a font-bold mb-2 overflow-hidden overflow-ellipsis max-w-xs  '>
                  {store.name}
                </h3>
                <p className='text-gray-300 mb-2 text-sm'>
                  📍 {store.address.street}
                </p>
                <p className='text-gray-300 mb-2 text-sm'>
                  {store.address.zipCode} {store.address.city}
                </p>
                <p className='text-gray-300 mb-2 text-sm'>
                  ☎+49 {store.phonenumbers}
                </p>
                <a
                  href={store.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 text-sm hover:opacity-60'
                >
                  Visit Store
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StoreCarousel;
