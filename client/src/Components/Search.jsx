import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StoreCarouselSearch from './StoreCarouselSearch';
import PolicyBackground from './DynamicBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
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
    <div className="flex flex-col text-cbb26a ">

      <div className=" ">
        <form onSubmit={handleSubmit} className="flex flex-row items-center space-x-2">
          <input type="text" value={search} onChange={handleInputChange} placeholder="Search..."
            className="flex-grow px-3 py-2  rounded-md focus:outline-none focus:border-cbb26a mb-2"
          />
          <button type="submit" className="bg-black  px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none border border-gray-500">
            <FontAwesomeIcon icon={faSearch} className="" />  Search</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>Error loading results.</p>}
      </div>

      {searchResults.length > 0 && (
        <div className=" ">
          <h2 className="">Your Results</h2>
          <ul>
            {searchResults.slice(0, visibleResults).map((result) => (
              <Link
                to={`/store/${result._id}`}
                key={result._id}
                className="bg-white block mx-auto rounded-xl mb-4 p-4"
              >
                {result.name}
              </Link>
            ))}
          </ul>
          {searchResults.length > visibleResults && (
            <button className="bg-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none  " onClick={handleLoadMore}>Load More</button>)}
        </div>
      )}


    </div>
  );
};

export default Search;