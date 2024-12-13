import React from 'react'
import Image from 'next/image'

const PackageCard = ({ img, title, price }) => {
  return (
    <div className="group" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Image src={img} alt="services" width={350} height={350} className=' rounded-t-md' />
      <div className="bg-white shadow-md h-[100px] pt-5 pl-5 flex flex-col  group-hover:bg-orange-500 transition-all duration-500 delay-200  rounded-b-md">
        <div className="flex justify-between mr-3">
          <h3 className="text-xl font-semibold group-hover:text-white text-zinc-800 transition-all duration-500">
            {title}
          </h3>
          <button className="  bg-orange-500 text-white rounded-md p-2 group-hover:bg-white group-hover:text-orange-500 transition-all duration-500">
            Book Now
          </button>
        </div>
        <span className="group-hover:text-white text-zinc-600 transition-all duration-500">
          From ${price}
        </span>
      </div>
    </div>
  )
}

export default PackageCard
