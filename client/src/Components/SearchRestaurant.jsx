import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SearchRestaurant = () => {

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleSeach = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/restaurant/search?restaurant=${search}`, { withCredentials: true });
            setSearchResults(response.data);
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            // toast.error('Error logging out'); 
        }
    };


    return (
<div className="max-w-md mx-auto p-4">
  <form onSubmit={handleSeach} className="flex items-center space-x-2">
    <input
      type='text'
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
</div>
    )
};

export default SearchRestaurant;