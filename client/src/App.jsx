import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import HeroSection from './Components/Hero';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import AddStoreForm from './Components/addStore';
import AboutUs from './Components/AboutUs';
import SearchStores from './Components/SearchStores';
import StoreDetails from './Components/StoreDetail';
import BurgerRating from './Components/StoreRating';
import PrivacyPolicy from './Components/dataPolicy';
import Impress from './Components/Impress';


function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/about" element={<AboutUs />} />
        <Route path="/burgerstores" element={<SearchStores />} />
        <Route path="/" element={<HeroSection />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/store/:storeId" element={<StoreDetails />} />
        <Route path='/addRestaurant' element={<AddStoreForm />} />
        <Route path="/reviewStore/:storeId" element={<BurgerRating />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/impress" element={<Impress />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;