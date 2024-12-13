import React from 'react';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

const LeadersCard = ({ img, name, country }) => {
  return (
    <div className="relative group w-72 h-72 overflow-hidden" data-aos="flip-left">
      <Image 
        src={img} 
        alt="image" 
        width={300} 
        height={300} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-lg"
      />
      <div className="absolute inset-0 bg-orange-600 bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
        <p className="text-white text-3xl font-bold">{name}</p>
        <p className='text-white mt-3 text-xl font-semibold'>Leader of {country}</p>
        <div className='flex items-center gap-3 mt-5 text-white'>
            <span className='border border-white rounded-full p-1 hover:bg-white hover:text-black cursor-pointer duration-300'><FaXTwitter /></span>
            <span className='border border-white rounded-full p-1 hover:bg-white hover:text-black cursor-pointer duration-300'><LiaTelegram /></span>
            <span className='border border-white rounded-full p-1 hover:bg-white hover:text-black cursor-pointer duration-300'><FaInstagram /></span>
           
        </div>
      </div>
    </div>
  );
};

export default LeadersCard;
