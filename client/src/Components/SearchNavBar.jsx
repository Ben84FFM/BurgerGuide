import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchNavBar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleResults, setVisibleResults] = useState(5);

  const dropdownRef = useRef(null);

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

    fetchData();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

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
    <div className='flex flex-col text-cbb26a'>
      <div className=''>
        <form
          onSubmit={handleSubmit}
          className='flex flex-row items-center space-x-2'
        >
          <input
            type='text'
            value={search}
            onChange={handleInputChange}
            placeholder='Search...'
            className='px-3 py-2 text-zinc-600 rounded-md focus:outline-none focus:border-cbb26a mb-2 text-sm'
            style={{ width: '250px' }} 
          />
          <button
            type='submit'
            className='px-2 py-2 mb-2 rounded-md hover:bg-opacity-80 focus:outline-none scale-125 '
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>

      {searchResults.length > 0 && (
        <div
          ref={dropdownRef}
          className='bg-zinc-900 p-8 rounded-xl text-sm opacity-90'
        >
          <h2 className='mb-2'>Burger Stores</h2>
          <ul>
            {searchResults.slice(0, visibleResults).map((result) => (
              <Link
                to={`/store/${result._id}`}
                key={result._id}
                className='bg-white block mx-auto rounded-md mb-4 p-2 text-zinc-800'
              >
                {result.name}
              </Link>
            ))}
          </ul>
          {searchResults.length > visibleResults && (
            <button
              className='bg-zinc-800 p-2 rounded-md hover:bg-opacity-80 focus:outline-none imageBorderLogo hover:opacity-60'
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
          <div className='mx-auto sm:px-4 md:px-6 lg:px-8 text-xl font-bold text-cbb26a bg-black text-center imageBorderLogo py-2 px-4 rounded-md transition duration-300 hover:text-white mt-2'>
            <Link
              to='/addRestaurant'
              className='text-sm hover:text-white mt-2 underline'
            >
              Add your Favorite Store here !
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchNavBar;
