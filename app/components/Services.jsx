import React from 'react'
import {ourServices} from "../../Data/Data"
import ServicesCard from './ServicesCard'
const Services = () => {
  return (
    <>
    
       <div className="flex flex-col items-center mt-40" id='Services'>
        <h1 className="text-zinc-800 text-4xl font-bold border-b-[4px] border-orange-500 pb-2">
          Our Services
        </h1>
        <p className="text-zinc-700 mt-4 sm:block hidden">
          experiences tailored to your desires. From serene getaways
        </p>
        <p className="text-zinc-700 sm:mt-0 mt-3">and cultural adventures to thrilling the-clock</p>
      </div> 
      <div className='flex flex-wrap items-center justify-center gap-9 mt-20'>
        {ourServices.map((services, index) => (
            <ServicesCard key={index} 
            title={services.title}
            icon={services.icon}
            />
        ))}
      </div>
    </>
  )
}

export default Services
