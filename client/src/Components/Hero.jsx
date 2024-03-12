import StoreCarousel from "./StoreCarousel";

const HeroSection = () => {
  return (
    <div div className="container flex bg-cover" style={{ backgroundImage: `url('https://media.gq-magazin.de/photos/5fca217030a450011a3a481e/master/w_1600%2Cc_limit/hamburguesa.jpg')` }}>
      <div className="container flex flex-col items-center max-w-screen-xl mx-auto relative pt-8 pb-8">
        <StoreCarousel />
        <div className="container bg-opacity-80 flex flex-col lg:flex-row items-center bg-black rounded-xl">
  <img
    src="../src/assets/BurgerGuideLogo3.png"
    alt="BurgerGuideLogo"
    className="imageBorderLogo mb-4 rounded-xl lg:order-1 "
  />
  <div className="container text-center lg:text-left max-w-screen-md mx-auto p-8 bg-opacity-80 rounded-xl lg:order-2">
    <h1 className="text-cbb26a text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Welcome to BurgerGuide</h1>
    <p className="text-cbb26a mb-4">
    The ultimate hub for burger enthusiasts! Our passion for burgers has inspired us to create this platform. In a world where there was no dedicated space for burger fans, we decided to take matters into our own hands.
    </p>
    <p className="text-cbb26a mb-4">
    Join our community, dive into the world of burgers, and share your own culinary adventures. BurgerGuide is more than a platform it's a celebration of the love for burgers.
    </p>
    <p className="text-cbb26a mb-4">
   Let's embark on this flavorful journey together and discover the tastiest burger destinations in town! 
    </p>
  </div>
</div>
      </div>
    </div>
  );
}

export default HeroSection;