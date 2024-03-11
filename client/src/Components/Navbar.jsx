import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn, userData } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        `http://localhost:5000/auth/logout`,
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <div className='container flex  bg-gradient-to-r from-black via-gray-800 to-gray-900  p-4 text-base  text-cbb26a'>

      <div className="flex-1 flex flex-col  md:flex-row items-center">
        <Link to='/' className='cursor-pointer hover:opacity-80  pl-4'>Home</Link>
        <Link to='/burgerstores' className='cursor-pointer hover:opacity-80 sm:p-4 md:pr-12'>Stores</Link>
      </div>

      <div className=" bg-center flex items-center " ><h1 className='text-6xl font-serif ' style={{ transform: 'scalex(0.7)' }} >BurgerGuide</h1></div>


      <div className="flex-1 flex justify-end items-center">
        <Link to='/about' className='cursor-pointer hover:opacity-80 sm:p-4 md:pr-12'>ABOUT US</Link>
        {isLoggedIn ? (

          <div className='flex flex-col  md:flex-row pr-8 '>
            <p className='pr-8'>Welcome {userData.firstName}</p>
            <button className='cursor-pointer hover:opacity-80' onClick={handleLogout}>LOGOUT</button>
          </div>

        ) : (
          <Link to='/login' className='cursor-pointer hover:opacity-80 '>LOGIN</Link>
        )}
      </div>


    </div>
  );
}

export default Navbar;