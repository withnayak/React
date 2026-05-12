import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'
const Page1Content = (props) => {

  return (
    <div className='px-12 py-8 gap-10 h-[89vh] flex items-center justify-between'>
        <LeftContent /> 
        <RightContent users={props.users}/>
        
    </div>
  )
}

export default Page1Content