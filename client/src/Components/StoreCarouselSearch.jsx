import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ShareButtons from './ShareFunction';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StoreCarouselSearch = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stores');
        setStores(response.data.data);
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
    slidesToShow: 5, 
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: true, 
    verticalSwiping: true, 
  };

  useEffect(() => {
    if (containerRef.current) {
      const maxHeight = Math.max(
        ...Array.from(containerRef.current.children).map((child) => child.clientHeight)
      );
      Array.from(containerRef.current.children).forEach(
        (child) => (child.style.height = `${maxHeight}px`)
      );
    }
  }, [stores]);

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
    <div className="container text-center px-4 lg:px-0">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl text-cbb26a font-bold mb-6">
        Burger & BBQ Stores
      </h2>
      <Slider {...settings} className="mx-auto max-w-screen-lg">
        {stores.map((store) => (
          <div key={store._id} className="flex items-center px-2 lg:px-4 text-left ">
            <div className="flex bg-black rounded-md p-4 lg:p-6 shadow-md mb-2 bg-opacity-75" ref={containerRef}>
              <Link to={`/store/${store._id}`} className="w-32 h-32">
                <img
                  src={store.images}
                  alt={store.name}
                  className="w-full h-full object-cover rounded-md shadow-lg"
                />
              </Link>
              <div className="ml-4 flex-grow">
                <h3 className="text-lg lg:text-xl xl:text-2xl text-cbb26a font-bold mb-2 overflow-hidden overflow-ellipsis max-w-xs break-all">
                  {store.name}
                </h3>
                <p className="text-cbb26a mb-2 text-sm">+49 {store.phonenumbers}</p>
                <a
                  href={store.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cbb26a font-bold text-sm"
                >
                  To the Store
                </a>
                <p className="text-cbb26a mb-2 text-sm font-bold "> Share </p>
                <ShareButtons url={`https://deineapp.com/store/${store._id}`} title={store.name} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StoreCarouselSearch;