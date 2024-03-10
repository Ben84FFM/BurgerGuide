import React from 'react';
import TechStCarouselButton from './AboutusMockup';

const AboutUs = () => {
  return (
        <div className="MainContainer bg-cover" style={{ backgroundImage: `url('../src/assets/LandingPageLogo2.jpg')` }}>

      <div className="ShadowContainer">
      <div className='ContainerBildText flex flex-row relative space-x-8'>
        <div className="LogoImage ">
          <img
            src="../src/assets/BurgerGuideLogo2.png"
            alt="BurgerGuideLogo"
            className="h-auto mb-4 rounded-xl"
          />
          <div className="LogoBorder"></div>
        </div>

        <div className="lg:w-1/2 space-y-4 bg-black bg-opacity-80 p-8 rounded-xl">
  <div className="text-cbb26a">
    <h1 className="text-3xl font-bold text-center mb-4">Behind the Stage!</h1>
    <p className="font-bold">Express.js</p>
    <p className='text-cbb26a mb-4'>Forms the backbone of our server-side development, enabling quick API creation for seamless data exchange between our database and the frontend.</p>
    
    <p className="text-cbb26a font-bold">React.js & javascript</p>
    <p className='text-cbb26a mb-4'>Ensures a responsive frontend, allowing users to effortlessly navigate through different burger joints and discover their favorites.</p>
       
    <p className="text-cbb26a font-bold">Axios</p>
    <p className='text-cbb26a mb-4'>Facilitates seamless communication between our frontend and backend, contributing to a smooth user experience.</p>
    
    <p className="text-cbb26a font-bold">Bcrypt</p>
    <p className="text-cbb26a mb-4">is employed to securely encrypt passwords, prioritizing the security and integrity of user accounts</p>

    <p className="text-cbb26a font-bold">Tailwind & CSS</p>
    <p className="text-cbb26a mb-4">Responsible for Design and UserExperience and Responsive Web Design</p>

    <p className='text-cbb26a font-bold text-center'>Join us at BurgerGuide, where burger dreams come true!</p>
  </div>
  <TechStCarouselButton/>
</div>
</div>
</div>
   
    </div>
  );
};

export default AboutUs;