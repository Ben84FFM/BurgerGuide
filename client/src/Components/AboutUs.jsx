import React from 'react';
import StackCarousel from './StackCarousel';

const AboutUs = () => {
  return (
    
    <div className="MainContainer bg-cover" style={{ backgroundImage: `url('../src/assets/LandingPageLogo2.jpg')` }}>
      {/* Logo und Textfeld Container */}
      <div className='ContainerBildText flex flex-row relative space-x-8'>
        {/* Bild mit sexyBorder */}
        <div className="LogoImage LogoBorder">
          <img
            src="../src/assets/BurgerGuideLogo2.png"
            alt="BurgerGuideLogo"
            className="h-auto mb-4"
          />
          <div className="LogoBorder"></div>
        </div>


<div className='bg-black opacity-70'> 
</div>

        {/* Textfeld */}
        <div className="lg:w-1/2 space-y-4 bg-black p-8">
  <div className="text-cbb26a">
    <h1 className="text-3xl font-bold mb-4">Behind the Stage!</h1>
    <p className="mb-4">
      Express.js forms the backbone of our server-side development, enabling quick API creation for seamless data exchange between our database and the frontend.
    </p>
    <p className="mb-4">
      React.js ensures a responsive frontend, allowing users to effortlessly navigate through different burger joints and discover their favorites.
    </p>
    <p className="mb-4">
      Axios facilitates seamless communication between our frontend and backend, contributing to a smooth user experience.
    </p>
    <p className="mb-4">
      Tailwind CSS is instrumental in crafting an attractive layout and design for our website, providing efficiency in creation and maintenance.
    </p>
    <p className="mb-4">
      Bcrypt is employed to securely encrypt passwords, prioritizing the security and integrity of user accounts.
    </p>
    <p className="mb-4">
      Join us at BurgerGuide, where burger dreams come true!
    </p>
  </div>
</div>

      </div>

      {/* Carousel */}
      <div className="lg:w-full mt-8 lg:mt-0 flex flex-col">
        <div className="mx-auto lg:w-1/2">
          {/* Annahme: StackCarousel ist eine Komponente, die Sie verwenden */}
          <StackCarousel/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;