import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthProvider';
import SearchNavBar from './SearchNavBar';

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
    <div className='container flex flex-col h-72 lg:flex-row lg:h-32 bg-gradient-to-r from-black via-zinc-800 to-black p-4 text-base  text-cbb26a relative z-10 NavbarBorder '>
      <div
        className=' flex-1 flex flex-col xl:flex-row 
      text-lg uppercase font-bold pt-4 '
      >
        <div className='flex justify-center items-center '>
          <Link to='/' className=' px-4 cursor-pointer hover:opacity-80  '>
            Home
          </Link>
          <Link
            to='/burgerstores'
            className=' px-4 cursor-pointer hover:opacity-80   '
          >
            Stores
          </Link>
        </div>

        <div className='flex justify-center relative z-1 pt-4'>
          {' '}
          <SearchNavBar />
        </div>
      </div>

      <div className=' bg-center flex items-center justify-center '>
        <h1
          className='text-6xl font-bold'
          style={{ transform: 'scalex(1)', fontFamily: 'Alex Brush, cursive' }}
        >
          BurgerGuide
        </h1>
      </div>

      <div className=' flex-1 flex justify-center items-center flex-col xl:flex-row text-lg uppercase font-bold pr-4'>
        <Link to='/about' className=' px-4  cursor-pointer hover:opacity-80   '>
          ABOUT US
        </Link>
        {isLoggedIn ? (
          <div className='flex flex-col  lg:flex-row '>
            <p className='px-4'>Welcome {userData.firstName}</p>
            <button
              className='px-4  cursor-pointer hover:opacity-80'
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <Link to='/login' className='cursor-pointer hover:opacity-80'>
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
