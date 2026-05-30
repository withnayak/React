import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-8 bg-blue-950'>
        <h1 className='text-2xl font-bold'>
            Monkey D Luffy
        </h1>
        <div className='flex items-center justify-between gap-15 underline text-lg'>
            <Link to='home'>Home</Link>
            <Link to ='contact'>Contact</Link>
            <Link to ='about'>About</Link>
             <Link to ='product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar