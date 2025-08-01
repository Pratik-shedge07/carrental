import React, { useState } from 'react'
import Navbar from './components/navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  const[showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startWith ('/owner')

  return (
    <div>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
    </div>
  )
}

export default App
