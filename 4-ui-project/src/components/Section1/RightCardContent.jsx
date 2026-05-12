
const RightCardContent = (props) => {
  return (
    

            <div className=' absolute top-0 left-0 h-full w-full p-8'>
                <h2 className='bg-white text-black rounded-full flex justify-center items-center h-10 w-10 '>{props.idx}</h2>
                <div className='mt-55'>
                    <p className='text-white '>{props.text}</p>
                </div>
                <div className="flex">
                    <button style={{backgroundColor:props.color}} className=' rounded-4xl px-6 py-2 mt-15 cursor-pointer'>{props.tag}</button>
                    <button  className='rounded-4xl px-4 py-2 mt-15 cursor-pointer text-white' ><i className="ri-arrow-right-line"></i></button>
                </div>

            </div>
        
  )
}

export default RightCardContent