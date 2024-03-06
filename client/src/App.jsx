import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BurgerRating from './Components/BurgerRating'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './Components/Hero'
import RegisterForm from './Components/RegisterForm'
import LoginForm from './Components/LoginForm'
import Post from './Components/Post'
import AddRestaurantForm from './Components/addRestaurant'
import AboutUs from './Components/AboutUs'
import SearchTest from './Components/SearchTest'
import StoreDetails from './Components/StoreDetail'
import StoreCarousel from './Components/StoreCarousel'
// import Search from './Components/Search'
import Restaurant from './Components/Restaurant'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
  <Route path="/about" element={<AboutUs />} />
  <Route path="/burgerstores" element={<SearchTest />} />
  <Route path='/restaurant/:id' element={<Restaurant />} />
  <Route path="/" element={<HeroSection />} />
  <Route path='/register' element={<RegisterForm />} />
  <Route path='/login' element={<LoginForm />} />
  <Route path="/store/:storeId" element={<StoreDetails />} />
  {/* <Route path='/posts' element={<Post />} /> */}
  <Route path='/rating' element={<BurgerRating />} />
  <Route path='/addrestaurant' element={<AddRestaurantForm />} />
</Routes>
      <Footer />
    </>
  )
}

export default App
