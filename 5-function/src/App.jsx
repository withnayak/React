import React from 'react'

const App = () => {
  const btnckicked =(elem
    
  )=>{
    console.log ('button clicked',elem)
  }
  return (
    <div className='bg-gray-700 h-screen w-screen '>
     <div className='flex items-center justify-center p-50'>
       <button onClick={(elem)=>{
        btnckicked(elem.clientY)
      }} className='bg-blue-500 text-white px-4 py-2 rounded-full  '>
        click to get position!😂
      </button>
     </div>
    </div>
  )
}

export default App