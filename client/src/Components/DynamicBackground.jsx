import React, { useState, useEffect } from 'react';

const PolicyBackground = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const backgrounds = [
    'https://media.gq-magazin.de/photos/5fca217030a450011a3a481e/master/w_1600%2Cc_limit/hamburguesa.jpg',
    'https://www.ka-news.de/storage/image/7/1/6/8/2228617_burger_ka-2022-644x395_1A8_aF_mHb0IT.jpg',
    'https://pec-blog-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/BestBurgerHH_PulledPorkBurger.jpg',
    'https://t3.ftcdn.net/jpg/06/72/74/80/360_F_672748092_KGiVda9I51NwW8TwVpG3XT6TIK2cGzK4.jpg',
    'https://t4.ftcdn.net/jpg/06/04/41/07/360_F_604410795_9g8I3UlwzDyKLt19roKzpCV8X1Zc5YVm.jpg',
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

  const backgroundStyle = {
    backgroundImage: `url(${backgrounds[backgroundImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out', // Hinzugefügte CSS-Transition-Eigenschaft
  };

  return (
    <div className="bg-white min-h-screen container flex" style={backgroundStyle}>
      {children}
    </div>
  );
};

export default PolicyBackground;