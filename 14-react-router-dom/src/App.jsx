import React from 'react'
import {Route ,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About'; 
import Navbar from './Components/Navbar';
import Product from './Pages/Product';
const App = () => {
  return (
    <div className='bg-black h-screen w-full text-white'>
       
      <Navbar />
      <Routes>
        <Route  path ='/' element = {<Home/>} />
         <Route  path ='/contact' element = {<Contact/>} />
          <Route  path ='/about' element = {<About/>} />
          <Route path='/product' element = {<Product/>}/>
      </Routes>
    </div>
  )
}

export default App