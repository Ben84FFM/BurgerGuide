import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='container-lg flex bg-gradient-to-r from-black via-zinc-800 to-black p-4 text-cbb26a py-8 border-t-4 footerBorder'>
      <div className='container mx-auto flex flex-wrap justify-center lg:justify-between ml-4'>
        <div className='footer-section mb-4 lg:mb-0 w-full lg:w-1/4'>
          <Link
            to='/'
            className='cursor-pointer hover:opacity-80 text-cbb26a  mb-2 block lg:inline-block lg:mb-0 lg:mr-4'
          >
            <p className='text-lg'>
              <FontAwesomeIcon icon={faHome} /> Home
             
            </p>
          </Link>
        </div>

  

        <div className='footer-section justify-center mt-4 lg:mt-0 w-full lg:w-1/2'>
          <Link
            to='/about'
            className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'
          >
            <p className='text-lg'>Behind The Stage</p>
          </Link>
          <Link
            to='/burgerstores'
            className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'
          >
            <p className='text-lg'>Stores</p>
          </Link>
          <Link
            to='/policy'
            className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'
          >
            <p className='text-lg'>Data Policy</p>
          </Link>
          <Link
            to='/impress'
            className='cursor-pointer hover:opacity-80 text-cbb26a mb-2 block lg:inline-block lg:mb-0 lg:mr-4'
          >
            <p className='text-lg'>Imprint</p>
          </Link>
        </div>

        <div className='footer-section mt-4 lg:mt-0 mb-4 lg:mb-0 w-full lg:w-1/4'>
        <h1
          className='text-cbb26a font-bold text-4xl font-bold pb-2'
          style={{ transform: 'scalex(1)', fontFamily: 'Alex Brush, cursive' }}
        >
           Follow us
        </h1>
          <div className='flex items-center space-x-4'>
            <a
              href='https://www.linkedin.com/dein-linkedin'
              target='_blank'
              rel='noopener noreferrer'
              className='text-cbb26a hover:text-white'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
            <a
              href='https://www.instagram.com/dein-instagram'
              target='_blank'
              rel='noopener noreferrer'
              className='text-cbb26a hover:text-white'
            >
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
            <a
              href='https://www.facebook.com/dein-facebook'
              target='_blank'
              rel='noopener noreferrer'
              className='text-cbb26a hover:text-white'
            >
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
            {/* Füge hier weitere Social-Media-Icons nach Bedarf hinzu */}
          </div>
        </div>

        <div className='footer-section mt-4 lg:mt-0 mb-4 lg:mb-0 w-full lg:w-1/4'>
          <h4 className='text-cbb26a text-lg font-bold mb-2'>
            Copyright © {currentYear}
          </h4>
          <p className='text-cbb26a mb-1'>All rights reserved</p>
        </div>
      </div>
    </footer>
 
 );
};

export default Footer;
