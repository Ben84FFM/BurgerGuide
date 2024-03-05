import { useState } from 'react';
import axios from 'axios';


const SearchRestaurant = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/restaurant/search?restaurant=${search}`, { withCredentials: true });
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Handle error (e.g., toast.error('Error searching'));
    }
  };

  return (
    <div className="containerBG bg-black ">
      <div className="containerImg flex flex-col items-center max-w-screen-xl mx-auto relative ">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black border-slate-50 rounded-xl shadow-xl shadow-gray-500">
          <div className="text-center bg-opacity-70">
            <div className='bg-black container mx-auto max-w-md rounded-xl shadow-xl shadow-gray-500'>
              <div className="max-w-md mx-auto p-4">
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                    <h2 className='text-cbb26a mb-2'>Search Results:</h2>
                    <ul>
                      {searchResults.map((result) => (
                        <li className="text-cbb26a" key={result._id}>{result.restaurant} </li>
                      ))}
                    </ul>
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