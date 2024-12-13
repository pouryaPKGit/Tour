import Image from 'next/image';
import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";


const ReviewsCard = ({ review }) => {
  const { image, name, profession, rating, text } = review;

  return (
    <div className=' overflow-hidden shadow-md m-4 mt-16'>
      
      <div className='  '>
        <div className='p-6 flex items-center space-x-6'>
          <div>
            <Image src={image} alt={name} width={80} height={80} className='rounded-full border-[3px] border-orange-500' />
          </div>
          <div>
            <h1 className='text-lg font-semibold text-orange-500'>{name}</h1>
            <p className='text-sm text-gray-700'>{profession}</p>
          </div>
        </div>
      </div>
      <div className='p-6 '>
      <BiSolidQuoteAltLeft className='text-orange-500 text-2xl' />
        <p className='  mt-4'>{text}</p>
        <BiSolidQuoteAltRight className='text-orange-500 text-2xl mt-3' />
      </div>
    
    </div>
  );
};
export default ReviewsCard
