import React from 'react'

const ServicesCard = ({ icon, title}) => {
  return (
    <div className='w-[280px] h-[310px] shadow-md flex flex-col gap-4 items-center hover:shadow-xl duration-500 hover:scale-105 group ' data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <span className='text-4xl border-2 border-orange-500 rounded-full mt-10 text-orange-500 group-hover:text-white group-hover:bg-orange-500 duration-300 p-5'>{icon}</span>
      <h1 className='text-2xl font-semibold text-zinc-700'>{title}</h1>
     <div className='flex flex-col items-center text-zinc-500 gap-1'> 
        <p>To reserve a cruise visit</p>
        <p>Booking a flight visit</p>
        <p>To book a hotel </p>
     </div>
    </div>
  )
}

export default ServicesCard
