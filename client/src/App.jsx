import React, { useState } from 'react'
import Navbar from './components/navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Car from './pages/Car'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </>
  )
}

export default App
