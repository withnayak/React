import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
     <div id='right' className='h-full w-3/4  rounded-4xl flex flex-nowrap overflow-x-auto gap-5 '>
   
   {props.users.map(function(elem,idx){
    return <div key={idx}>
    <RightCard img={elem.img} idx={elem.no} tag={elem.tag} text={elem.text} color={elem.color}/>
    </div> 
   }
  
  )}
        </div>
  )
}

export default RightContent