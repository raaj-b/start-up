import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import GroceryList from './pages/GroceryList'
import KidsWearList from './pages/KidsWearList'
import MensWearList from './pages/MensWearList'
import WomensWearList from './pages/WomensWearList'
import ElectronicsList from './pages/ElectronicsList'
import InnerwearList from './pages/InnerwearList'
import FootwearList from './pages/FootwearList'

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
        <Route path='/check-out' element={<Checkout/>}/>
        <Route path='/grocery' element={<GroceryList/>}/>
        <Route path='/kids' element={<KidsWearList/>}/>
        <Route path='/mens' element={<MensWearList/>}/>
        <Route path='/women' element={<WomensWearList/>}/>
        <Route path='/electronics' element={<ElectronicsList/>}/>
        <Route path='/innerwear' element={<InnerwearList/>}/>
        <Route path='/footwear' element={<FootwearList/>}/>
      </Routes>
    </>
  )
}

export default App
