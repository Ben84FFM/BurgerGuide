import React, { useState } from 'react';
import axios from 'axios';

const AddRestaurantForm = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [website, setWebsite] = useState('');
  const [phonenumbers, setPhonenumbers] = useState('');

  const addRestaurant = async () => {
    const restaurantData = {
      restaurant: restaurantName,
      street: street,
      city: city,
      coordinates: coordinates,
      website: website,
      phonenumbers: [phonenumbers],
    };

    try {
      const response = await axios.post('http://localhost:5000/restaurant', restaurantData);

      if (response.status === 201) {
        alert('Restaurant erfolgreich hinzugefügt!');
      } else {
        alert(`Fehler: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Restaurants:', error);
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
      <h2>Add new Restaurant</h2>

      <label>Name of Restaurants:</label>
      <input
        type="text"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Straße:</label>
      <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Stadt:</label>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      {/* <label>Koordinaten:</label>
      <input
        type="text"
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      /> */}

      <label>Website:</label>
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Telefonnummern:</label>
      <input
        type="text"
        value={phonenumbers}
        onChange={(e) => setPhonenumbers(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <button
        onClick={addRestaurant}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Restaurant hinzufügen
      </button>
    </div>


          </div>
        </div>
      </div>
    </div>
  );
    }
  export default AddRestaurantForm;