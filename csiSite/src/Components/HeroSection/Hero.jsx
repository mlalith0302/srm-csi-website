import React from 'react';
import { ReactTyped } from "react-typed";
import logo from "./csi_logo.png";
const Hero = ({mode}) => {
  return (
    <div className={`p-4 flex flex-wrap justify-center items-center gap-4 ${mode ? 'bg-gray-300 text-black' : 'text-white bg-black'}`}>
        
      <div className="md:w-auto flex flex-col justify-center items-center mb-4 md:mb-0 h-[300px] w-[400px]">

        <h1 className="text-xl md:text-5xl">COMPUTER SOCIETY OF INDIA</h1>
        <ReactTyped  className='text-2xl' strings={["SRMIST DELHI-NCR CAMPUS"]} typeSpeed={40} backSpeed={50} loop/>

      </div>
      
      <div className='h-[300px] w-[400px]  flex justify-center items-center'>
        <img src={logo} alt="csi" className="h-[250px] w-[250px]"/>
      </div>

      
      
    </div>
  );
};

export default Hero;
