import React, { useState } from 'react';
import StackCarousel from './StackCarousel';

const TechStCarouselButton = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactButtonClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="container mx-auto p-2 max-w-full ">
      <h1 className="text-cbb26a font-bold">Our TechStack we used to build BurgerGuide</h1>
      <button
        onClick={handleContactButtonClick}
        className="bg-black font-bold text-cbb26a text-center imageBorderLogo py-2 px-4 rounded-md transition duration-300 hover:text-white mt-4"
      >
        SHOW
      </button>

      {showContactForm && (
        <div className="container-lg flex fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-white opacity-50"></div>
          <div className="relative max-w-full sm:max-w-md mx-auto bg-black rounded-md p-6">
            <button
              onClick={handleCloseContactForm}
              className="absolute top-0 right-0 p-2 text-cbb26a text-sm font-bold"
            >
              Close
            </button>
            <StackCarousel />

          </div>
        </div>
      )}
    </div>
  );
};

export default TechStCarouselButton;