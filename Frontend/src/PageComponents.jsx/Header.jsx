import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between p-12'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-4xl'> Nitish</span> </h1>
      <button className='bg-red-500 px-4 py-2 text-lg font-medium rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header
