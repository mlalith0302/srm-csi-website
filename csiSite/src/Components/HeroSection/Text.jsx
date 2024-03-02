import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const Text = ({text}) => {
  return (
    <div className='flex flex-col justify-end' >
      <div className='text-white z-50 w-[560px] h-[110px] backdrop-blur-[15px] flex justify-between p-4'>
        <div className='flex items-center '>
          <h1 className="text-lg font-bold">{text}</h1>
         
        </div>
        <div className='flex items-center'>
          <div className='w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center'>
            <span className="text-white text-sm font-bold"><FaLongArrowAltRight/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
