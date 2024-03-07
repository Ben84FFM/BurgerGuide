import React, { useState } from 'react';
import axios from 'axios';

const AddStoreForm = () => {
  const [storeName, setStoreName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [phonenumbers, setPhonenumbers] = useState('');

  const addStore = async () => {
    const storeData = {
      name: storeName,
      street: street,
      city: city,
      website: website,
      phonenumbers: [phonenumbers],
    };
  
    try {
      console.log('Sending data to server:', storeData);
  
      const response = await axios.post('http://localhost:5000/stores', storeData, { withCredentials: true });
  
      console.log('Server response:', response);
  
      if (response.status === 201) {
        alert('Store erfolgreich hinzugefügt!');
      } else {
        alert(`Fehler: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Stores:', error);
    }
  };

  return (
    <div className="containerBG bg-black ">
      <div className="containerImg flex flex-col items-center max-w-screen-xl mx-auto relative">
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
        <div className="containerLogoTextBox bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black rounded-xl ">
          <img
            src="../src/assets/BurgerGuideLogo3.png"
            alt="BurgerGuideLogo"
            className="w-1/2 h-auto rounded-md mb-4"
          />
          <div className="containerTextBox text-center">
            <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}>
              <h2 className='text-cbb26a font-bold mb-4'>Add new Store</h2>

              <label className='text-cbb26a font-bold mb-4'>Store</label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />

              <label className='text-cbb26a font-bold mb-4'>Street</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />

              <label className='text-cbb26a font-bold mb-4'>Stadt:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />

              <label className='text-cbb26a font-bold mb-4'>Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />

              <label className='text-cbb26a font-bold mb-4'>Phonenumber</label>
              <input
                type="text"
                value={phonenumbers}
                onChange={(e) => setPhonenumbers(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />

              <button
                onClick={addStore}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Add Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStoreForm;