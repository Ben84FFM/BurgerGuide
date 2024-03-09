import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-black text-cbb26a py-8">
  <div className="container mx-auto flex flex-wrap justify-center lg:justify-between">
    <div className="footer-section mb-4 lg:mb-0 w-full lg:w-1/4">
      <h4 className="text-cbb26a text-lg font-bold mb-2">Imprint</h4>
    </div>

    <div className="footer-section mt-4 lg:mt-0 w-full lg:w-1/2">
      <Link to='/' className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'><p className='text-lg'>Home</p></Link>
      <Link to='/about' className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'><p className='text-lg'>BurgerGuide</p></Link>
      <Link to='/burgerstores' className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'><p className='text-lg'>Stores</p></Link>
      <Link to='/policy' className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'><p className='text-lg'>Data Policy</p></Link>
    </div>

    <div className="footer-section mt-4 lg:mt-0 mb-4 lg:mb-0 w-full lg:w-1/4">
      <h4 className="text-cbb26a text-lg font-bold mb-2">Copyright © {currentYear}</h4>
      <p className="text-cbb26a mb-1">All rights reserved</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;