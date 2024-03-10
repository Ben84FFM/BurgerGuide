import React, { useState, useEffect } from 'react';

const DynamicBackground = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const backgrounds = [
    '../src/assets/LandingPageLogo2.jpg',
    '../src/assets/LandingPage.jpg',
  
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center" style={{ backgroundImage: backgrounds[backgroundImage], backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {children}
    </div>
  );
};

export default DynamicBackground;