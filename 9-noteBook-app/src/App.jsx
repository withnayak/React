import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const [delet, setDelet] = useState('')

  const submited = (e) => {
    e.preventDefault()

    const newTask = [...task]
    newTask.push({ title, details })

    setTask(newTask)

    setTitle('')
    setDetails('')

  }
  return (
    <div className=' lg:flex  bg-black h-screen text-white'>


      <form
        onSubmit={(e) => {
          submited(e)
        }}
        className='flex  p-10  items-start lg:w-1/2 flex-col gap-5'>
        <h1 className='font-bold font-serif text-4xl'>Add Notes..</h1>

        <input
          className=' w-full border-2 rounded px-5 py-2 outline-none font-medium'
          type="text"
          placeholder='Enter Notes Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

        <textarea
          className='p-5 h-40 border-2 rounded w-full items-start font-medium outline-none flex-row'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        >

        </textarea>
        <button
          className='bg-white text-black rounded w-full py-2 active:scale-90 font-medium  outline-none'

        >
          Add Note
        </button>

      </form>
      <div className='p-10 lg:w-1/2 gap-5 bg-gray-900 lg:border-l md:border-t-0 border-t  '>
        <h1 className='font-bold text-4xl font-serif '>your notes</h1>
        <div className='flex flex-wrap items-start justify-start p-2 gap-5 overflow-auto h-full'>

          {task.map(function (elem, idx) {
            return <div key={idx} className='bg-white min-h-55 w-45 p-4 rounded-2xl wrap-break-word text-black  bg-[url("https://i.pinimg.com/originals/12/fe/88/12fe8888863df6005142b3b7b41069fc.png")] bg-cover bg-center flex flex-col justify-between '>
              <div>
                <h2 className='font-semibold text-2xl border-b-2 leading-tight '>{elem.title}</h2>
                <h3 className='font-medium text-gray-600 pt-4 '>{elem.details}</h3>
              </div>
              <div className='flex flex-col pt-1 '>
                <button
                  onClick={() => {
                    setDelet(idx)
                    const newTask = [...task]
                    newTask.splice(delet, 1)
                    setTask(newTask)
                  }} className='w-full  bg-red-500 rounded-2xl text-white py-1 px-2 hover:bg-red-600 transition-colors '>Delete Notes</button>
              </div>
            </div>

          })}

        </div>
      </div>
    </div>

  )
}

export default App