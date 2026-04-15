import React from 'react'
import Header from '../../PageComponents.jsx/Header'

const AdminDashboard = () => {
  return (
    <div className='min-h-screen w-full bg-gray-400 p-4 sm:p-6'>
       {/* <Header/> */}
    <div className='flex justify-center items-center  '>
    <div className='w-full max-w-md bg-white rounded-xl shadow-md sm:p-6 md:p-8 '>
        <form className='flex flex-col gap-2 p-4 ' >
        {/* <h1 className=''>Create Task</h1> */}
        <label className='text-medium font-semibold'>Task Title:</label>
        <input
        type='text'
        placeholder='Enter your task title'
        className=' border rounded px-7 py-2'/>
        <label className='text-medium font-semibold'>Description:</label>
        <textarea
        type='text'
        placeholder='Enter Description'
        className=' border rounded px-3 py-2 w-full resize-none'/>
        <label className='text-medium font-semibold '>Date:</label>
        <input
        type='date'
        placeholder='Enter Date'
        className=' border rounded px-3 py-2 w-full'/>
        <label className='text-medium font-semibold '>Assigned To:</label>
        <input
        type='text'
        placeholder='Enter name  of assigned to '
        className=' border rounded px-3 py-2 w-full'/>
        <label className='text-medium font-semibold'>Category:</label>
        <input
        type='text'
        placeholder='Enter task category'
        className=' border rounded px-3 py-2 w-full'/>

        <button className='py-3 bg-green-500 hover:bg-green-600 text-white mt-3 rounded font-semibold text-xl active:scale-95'>Create Task</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default AdminDashboard
