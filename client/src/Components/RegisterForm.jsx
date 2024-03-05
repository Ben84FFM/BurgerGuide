import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(

        `http://localhost:5000/auth/register`,

        {
          firstName,
          lastName,
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        toast.success('Successfully registered! Welcome');
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response.data.error || 'Registration failed');
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
      <div className='p-4'>
        <h2 className='text-cbb26a text-xl font-bold mb-4'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <p className='text-cbb26a block mb-2'>First Name:</p>
            <input className='border rounded w-full p-2'
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <p className='text-cbb26a block mb-2'>Last Name:</p>
            <input className='border rounded w-full p-2'
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <p className='text-cbb26a block mb-2'>Username:</p>
            <input className='border rounded w-full p-2'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <p className='text-cbb26a block mb-2'>Email:</p>
            <input className='border rounded w-full p-2'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <p className='text-cbb26a block mb-2'>Password</p>
            <input className='border rounded w-full p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className=' text-cbb26a font-bold mb-4 rounded p-2 mt-2' type='submit'>  Register   </button>
        </form>
        <p className='mt-4'><Link to='/login' className=' text-cbb26a underline'>  Login here   </Link>  </p>
      </div>
    </div>
    
            </div>
          </div>
        </div>
      </div>
    );
    }
  
  export default RegisterForm;