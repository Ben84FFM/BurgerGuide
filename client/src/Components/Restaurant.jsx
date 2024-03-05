import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';
import axios from 'axios';


function Restaurant() {
  const [rest, setrest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/restaurant/${id}`);
        setrest(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div >
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
  if (error) { return (<div ><p>Server not available, please try again later</p></div>); }



  return (
    <div className='Card lg:w-1/4 h-full m-4 border-2 border-slate-50 rounded-xl shadow-xl shadow-gray-500' key={rest._id}>
      <div className='flex flex-col m-4 '>
        <h2 className='text-3xl font-semibold mb-4 text-center'>   {rest.restaurant}  </h2>
        <h4 >  {rest.street}  </h4>
        <h4 >  {rest.city}  </h4>

        {/* <h4 >  {rest.website}  </h4>
      <h4 >  {rest.phonenumbers}  </h4>
      <h4 >  {rest.rating}  </h4> */}

        {/* <img src={rest.image_url} alt={rest.restaurant} /> */}


      </div>
    </div>
  );
}

export default Restaurant;
