import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex  screen justify-between gap-5 mt-10 px-12'>
      <div className=' w-[40%] bg-red-400 py-6 px-9 rounded-2xl'>
        <h2 className='text-4xl font-medium'>0</h2>
        <h3 className='text-3xl font-bold'>New Task</h3>
      </div>
       <div className=' w-[40%] bg-blue-400 py-6 px-9 rounded-2xl'>
        <h2 className='text-4xl font-medium'>3</h2>
        <h3 className='text-3xl font-bold'>Accept Task</h3>
      </div>
       <div className=' w-[40%] bg-green-400 py-6 px-9 rounded-2xl'>
        <h2 className='text-4xl font-medium'>2</h2>
        <h3 className='text-3xl font-bold'>Failed Task</h3>
      </div>
       <div className=' w-[40%] bg-cyan-400 py-6 px-9 rounded-2xl'>
        <h2 className='text-4xl font-medium'>1</h2>
        <h3 className='text-3xl font-bold'>Complete Task</h3>
      </div>  
     
    </div>

  )
}
export default TaskListNumber;
