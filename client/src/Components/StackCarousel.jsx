import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StackCarousel = () => {
  const placeholderImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    'https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress',
    'https://nodejs.org/static/images/logo.svg',
    'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center px-4 lg:px-0 py-8">
      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings} className="mx-auto">
          {placeholderImages.map((image, index) => (
            <div key={index} className="flex items-center px-4">
              <div className="flex bg-white rounded-md p-6 shadow-md">
                <img
                  src={image}
                  alt={`Technology ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md mx-auto"
                  style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StackCarousel;