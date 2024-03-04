const HeroSection = () => {
  return (
    <div className="containerBG bg-black ">
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
        <div className="containerLogoTextBox bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black rounded-xl ">
          <img
            src="../src/assets/BurgerGuideLogo3.png"
            alt="BurgerGuideLogo"
            className="w-1/2 h-auto rounded-md mb-4"
          />
          <div className="containerTextBox text-center">
            <h1 className="text-cbb26a text-lg font-bold mb-4">BurgerGuide</h1>
            <p className="text-cbb26a mb-4">
              Your passion for burgers has inspired us to create this platform where you can discover the best burger
              locations in your city.
            </p>
            <p className="text-cbb26a mb-4">
              Immerse yourself in the world of burgers with transparent reviews from the burger community.
            </p>
            <p className="text-cbb26a mb-4">
              BurgerGuide - Where passion meets taste. Discover, rate, and share your burger experiences today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default HeroSection;