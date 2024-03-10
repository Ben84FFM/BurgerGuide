import React, { useState, useEffect } from 'react';

const PolicyBackground = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const backgrounds = [
    'https://media.gq-magazin.de/photos/5fca217030a450011a3a481e/master/w_1600%2Cc_limit/hamburguesa.jpg',
    'https://www.ka-news.de/storage/image/7/1/6/8/2228617_burger_ka-2022-644x395_1A8_aF_mHb0IT.jpg',
    'https://pec-blog-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/BestBurgerHH_PulledPorkBurger.jpg',
    'https://lh3.googleusercontent.com/p/AF1QipOyftwkDpG_AdLtdiINO7Ksk-j0FOuy2PxTDW5V=s1360-w1360-h1020',
    'https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log('Current background image index:', backgroundImage);
    console.log('Current background image URL:', backgrounds[backgroundImage]);
  }, [backgroundImage]);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgrounds[backgroundImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {children}
    </div>
  );
};

export default PolicyBackground;

