import React from 'react';
import StoreCarouselSearch from './StoreCarouselSearch';
import PolicyBackground from './DynamicBackground';

const SearchRestaurant = () => {

  return (
    <PolicyBackground>
      <div className="min-h-screen flex  justify-center pt-8 pb-8">
        <div className="lg:w-1/2  ">
          <StoreCarouselSearch />
        </div>

      </div>
    </PolicyBackground>
  );
};

export default SearchRestaurant;