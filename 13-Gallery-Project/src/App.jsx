import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState([])
  const Data = async () => {

    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=40')
    setData(response.data)
    console.log(response.data)
  }

  let printData = 'no data found!!!'
  if (data.length > 0) {
    printData = data.map(function (elem, idx) {
      return <div key={idx}>

        <div className=' bg-white h-70 w-85 rounded-2xl ' >
         <a href={elem.url}>
           <img src={elem.download_url} alt=""
            className='h-full w-full object-cover ' />
         </a>
        </div>
        <h2>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen overflow-auto p-5 text-white'>
      <button
        className='bg-red-500 p-5 rounded-2xl ml-28'
        onClick={() => {
          console.log("btn click")
          Data()


        }}
      >
        Get Data!
      </button>
      <div
        className='flex flex-wrap gap-3 p-10 text-3xl font-semibold text-white'>
        {printData}

      </div>


    </div>
  )
}

export default App