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
      <div className="containerLogoTextBox absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black border-slate-50 rounded-xl shadow-xl shadow-gray-500">
        <img
          src="../src/assets/BurgerGuideLogo2.png"
          alt="BurgerGuideLogo"
          className="w-1/2 h-auto rounded-md mb-4"
        />
        <div className="containerTextBox text-center">
          <h1 className="text-cbb26a text-lg font-bold mb-4">Welcome to BurgerGuide!</h1>
          <p className="text-cbb26a mb-4">
          At BurgerGuide, it's all about the passion for great food and creating a platform that brings burger enthusiasts from around the world together. Our mission is to discover the best burger joints and share them with the community.
          </p>
          <p className="text-cbb26a mb-4">
          Our developers at BurgerGuide rely on the MERN stack, specifically tailored to the needs of modern web applications. Here are the main components of our technology stack: MongoDB & Mongoose. </p>
          <p className="text-cbb26a mb-4">For efficient database management, we utilize MongoDB and Mongoose. These powerful technologies allow us to store and retrieve extensive information about burger joints. Express.js Express.js forms the backbone of our server-side development. With this robust Node.js framework, we can quickly and efficiently create APIs to exchange data between our database and the frontend. React.js
          </p>
          <p className="text-cbb26a mb-4">
          Our frontend is developed using React.js to ensure a responsive and engaging user interface. This allows users to effortlessly navigate through different burger joints and discover their favorites. 
          <p className="text-cbb26a mb-4">
          Axios For seamless communication between our frontend and backend, we rely on Axios. This HTTP client library facilitates data exchange and contributes to a smooth user experience.
          Tailwind CSS </p>
          The layout and design of our website are crafted with Tailwind CSS. This powerful CSS framework enables us to quickly and efficiently create attractive user interfaces that are easy to maintain.
          <p className="text-cbb26a mb-4">
          Bcrypt: The security of our user data is paramount. Therefore, we use Bcrypt to securely encrypt passwords and ensure the integrity of user accounts.
          </p>

          <p className="text-cbb26a mb-4">
          We take pride in developing BurgerGuide with this advanced technology stack and look forward to exploring the world of burgers with you!
          </p>

          <p className="text-cbb26a mb-4">
          Welcome to BurgerGuide - where burger dreams come true!
            </p>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}
export default AboutUs;
