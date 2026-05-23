import React from 'react'


const App = () => {
  const user = localStorage.setItem('user', 'nayak')
  const details = localStorage.getItem('user')
  console.log(details)
  // localStorage.removeItem('user')
  //console.log(details)

  const detail = {
      user : 'nayak ji',
      age : 18,
      maks : 99,
      classes : 10
    }
  localStorage.setItem('detail',JSON.stringify(detail))
  const users = JSON.parse(localStorage.getItem('detail'))

  console.log(users)
  return (
    <div>

    </div>
  )
}

export default App