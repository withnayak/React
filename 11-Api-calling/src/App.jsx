import axios from 'axios'
import { useState } from 'react'

const App = () => {
     const [data, setdata] = useState([])

    const getdata = async() =>{
       
        const url =await axios.get('https://picsum.photos/v2/list')

        setdata(url.data)
        console.log('click')
         console.log(url)
    }
  return (
    <div>
        <button
        onClick={getdata}>
            Get Data
        </button>
        <div >
           {data.map(function(elem,idx){
            return <div key={idx}>
                <h4>{idx} author name is {elem.author} </h4>
            </div>
           })}
        </div>
    </div>
   
   
  )
}

export default App