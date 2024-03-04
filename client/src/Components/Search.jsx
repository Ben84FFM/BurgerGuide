import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { SpinnerCircularFixed } from 'spinners-react';
import axios from 'axios';
import SearchRestaurant from './SearchRestaurant';

function Search() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/restaurant`);
        setRestaurants(response.data); setLoading(false); console.log(response.data);
      } catch (error) { setLoading(false); setError(true); }
    }; fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className='h-screen flex flex-times justify-center'>
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color='rgba(57, 107, 172, 1)'
          secondaryColor='rgba(0, 0, 0, 0.44)'
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-2xl text-blue-500 h-screen flex items-center justify-center'>
        <p>Server not available, please try again later</p>
      </div>
    );
  }


  return (
        <div className="containerBG bg-black">
      <div className="containerImg flex flex-col items-center max-w-screen-xl mx-auto relative">
        <img
          src="../src/assets/LandingPage.jpg"
          alt="LandingPageLogo"
          className="w-full object-fill h-auto max-w-screen-xl"
        />
        <img
          src="../src/assets/LandingPageLogo2.jpg"
          alt="LandingPageLogo2"
          className="w-full object-fill h-auto max-w-screen-xl"
        />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-70 border-slate-50 rounded-xl ">
          <div className="flex flex-wrap justify-center w-full p-4 ">
            <SearchRestaurant to="/addRestaurants/" element={<SearchRestaurant/>} />
            {restaurants.map((rest) => {
              const formattedDate = rest.date
                ? format(new Date(rest.date), 'MMM dd, yyyy @HH:mm')
                : '';
              return (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 inline-block" key={rest._id}>
                  <div className="Card h-full border-2 bg-white border-slate-50 rounded-xl shadow-xl shadow-gray-500">
                    <div className="flex flex-col m-4">
                      <h2 className="text-cbb26a text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 text-center">
                        <Link to={'/restaurant/' + rest._id}>{rest.restaurant}</Link>
                      </h2>
                      {/* Other content */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="containerTextBox text-center">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
