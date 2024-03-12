import React from 'react';
import StoreCarouselSearch from './StoreCarouselSearch';
import PolicyBackground from './DynamicBackground';
import Search from './Search';

const SearchRestaurant = () => {

  return (
    <PolicyBackground>
      <div className="container min-h-screen flex justify-center p-12 flex-col lg:flex-row ">

        <div className="flex-1  p-12 ">
          <StoreCarouselSearch />
        </div>

        <div className='flex-1  flex justify-center items-center pl-12 '>
          {' '}
          <div className=''>
            <Search />
          </div>
        </div>
      </div>
    </PolicyBackground>
  );
};

export default SearchRestaurant;