import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleResults, setVisibleResults] = useState(5);
  const [expanded, setExpanded] = useState(false); 

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
    setExpanded(true); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (search.trim() === '') {
        setSearchResults([]);
        setLoading(false);
        setExpanded(false); 
        return;
      }

      const response = await axios.get(
        `https://burgerguide-ecdo.onrender.com/stores/search?store=${search}`,
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

  return (
    <div className={`flex flex-col text-cbb26a bg-black rounded-md shadow-md transition-all duration-300 ${expanded ? 'p-4' : 'p-2'}`}>
      <div className=' '>
        <form
          onSubmit={handleSubmit}
          className='flex flex-row items-center space-x-2'
        >
          <input
            type='text'
            value={search}
            onChange={handleInputChange}
            placeholder='Search...'
            className='flex-grow px-3 py-2 rounded-md focus:outline-none focus:border-cbb26a mb-2 sm'
          />
          <button
            type='submit'
            className='bg-black px-2 py-2 mb-2 rounded-md hover:bg-opacity-80 focus:outline-none scale-125 '
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

{/* ErrorResonseMessage */}

        {loading && <p>Loading...</p>}
        {error && <p></p>}
      </div>

      {searchResults.length > 0 && (
        <div className=' '>
          <h2 className='font-bold text-center mt-2 mb-2'>Results</h2>
          <ul>
            {searchResults.slice(0, visibleResults).map((result) => (
              <Link
                to={`/store/${result._id}`}
                key={result._id}
                className='bg-white block mx-auto rounded-xl mb-4 p-4'
              >
                {result.name}
              </Link>
            ))}
          </ul>
          {searchResults.length > visibleResults && (
            <button
              className='bg-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none  '
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
          <div className="text-cbb26a text-center mt-4">
            <Link to="/addRestaurant" className="inline-block bg-black text-cbb26a font-bold px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none shadow-md imageBorderLogo">
              Your Favorite Store is not here?
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;