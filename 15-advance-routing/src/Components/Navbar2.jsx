import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()
    return (
        <div className='bg-cyan-900 p-3 text-black'>
            <button
                onClick={() => {

                    navigate('/')
                }}
                className='bg-yellow-600 p-2 rounded cursor-pointer active:scale-75 '
            >
                Back To Home
            </button>

            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='bg-emerald-400 p-2 rounded cursor-pointer active:scale-75 ml-3'
            >
                Prev Page
            </button>

            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='bg-emerald-400 p-2 rounded cursor-pointer active:scale-75 ml-3'
            >
                Next Page
            </button>


        </div>
    )
}

export default Navbar2