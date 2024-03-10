import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StoreCarouselSearch from './StoreCarouselSearch';
import PolicyBackground from './DynamicBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        const response = await axios.get(
          `http://localhost:5000/stores/search?store=${search}`,
          { withCredentials: true }
        );
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
<PolicyBackground>
    <div className="min-h-screen flex items-center justify-center pt-8 pb-8">
      <div className="lg:flex lg:items-center max-w-screen-xl mx-auto">
        <div className="lg:w-1/2 order-2 lg:order-1 lg:mr-4">
          <StoreCarouselSearch />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <div className="text-center bg-black border-slate-50 rounded-xl shadow-xl shadow-gray-500 bg-opacity-70 max-w-md mx-auto p-4 mb-4 lg:mb-0">
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center space-x-2">
              <input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Search..."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-2 lg:mb-0 lg:mr-2"
              />
<button
  type="submit"
  className="bg-black text-cbb26a px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none shadow-md border border-gray-500"
>
  <FontAwesomeIcon icon={faSearch} className="mr-2" />
  Search
</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading results.</p>}
          </div>
          {searchResults.length > 0 && (
            <>
              <h2 className="text-cbb26a mb-2">Your Results</h2>
              <ul>
                {searchResults.slice(0, visibleResults).map((result) => (
                  <Link
                    to={`/store/${result._id}`}
                    key={result._id}
                    className="text-cbb26a block mx-auto max-w-md mb-4 rounded-xl shadow-xl shadow-gray-500 bg-white p-4"
                  >
                    {result.name}
                  </Link>
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
            </>
          )}
          {searchResults.length === 0 && (
            <div className="text-cbb26a text-center mt-4">
             <Link to="/addRestaurant" className="inline-block bg-white text-cbb26a font-bold px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-cbb26a focus:outline-none shadow-md border border-gray-500">
      Your Favorite Store is not here?
    </Link>
            </div>
          )}
        </div>
      </div>
    </div>
 </PolicyBackground>
  );
};

export default SearchRestaurant;