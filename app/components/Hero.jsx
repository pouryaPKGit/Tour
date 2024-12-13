import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-start w-[80%] mx-auto " id="Home" data-aos="fade-right">
      <div className="sm:text-6xl text-4xl text-white font-bold mt-40 md:mt-80">
        <h1>Explore The World</h1>
        <h2 className="mt-3">
          {" "}
          with <span className="text-orange-500 ">TravelTrip</span>
        </h2>
        <div className="md:text-lg text-sm  font-semibold mt-7">
          <p>
            Discover the joy of traveling with our expertly curated tours
            designed
          </p>
          <p> to give you an unforgettable experience</p>
        </div>

        <button className=" bg-orange-500 text-sm md:text-lg rounded-md py-3 px-5 md:px-9 mt-7 hover:opacity-75  duration-300 animate-bounce">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
