import React, { useState } from 'react'

const App = () => {
  const [user, setuser] = useState({ user: "NAYAK", age: 17 })
  const [num, setnum] = useState(0)
  const [arr, setarr] = useState(["susma", "aditi", "ani"])


  const btnClick = () => {
   //setuser(prev=>({...prev,age:18,user:'Sid'}))
    const newUser = { ...user }

    newUser.age = 19
    setuser(newUser)
  }

  const count = () => {
   
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
    
  }
  const array = () =>{
   
    const newArr=[...arr]
    newArr.push(90)
    newArr.pop[2]
    setarr(newArr)
  }


  return (
    <div>
      <div>
        <h1>Hiii {user.user} i confirmed  that your age is {user.age} to update your age just click the button</h1>
        <button onClick={btnClick}>click me!</button>
      </div>
      <div className='box'>
        <h2>{num}</h2>
        <button onClick={count}>
          click
        </button>
      </div>
     <h1>{arr[2]}</h1>
      <button onClick={array}>click me!</button>
    </div>
  )
}

export default App