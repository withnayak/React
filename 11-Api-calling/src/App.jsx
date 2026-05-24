import React, { useState } from 'react'

const App = () => {
    const [data, setdata] = useState([])

  const getData = async () =>{
    
   const url =  await fetch('https://jsonplaceholder.typicode.com/albums')
   const response = await url.json()
   
  setdata(response)
  console.log('clicked',response)
   }
       return(
         <div>
            <button
                onClick={getData}
                >
                Get Data
            </button>
            {data.map(function(elem,idx){
                return <div key={idx}>
                    <h3>hi {elem.id} and {elem.title}</h3>
                </div>
            })}
        </div>
    )
}

export default App