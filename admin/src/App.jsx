import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import VendorDetail from './pages/VendorDetail '
import UserDetail from './pages/UserDetail'
import OrderDetail from './pages/OrderDetail'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/admin/vendor/:id" element={<VendorDetail />} />
        <Route path="/admin/user/:id" element={<UserDetail />} />
        <Route path="/admin/order/:id" element={<OrderDetail />} />

      </Routes>
    </>
  )
}

export default App
