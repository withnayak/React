import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState([])
  const Data = async () => {

    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=12')
    setData(response.data)
    console.log(response.data)
  }
  useEffect(function () {
    Data()
  }, [])

  let printData = 'no data found!!!'
  if (data.length > 0) {
    printData = data.map(function (elem, idx) {
      return <div key={idx}>

        <div className=' bg-white h-70 w-85 rounded-2xl ' 
        >
          <a href={elem.url} target='_blank'
          >
            <img src={elem.download_url} 
            alt="this image is generated through api if fail to load check internet connection or reload the site"
              className='h-full w-full object-cover ' />
          </a>

        </div>
        <h2>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen overflow-auto p-5 text-white'>

      <div
        className='flex flex-wrap gap-3 p-10 text-3xl font-semibold text-white'>
        {printData}

      </div >
      <div className='flex justify-center gap-6'>

        <button
        className='bg-red-500 p-5 cursor-pointer active:scale-40 hover:bg-amber-600 rounded-3xl '
       >
        Prev!
      </button>

      <h2 className='bg-gray-500 p-5 rounded-3xl '>Page no</h2>

      <button
        className='bg-red-500 p-5 cursor-pointer active:scale-40 hover:bg-amber-600 rounded-3xl '
       >
        Next!
      </button>
      </div>
    </div>
    
  )
}

export default App