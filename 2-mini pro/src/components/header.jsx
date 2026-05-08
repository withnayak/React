import React from 'react'

const header = () => {
  return (
    <div>
      <header className='top'>
        <div className='logo'>
          <img src="https://i.pinimg.com/1200x/b4/24/b7/b424b7a47835d9d814c0a32268054200.jpg" alt="" />
          <span>Roys Directory</span>
        </div>
        <div >
          <span className='quarry'>
            <ul>
              <li>HOW IT WORKS</li>
              <li>BROWSE <i className="fa-solid fa-angle-down"></i> </li>
              <li>SEARCH</li>
              <li className='Pblue'>START A PROFILE</li>
              <li className='Ablue'>ADD YOUR AGENCY</li>
            </ul></span>
        </div>
      </header>
    </div>
  )
}

export default header