import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Product from './Pages/Product'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import PageNot from './Pages/PageNot'


const App = () => {
  return (
    <div className='bg-black text-white h-screen '>

      <Navbar />
      <Footer />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='product' element = {<Product/>}>
            <Route path='mens' element ={<Mens/>}/>
            <Route path='womens' element ={<Womens/>}/>
            <Route path='kids' element ={<Kids/>}/>

        </Route>
        <Route path='*' element = {<PageNot/>}/>
      </Routes>
      <div>

      </div>
    </div>
  )
}

export default App