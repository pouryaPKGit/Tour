import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="mt-20 xl:mx-20 items-center flex  gap-5 justify-center lg:justify-around" id="About">
      <div>
        <Image
          src="/images/pexels-photo-1477199.jpge2.jpg"
          alt="image"
          width={600}
          height={600}
          className="rounded-full lg:block hidden " data-aos="zoom-in-right"
        />
      </div>
      <div className="" data-aos="zoom-out">
        <h1 className="text-zinc-700 text-3xl sm:text-5xl font-bold">About Us</h1>
        <h2 className="text-zinc-700 text-3xl sm:text-5xl font-bold mt-3"><span className="text-orange-500">TravelTrip</span> History</h2>
        <p className="sm:w-[400px]  w-[300px] mt-10 text-zinc-500">
          Welcome to TravelTrip, where passion for travel meets exceptional
          service! As a dedicated tourism company, we specialize in creating
          unforgettable travel experiences tailored to your desires. From serene
          getaways and cultural adventures to thrilling expeditions, we pride
          ourselves on offering unique packages designed to explore the world’s
          wonders. Our experienced team is committed to providing seamless
          planning, personalized recommendations, and round-the-clock support to
          ensure your journey is nothing short of extraordinary. At TravelTrip,
          we believe that every traveler deserves a story worth sharing. Let us
          guide you in making memories that will last a lifetime. Discover the
          world with us – your next adventure awaits!
        </p>
        <button className="bg-orange-500 text-white rounded-md py-3 px-5 sm:px-8 animate-bounce mt-10 hover:opacity-60 duration-300">Read More</button>
      </div>
    </div>
  );
};

export default About;
