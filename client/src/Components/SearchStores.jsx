import React from 'react';
import StoreCarouselSearch from './StoreCarouselSearch';
import PolicyBackground from './DynamicBackground';
import Search from './Search';

const SearchStores = () => {

  return (
<PolicyBackground>
  <div className="container min-h-screen flex flex-col justify-center lg:flex-row pt-6 pb-6 ">

    <div className="container flex bg-black bg-opacity-85 rounded-xl pt-4 pb-4 mr-4 ml-2">
      <StoreCarouselSearch />
    </div>

    <div className="flex justify-center">
      <div className="pt-6 pb-6 mr-8 ml-4">
        <Search />
      </div>
    </div>
  </div>
</PolicyBackground>


  );
};

export default SearchStores;