import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './pages/Product'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create-product' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App
