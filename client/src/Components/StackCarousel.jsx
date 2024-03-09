import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StackCarousel = () => {
  const placeholderImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    'https://www.itnetwork.cz/images/46772/lekce5/mdb.png',
    'https://media.licdn.com/dms/image/D5612AQEHlMnpL5pg7g/article-cover_image-shrink_720_1280/0/1684628937431?e=2147483647&v=beta&t=KiP3xUV_nrfkbJ5XHR8StdZVMyM6b4V9-aQZqOmQ7v4',
    'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    'https://i.pinimg.com/736x/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042',
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
              <div className="flex bg-white rounded-md p-6">
                <img
                  src={image}
                  alt={`Technology ${index + 1}`}
                  className="object-cover rounded-md mx-auto"
                  style={{ width: '100px', height: '100px' }}
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