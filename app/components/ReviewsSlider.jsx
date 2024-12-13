"use client";
import { clientReviews } from '../../Data/Data';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewsCard from './ReviewsCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3, // تعداد آیتم‌ها برای دسکتاپ
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Slider = () => {
  return (
    <div className='w-[80%] mx-auto mt-32' data-aos="flip-up" id='Reviews'>
        <div className="flex flex-col items-center mt-40">
        <h1 className="text-zinc-800 text-4xl font-bold border-b-[4px] border-orange-500 pb-2">
          Reviews
        </h1>
        <p className="text-zinc-700 mt-4">
          experiences tailored to your desires. From serene getaways
        </p>
        <p className="text-zinc-700">and cultural adventures to thrilling the-clock</p>
      </div> 
   <Carousel arrows={true} autoPlaySpeed={5000} infinite responsive={responsive}  >
    {clientReviews.map((review) => {
        return (
            <div key={review.image}>
                <ReviewsCard review={review}/>
            </div>
        );
    })}
   </Carousel>
   </div>
  );
}

export default Slider;
