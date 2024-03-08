import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BackgroundCarousel = () => {
  const localImages = [
    require('../src/assets/LandingPage.jpg').default,
    require('../src/assets/LandingPageLogo2.png').default,
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const maxHeight = Math.max(
        ...Array.from(containerRef.current.children).map((child) => child.clientHeight)
      );
      Array.from(containerRef.current.children).forEach(
        (child) => (child.style.height = `${maxHeight}px`)
      );
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="text-center px-4 lg:px-0 py-8">
      <Slider {...settings} className="mx-auto max-w-screen-xl" ref={containerRef}>
        {localImages.map((image, index) => (
          <div key={index} className="flex items-center px-4">
            <div className="flex bg-white rounded-md p-6 shadow-md">
              <img
                src={image}
                alt={`Technology ${index + 1}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;