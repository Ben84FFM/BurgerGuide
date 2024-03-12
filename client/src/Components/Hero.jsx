import StoreCarousel from "./StoreCarousel";

const HeroSection = () => {
  return (
    <div className="container flex bg-cover" style={{ backgroundImage: `url('../src/assets/LandingPageLogo2.jpg')` }}>
      <div className="container flex flex-col items-center max-w-screen-xl mx-auto relative pt-8 pb-8">
        <StoreCarousel />
        <div className="containerLogoTextBox bg-opacity-80 flex flex-col items-center bg-black rounded-xl">
          <img
            src="../src/assets/BurgerGuideLogo3.png"
            alt="BurgerGuideLogo"
            className="w-1/2 h-auto mb-4 pt-4 pb-4"
          />
          <div className="container TextBox text-center max-w-screen-md mx-auto p-8 bg-opacity-80 rounded-xl">
            <h1 className="text-cbb26a text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">BurgerGuide</h1>
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