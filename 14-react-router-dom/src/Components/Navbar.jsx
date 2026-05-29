import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-blue-500 text-white flex items-center justify-between  p-5'>
        <h1>ROYS COMPANY</h1>
       <div className='flex gap-8 justify-between underline'>
         <Link to ='/'>Home</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/about'>About</Link> 
        <Link to= 'product'> Product</Link>
       </div>
    </div>
  )
}

export default Navbar