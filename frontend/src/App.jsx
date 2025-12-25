import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path="/product" element={<ProductDetail />} />

      </Routes>
    </>
  )
}

export default App
