import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)
  useEffect(function () {
    console.log("use efffect is running....")
  },[num2])
  return (
    <div>
      <h1>if u want to change me just click the btn {num}</h1>
      <h1>if u want to cahnge me click the btn double time {num2}</h1>
      <button
        onClick={() => {
          setNum(num + 1)
        }}
        onDoubleClick={()=>{
          setNum2(num2+10)
        }}
      >
        Get Data!
      </button>
    </div>
  )
}

export default App