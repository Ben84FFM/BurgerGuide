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
        <div>
            <form onSubmit={handleSeach}>
                <p></p><input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" >Search Restaurant</button>
            </form>
        </div>
    )
}

    ;
export default SearchRestaurant;