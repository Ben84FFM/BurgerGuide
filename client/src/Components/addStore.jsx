import React, { useState } from 'react';
import axios from 'axios';

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
        'http://localhost:5000/stores',
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
    <div className='containerBG bg-black '>
      <div className='containerImg flex flex-col items-center max-w-screen-xl mx-auto relative'>
        <img
          src='../src/assets/LandingPage.jpg'
          alt='LandingPageLogo'
          className='w-full object-fill h-auto max-w-screen-xl'
        />
        <img
          src='../src/assets/LandingPageLogo2.jpg'
          alt='LandingPageLogo2'
          className='w-full object-fill h-auto max-w-screen-xl'
        />
        <div className='containerLogoTextBox bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black rounded-xl '>
          <img
            src='../src/assets/BurgerGuideLogo3.png'
            alt='BurgerGuideLogo'
            className='w-1/2 h-auto rounded-md mb-4'
          />
          <div className='containerTextBox text-center'>
            <div
              style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}
            >
              <h2 className='text-cbb26a font-bold mb-4'>Add new Restaurant</h2>

              <form onSubmit={handleSubmit}>
                <label className='text-cbb26a font-bold'>Restaurant Name</label>
                <input
                  type='text'
                  value={storeName}
                  placeholder='Restaurant Name'
                  onChange={(e) => setStoreName(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />

                <label className='text-cbb26a font-bold'>Street</label>
                <input
                  type='text'
                  value={street}
                  placeholder='Street'
                  onChange={(e) => setStreet(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />
                <label className='text-cbb26a font-bold'>ZIPCODE</label>
                <input
                  type='text'
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder='Zipcode'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />

                <label className='text-cbb26a font-bold'>City</label>
                <input
                  type='text'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder='City'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />
                <label className='text-cbb26a font-bold'>Image</label>
                <input
                  type='text'
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder='Image URL'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />
                <label className='text-cbb26a font-bold'>Longtidue</label>
                <input
                  type='text'
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder='Longitude'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />
                <label className='text-cbb26a font-bold'>Latitude</label>
                <input
                  type='text'
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder='Latitude'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />

                <label className='text-cbb26a font-bold'>Website</label>
                <input
                  type='text'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder='Website'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />

                <label className='text-cbb26a font-bold'>Phone Number</label>
                <input
                  type='text'
                  value={phonenumbers}
                  onChange={(e) => setPhonenumbers(e.target.value)}
                  placeholder='Tel.'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cbb26a mb-4'
                  required
                />

                <button
                  type='submit'
                  className='bg-cbb26a text-white font-bold px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none shadow-md border border-gray-500 mt-4'
                >
                  Add Store
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStoreForm;