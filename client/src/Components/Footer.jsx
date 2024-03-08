import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-black text-cbb26a py-8">
  <div className="container mx-auto flex flex-wrap justify-center lg:justify-between">
    <div className="footer-section mb-4 lg:mb-0">
      <h4 className="text-cbb26a text-lg font-bold mb-2">Imprint</h4>
     
    </div>

    <div className="footer-section mt-auto mb-4 lg:mb-0 flex flex-col justify-end">
  <h4 className="text-cbb26a text-lg font-bold mb-2" >Copyright © {currentYear}</h4>
  <p className="text-cbb26a mb-1">All rights reserved</p>
</div>

    <div className="footer-section">
          <Link to='/policy' className='cursor-pointer hover:opacity-80 text-cbb26a mb-1'><p className='text-lg'>Data Policy</p></Link>
          <Link to='/about' className='cursor-pointer hover:opacity-80 text-cbb26a mb-1'><p className='text-lg'>About BurgerGuide</p></Link>
      <Link to='/burgerstores' className='cursor-pointer hover:opacity-80 text-cbb26a mb-1'><p className='text-lg'>Stores</p></Link>
      <Link to='/' className='cursor-pointer hover:opacity-80 text-cbb26a mb-1'><p className='text-lg'>Home</p></Link>
    </div>
  </div>
</footer>
  );
};

export default Footer;