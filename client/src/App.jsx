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
import Search from './Components/Search'
import AddRestaurantForm from './Components/addRestaurant'


function App() {


  return (
    <>
 <Navbar />
  <Routes>
  <Route path="/search" element={<Search />} />
                <Route path="/" element={<HeroSection/>} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/rating' element={<BurgerRating />} />
        <Route path='/addrestaurant' element={<AddRestaurantForm />} />
      </Routes>
 <Footer />
    </>
  )
}

export default App
