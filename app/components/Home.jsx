"use client"
import { useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Packag from './Packag'
import Leaders from './Leaders'
import ReviewsSlider from './ReviewsSlider'
import Contact from './Contact'
import Footer from './Footer'
import Aos from "aos"
import "aos/dist/aos.css";

const Home = () => {
  useEffect(()=> {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement:"top-bottom",
      });
    };

    initAOS();
  },[]);

  return (
    <div>
       <div className="w-full h-[600px] md:h-[1000px] bg-[url('/images/GettyImages-1181704406-1104x780-4fa6423.jpg')] bg-cover bg-center md:rounded-br-[300px]" >
      <Navbar/>
      <Hero/>
      </div>
      <About/>
       <Packag/>
       <Services/>
       <Leaders/>
      <ReviewsSlider/>
      <Contact/>   
      <Footer/>
    </div>
  )
}

export default Home
