import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
         
         <div className='flex items-center justify-center gap-15 underline text-lg '>
            <Link to= '/product/mens'>Mens</Link>
            <Link to= '/product/kids'>Kids</Link>
           <Link to= '/product/womens'>Womens</Link>
         </div>
         <Outlet/>
    </div>
  )
}

export default Product