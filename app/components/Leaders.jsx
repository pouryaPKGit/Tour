import React from 'react'
import {leaders} from "../../Data/Data"
import LeadersCard from './LeadersCard'
const Leaders = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-40" id='Leaders'>
        <h1 className="text-zinc-800 text-4xl font-bold border-b-[4px] border-orange-500 pb-2">
          Our Leaders
        </h1>
        <p className="text-zinc-700 mt-4 sm:block hidden">
          experiences tailored to your desires. From serene getaways
        </p>
        <p className="text-zinc-700 sm:mt-0 mt-3">and cultural adventures to thrilling the-clock</p>
      </div> 

      <div className='flex flex-wrap gap-6 mt-20 items-center justify-center'>
        {
            leaders.map((leader,index) => (
                <LeadersCard 
                key={index}
                img={leader.img}
                name={leader.name}
                country={leader.country}
                />
            ))
        }
      </div>
    </>
  )
}

export default Leaders
