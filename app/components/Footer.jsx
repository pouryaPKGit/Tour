import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-500 text-white flex flex-wrap gap-4 items-center justify-center mt-20 py-10'>
       
      <h1 className=''>© 2024 Establishment. All rights reserved.</h1>
      <div className='flex items-center gap-7'>
        |
        <p className='cursor-pointer hover:opacity-40 duration-200'>Privacy Policy</p>
        |
        <p className='cursor-pointer hover:opacity-40 duration-200'>Terms of Services</p>
      </div>
   
    </div>
  )
}

export default Footer
