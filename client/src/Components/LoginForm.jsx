import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import PolicyBackground from './DynamicBackground';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        navigate('/');
        setIsLoggedIn(true);
        checkUser();
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <PolicyBackground>
  <div className='containerBen1 bg-black'>

    <div className="Login absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20 rounded xl shadow-xl shadow-ray-300 flex bg-opacity-70 bg-black rounded-md">
    <div className='containerLogin mt-20 mx-auto rounded-xl shadow-xl shadow-gray-500'>
      <div className='rounded p-4 bg-opacity-70'>
        <h2 className='text-cbb26a text-lg font-bold mb-4'>Login</h2>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='Email mb-4'>
            <p className='block mb-2 text-cbb26a'>Email</p>
            <input className='border rounded w-full p-2'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='Password mb-4'>
            <p className='block mb-2 text-cbb26a'>Password</p>
            <input className='border rounded w-full p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className= 'rounded p-2 mt-2 text-cbb26a text-lg font-bold mb-4' type='submit'> Login </button>
          <p className='mt-4'> <Link to='/register' className='underline text-cbb26a'>Register here</Link> </p>
        </form>
      </div>
    </div>
    </div>
    
    </div>
    </PolicyBackground>
  );
}

export default LoginForm;