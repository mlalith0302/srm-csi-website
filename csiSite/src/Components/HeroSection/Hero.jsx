import React from 'react';
import { ReactTyped } from "react-typed";
import { SwipeCarousel } from './SwipeCarousel';
const Hero = ({mode}) => {
  return (
    <div className={`m-4 flex flex-col flex-wrap justify-center items-center gap-4 ${mode ? 'bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46]'}`}>
        
      <div className="md:w-auto flex  flex-col justify-center items-center mb-4 md:mb-0 h-[200px] w-[320px]">

        <h1 className="text-xl font-bold md:text-5xl">COMPUTER SOCIETY OF INDIA</h1>
        <ReactTyped  className='text-xl font-semibold' strings={["SRMIST DELHI-NCR CAMPUS"]} typeSpeed={40} backSpeed={50} loop/>

      </div>

      <div className='max-w-full'>
        <SwipeCarousel mode={mode}/>
      </div>
    </div>
  );
};

export default Hero;
