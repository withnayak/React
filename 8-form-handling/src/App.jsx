import React, { useState } from 'react'

const App = ()  => {
  const [title, setTitle] = useState('')
const btnclicked=(e) =>{
  e.preventDefault()
  console.log("your form is submited thank you",title,", check your email for further query")
  setTitle('')
}
  return (
    <div>
      <form onSubmit={(e)=>{
        btnclicked(e)
        
      }}>
      <input type="text" 
      placeholder=' Enter your name'
      value={title}
      onChange={(e)=>{
       setTitle(e.target.value)
      }}/>
      <button>click me</button>
      </form>
    </div> 
  )
}

export default App 