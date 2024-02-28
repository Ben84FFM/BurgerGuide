import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SpinnerDotted } from 'spinners-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Post() {
  const [sending, setSending] = useState(false);
  const [postData, setPostData] = useState({
    restaurant: '',
    ranking: '',
    comment: '',
    image_url: '',
    location: '',
  });

  // console.log(import.meta.env.VITE_API_URL);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/posts`,
        postData,
        { withCredentials: true }
      );
      if (response.status === 201) {
        setPostData({
          restaurant: '',
          ranking: '',
          comment: '',
          image_url: '',
          location: '',
        });
        setSending(false);
        navigate('/');
      }
    } catch (error) {
      setSending(false);
      toast.error(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  if (sending) {
    return (
      <div className=''>
        <SpinnerDotted
          size={50}
          thickness={100}
          speed={100}
          color='rgba(57, 107, 172, 1)'
        />
      </div>
    );
  }

  return (
    <div className='container mx-auto max-w-md mt-20 rounded-xl shadow-xl shadow-gray-500'>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Create a Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <p className='block mb-2'>restaurant:</p>
            <input
              type='text'
              name='restaurant'
              value={postData.restaurant}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <p className='block mb-2'>ranking:</p>
            <input
              type='text'
              name='ranking'
              value={postData.ranking}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <p className='block mb-2'>comment:</p>
            <input
              type='text'
              name='comment'
              value={postData.comment}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <p className='block mb-2'>Image-url:</p>
            <input
              type='text'
              name='image_url'
              value={postData.image_url}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <p className='block mb-2'>location:</p>
            <input
              type='text'
              name='location'
              value={postData.location}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white rounded p-2 mt-4'
          >
            POST
          </button>
        </form>


      </div>
    </div>
  );
}

export default Post;