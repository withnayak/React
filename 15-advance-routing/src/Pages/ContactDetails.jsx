import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {

   const params =  useParams()
   console.log(params)
  return (
    <div>
        <h1 className='flex absolute bottom-0 inset-x-0 mb-100 text-6xl font-bold justify-center'>{params.id} Details Page....</h1>
    </div>
  )
}

export default ContactDetails