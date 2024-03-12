import React from 'react';
import TechStCarouselButton from './AboutusMockup';
import PolicyBackground from './DynamicBackground';


const AboutUs = () => {
  return (
    <PolicyBackground>
        <div className="ml-4 pt-8 pb-8">
      <div className='Container flex flex-row relative space-x-8'>
        <div className="">
          <img
            src="../src/assets/BurgerGuideLogo2.png"
            alt="BurgerGuideLogo"
            className="container imageBorderLogo h-auto mb-4 rounded-xl "
          />
          </div>
        
        <div className="lg:w-1/2 space-y-4 bg-black bg-opacity-75 p-8 rounded-xl">
  <div className="text-cbb26a">
    <h1 className="text-3xl font-bold text-center mb-4">Behind the Scenes with the Developers</h1>
    <p className="font-bold">Discover and Rate</p>
    <p className='text-cbb26a mb-4'>Welcome behind the scenes of Burger Guide! As proud developers of this app, we want to give you a glimpse into our mission: to make the search for the perfect burger as easy and enjoyable as possible.</p>
    
    <p className="text-cbb26a font-bold">User Contributions</p>
    <p className='text-cbb26a mb-4'>We firmly believe that the community is the heart of Burger Guide. Your posts, tips, and recommendations make the app vibrant and up-to-date. You are a part of it!</p>
       
    <p className="text-cbb26a font-bold">Ratings and Reviews</p>
    <p className='text-cbb26a mb-4'>The ratings and reviews come directly from the community. As developers, we rely on your experiences to make Burger Guide a reliable guide to the best burger joints.</p>
    
    <p className="text-cbb26a font-bold"> Interactive Map</p>
    <p className="text-cbb26a mb-4">The interactive map feature is our way of effortlessly guiding you to the best burger spots. As developers, we take pride in Burger Guide helping you explore the culinary highlights of your city.</p>

      <p className="text-cbb26a mb-4">Burger Guide is not just an app – it's the result of our passion for good food. As developers, we look forward to having you join this journey and explore the world of burgers with us!</p>

    <p className='text-cbb26a font-bold text-center'>Enjoy your meal and have fun discovering burgers with Burger Guide!</p>
  </div>
  <TechStCarouselButton/>
</div>
</div>
</div>
 
  </PolicyBackground>
  );
};

export default AboutUs;