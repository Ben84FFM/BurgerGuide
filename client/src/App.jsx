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

// import BurgerStores from './Components/BurgerStores'
// import { Route, Routes } from 'react-router-dom';


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
      </Routes>
 <Footer />
    </>
  )
}

export default App
