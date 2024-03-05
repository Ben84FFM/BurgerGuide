import React from 'react';

const AboutUs = () => {
  return (
    <div className="containerBG bg-black">
      <div className="containerImg flex flex-col items-center max-w-screen-xl mx-auto relative">
        {/* ImageTop */}
        <img
          src="../src/assets/LandingPage.jpg"
          alt="LandingPageLogo"
          className="w-full object-fill h-auto max-w-screen-xl"
        />

        {/* ImageBottom */}
        <img
          src="../src/assets/LandingPageLogo2.jpg"
          alt="LandingPageLogo2"
          className="w-full object-fill h-auto max-w-screen-xl"
        />

        {/* Container mit dem Text und dem Bild */}
        <div className="bg-opacity-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black rounded-xl">
          <img
            src="../src/assets/BurgerGuideLogo2.png"
            alt="BurgerGuideLogo"
            className="w-1/2 h-auto rounded-md mb-4"
          />
          <div className="containerTextBox text-center">
            <h1 className="text-cbb26a text-lg font-bold mb-4">Welcome to BurgerGuide!</h1>

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
    </div>
  );
};

export default AboutUs;