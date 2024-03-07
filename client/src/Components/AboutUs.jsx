import React from 'react';
import StackCarousel from './TechStackCarousel';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-xl mx-auto p-8 rounded-xl bg-opacity-70 text-white text-center lg:flex lg:items-center">
        <img
          src="../src/assets/BurgerGuideLogo2.png"
          alt="BurgerGuideLogo"
          className="w-full lg:w-1/2 h-auto rounded-md mb-8 lg:mb-0"
        />
        <div className="text-left lg:text-center lg:w-1/2 lg:pl-8">
          <h1 className="text-cbb26a text-3xl font-bold mb-4">Behind the Stage!</h1>

          <p className="text-cbb26a  mb-4">
            Express.js forms the backbone of our server-side development, enabling quick API creation for seamless data exchange between our database and the frontend.
          </p>
          <p className="text-cbb26a  mb-4">
            React.js ensures a responsive frontend, allowing users to effortlessly navigate through different burger joints and discover their favorites.
          </p>
          <p className="text-cbb26a  mb-4">
            Axios facilitates seamless communication between our frontend and backend, contributing to a smooth user experience.
          </p>
          <p className="text-cbb26a  mb-4">
            Tailwind CSS is instrumental in crafting an attractive layout and design for our website, providing efficiency in creation and maintenance.
          </p>
          <p className="text-cbb26a  mb-4">
            Bcrypt is employed to securely encrypt passwords, prioritizing the security and integrity of user accounts.
          </p>
          <p className="text-cbb26a  mb-4">
            Join us at BurgerGuide, where burger dreams come true!
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <StackCarousel />
      </div>
    </div>
  );
};

export default AboutUs;