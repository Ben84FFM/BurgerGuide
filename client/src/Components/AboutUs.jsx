import React from 'react';
import StackCarousel from './StackCarousel';

const AboutUs = () => {
  return (
    <div className="Hauptconainer flex flex-col bg-black">
      {/* Logo und Textfeld Container */}
      <div className='ContainerBildText flex flex-row'> 
        {/* Logo */}
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0 flex items-center justify-center">
    <img
      src="../src/assets/BurgerGuideLogo2.png"
      alt="BurgerGuideLogo"
      className="w-1/2 h-auto sexyBorder rounded-md mb-4"
          />
        </div>

        {/* Textfeld */}
        <div className="lg:w-1/2 ">
          <div className="text-cbb26a lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Behind the Stage!</h1>
            <p className="text-cbb26a mb-4">
              Express.js forms the backbone of our server-side development, enabling quick API creation for seamless data exchange between our database and the frontend.
            </p>
            <p className="text-cbb26a mb-4">
              React.js ensures a responsive frontend, allowing users to effortlessly navigate through different burger joints and discover their favorites.
            </p>
            <p className="text-cbb26a mb-4">
              Axios facilitates seamless communication between our frontend and backend, contributing to a smooth user experience.
            </p>
            <p className="text-cbb26a mb-4">
              Tailwind CSS is instrumental in crafting an attractive layout and design for our website, providing efficiency in creation and maintenance.
            </p>
            <p className="text-cbb26a mb-4">
              Bcrypt is employed to securely encrypt passwords, prioritizing the security and integrity of user accounts.
            </p>
            <p className="text-cbb26a mb-4">
              Join us at BurgerGuide, where burger dreams come true!
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="lg:w-full mt-0 lg:mt-0 flex flex-col">
        <div className="mx-auto lg:w-1/2">
          <StackCarousel />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;