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

      {/* Anzeige der Suchergebnisse */}
      {loading && <p>Loading...</p>}
      {error && <p>Error loading results.</p>}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result._id}>{result.restaurant}</li>
              // Füge hier weitere Informationen hinzu, die du anzeigen möchtest
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchRestaurant;