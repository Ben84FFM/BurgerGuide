import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Neu hinzugefügt

const SearchRestaurant = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleResults, setVisibleResults] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (search.trim() === '') {
          setSearchResults([]);
          setLoading(false);
          return;
        }
        const response = await axios.get(`http://localhost:5000/restaurant/search?restaurant=${search}`, { withCredentials: true });
        setSearchResults(response.data);
        setLoading(false);
        setVisibleResults(5);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const handleLoadMore = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 5);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="containerBG bg-black">
      <div className="containerImg flex flex-col items-center max-w-screen-xl mx-auto relative ">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black border-slate-50 rounded-xl shadow-xl shadow-gray-500">
          <div className="text-center bg-opacity-70">
            <div className="bg-black container mx-auto max-w-md rounded-xl shadow-xl shadow-gray-500">
              <div className="max-w-md mx-auto p-4">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a"
                  />
                  <button
                    type="submit"
                    className="bg-black text-cbb26a px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none shadow-md border border-gray-500"
                  >
                    Search Restaurant
                  </button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error loading results.</p>}
                {searchResults.length > 0 && (
                  <div>
                    <h2 className="text-cbb26a mb-2">Your Results</h2>
                    <ul>
                      {searchResults.slice(0, visibleResults).map((result) => (
                        <li
                          className="text-cbb26a container mx-auto max-w-md mt-20 rounded-xl shadow-xl shadow-gray-500 bg-white"
                          key={result._id}
                        >
                          {result.restaurant}
                        </li>
                      ))}
                    </ul>
                    {searchResults.length > visibleResults && (
                      <button
                        className="bg-white text-cbb26a px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none shadow-md border border-gray-500 mt-4"
                        onClick={handleLoadMore}
                      >
                        Load More
                      </button>
                    )}
                  </div>
                )}
                {searchResults.length === 0 && (
                  <div>
                    <p>No results found.</p>
                    <Link to="/addRestaurant">
                      <button
                        className="bg-white text-cbb26a px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none shadow-md border border-gray-500 mt-4"
                      >
                        Add your Restaurant
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurant;