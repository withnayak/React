import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'


const App = () => {
  return (
    <div className='bg-black text-white h-screen '>

      <Navbar />
      <Footer />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Routes>
      <div>

      </div>
    </div>
  )
}

export default App