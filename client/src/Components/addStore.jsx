import React, { useState } from 'react';
import axios from 'axios';
import PolicyBackground from './DynamicBackground';

const AddStoreForm = () => {
  const [storeName, setStoreName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [website, setWebsite] = useState('');
  const [phonenumbers, setPhonenumbers] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const addStore = async () => {
    const storeData = {
      name: storeName,
      location: {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
      address: {
        street: street,
        zipCode: zipCode,
        city: city,
      },
      website: website,
      phonenumbers: phonenumbers.split(',').map((phone) => phone.trim()),
      images: imageUrl,
    };

    try {
      const response = await axios.post(
        'https://burgerguide-ecdo.onrender.com/stores',
        storeData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        alert('Store erfolgreich hinzugefügt!');
      } else {
        alert(`Fehler: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Stores:', error);
      alert('Fehler beim Hinzufügen des Stores');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStore();
  };

  return (
    <PolicyBackground>
      <div className='container flex justify-center items-center bg-transparent pb-8'>
        <div className='bg-opacity-90 justify-center bg-black rounded-xl mt-8 mb-4 pr-6 pl-6 '>
          <img
            src='../src/assets/BurgerGuideLogo3.png'
            alt='BurgerGuideLogo'
            className='container h-auto rounded-md mb-4 pr-6 pl-6'
          />

          {/* Container add Store */}
          <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='container max-w-md '>
              <label className='text-cbb26a font-bold'>Restaurant Name</label>
              <input
                type='text'
                value={storeName}
                placeholder='Restaurant Name'
                onChange={(e) => setStoreName(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1 '
                required
              />

              <label className='text-cbb26a font-bold'>Street</label>
              <input
                type='text'
                value={street}
                placeholder='Street'
                onChange={(e) => setStreet(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1 '
                required
              />
              <label className='text-cbb26a font-bold'>ZIPCODE</label>
              <input
                type='text'
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder='Zipcode'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />

              <label className='text-cbb26a font-bold'>City</label>
              <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='City'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />
              <label className='text-cbb26a font-bold'>Image</label>
              <input
                type='text'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder='Image URL'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />
              <label className='text-cbb26a font-bold'>Longtidue</label>
              <input
                type='text'
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder='Longitude'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />
              <label className='text-cbb26a font-bold'>Latitude</label>
              <input
                type='text'
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder='Latitude'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />

              <label className='text-cbb26a font-bold'>Website</label>
              <input
                type='text'
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder='Website'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />

              <label className='text-cbb26a font-bold'>Phone Number</label>
              <input
                type='text'
                value={phonenumbers}
                onChange={(e) => setPhonenumbers(e.target.value)}
                placeholder='Tel.'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4 mt-1'
                required
              />

              <button
                type='submit'
                className='flex justify-center mx-auto sm:px-4 md:px-6 lg:px-8 text-xl font-bold text-cbb26a bg-black text-center imageBorderLogo py-2 px-4 rounded-md transition duration-300 hover:text-white mt-6 mb-8'
              >
                Add Store
              </button>
            </form>
          </div>
        </div>
      </div>
    </PolicyBackground>
  );
};

export default AddStoreForm;
