import React, { useState } from 'react'

const App = () => {
  const [score, setscore] = useState(0)
  function increase(){
    setscore(score+1)
  }
  function decrease(){
    setscore(score-1)
  }
  function multiplayBy5(){
    setscore(score*5)
  }
  function delet(){
    setscore(0)
  }

  return (
  <div className='flex items-center justify-center flex-col bg-black h-screen'>
    <div  className='bg-purple-500 text-8xl h-80 w-100 flex items-center justify-center rounded-4xl   '>
      {score}
    </div>
    <div className=' mt-6'>
 <button onClick={increase} className='bg-green-400 p-4 rounded-3xl mr-14 h-25 w-30 cursor-pointer'>increase</button>
    <button onClick={decrease} className='bg-yellow-400 p-4 rounded-3xl  h-25 w-30 cursor-pointer'>decrease</button>
    </div>
    <div>
      <button onClick={ multiplayBy5} className='bg-pink-300 p-4 rounded-3xl mt-2 mr-14 h-25 w-30 cursor-pointer'>*5</button>
       <button onClick={delet} className='bg-red-400 p-4 rounded-3xl mt-2  h-25 w-30 cursor-pointer'>delete</button>
    </div>
    </div>
  )
}

export default App