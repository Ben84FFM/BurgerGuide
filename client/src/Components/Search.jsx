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
  const [visibleRestaurants, setVisibleRestaurants] = useState(5);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/restaurant`);
        setRestaurants(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchRestaurants();
  }, []);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setVisibleRestaurants((prevCount) => prevCount + 5);
    }
  };

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

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 border-slate-50 rounded-xl ">
          <div className="flex flex-col items-center p-4">
            <div className="flex justify-center w-full mb-4">
              <SearchRestaurant to="/addRestaurants/" element={<SearchRestaurant />} />
            </div>
            <div className="flex flex-wrap justify-center w-full scroll-container" onScroll={handleScroll} style={{ overflowY: 'auto', maxHeight: '70vh' }}>
              {restaurants.slice(0, visibleRestaurants).map((rest) => {
                const formattedDate = rest.date
                  ? format(new Date(rest.date), 'MMM dd, yyyy @HH:mm')
                  : '';
                return (
                  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 inline-block" key={rest._id}>
                    <div className="Card overflow-hidden border-2 bg-white border-slate-50 rounded-xl shadow-xl shadow-gray-500 flex flex-col justify-between">
                      <div className="flex flex-col m-4">
                        <h2 className="text-cbb26a text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold mb-2 sm:mb-3 text-center">
                          <Link to={'/restaurant/' + rest._id}>{rest.restaurant}</Link>
                        </h2>
                        {/* Hier wird die Website angezeigt */}
                        {rest.website && (
                          <p className="text-gray-600 text-xs sm:text-sm mb-2">
                            <Link to={rest.website} target="_blank" rel="noopener noreferrer">{rest.website}</Link>
                          </p>
                        )}
                        {/* Email anzeigen */}
                        {rest.email && (
                          <p className="text-gray-600 text-xs sm:text-sm mb-2">
                            Email: {rest.email}
                          </p>
                        )}
                        {/* Weitere Inhalte */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="containerTextBox text-center">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;