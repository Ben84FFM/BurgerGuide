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
    <div className='Navbar 
      flex justify-between items-center 
      bg-black p-4 font-bold'>
      <Link to='/' className='cursor-pointer hover:opacity-80        text-lg font-bold text-cbb26a'><h1 className='text-lg '>Home</h1></Link>
      <img src="../src/assets/BurgerGuideLogo2.png" alt="Logo" className="h-8 w-8" />
      <div className="flex flex-grow justify-around items-center space-x-4">
        {isLoggedIn ? (
          <div className='flex flex-row '>
            <p >Welcome {userData.firstName}</p>
            <Link to='/about' className='cursor-pointer hover:opacity-80 text-lg font-bold text-cbb26a '> About</Link>
            <Link to='/burgerstores' className='cursor-pointer hover:opacity-80   text-lg font-bold text-cbb26a'><h1 className=''>Stores</h1></Link>
            <button className='cursor-pointer hover:opacity-80 text-lg font-bold text-cbb26a ' onClick={handleLogout}>LOGOUT</button>
          </div>
        ) : (
          <Link to='/login' className='cursor-pointer hover:opacity-80 text-lg font-bold text-cbb26a'>LOGING</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;