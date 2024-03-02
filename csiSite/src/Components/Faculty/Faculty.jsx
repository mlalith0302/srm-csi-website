import React from 'react';
import logo from '../HeroSection/tempImg.jpg';

const Faculty = ({ mode }) => {
  return (
    <div className={`m-4mt-2 mb-2 gap-4 w-full min-h-screen flex flex-col justify-around items-center ${mode ? 'bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46]'}`}>
      <div className='flex flex-col justify-around shadow-lg w-full max-w-screen-lg md:flex-row'>
        <div className='p-2 md:w-1/2'>
          <img src={logo} alt="image" className='m-4 w-[400px] max-w-full' />
        </div>
        <div className='max-w-[400px] p-2 md:w-1/2'>
          <span className='text-4xl'>Lorem ipsum </span>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos rerum quasi et minima sapiente provident perspiciatis quaerat! Eaque iste perferendis maiores voluptas laboriosam minima assumenda quo eius eos porro similique hic, reiciendis non ducimus laborum, natus maxime velit vero!</p>
        </div>
      </div>

      <div className='flex flex-col justify-around shadow-lg w-full max-w-screen-lg md:flex-row'>
        <div className='max-w-[400px] p-2 md:w-1/2'>
          <span className='text-4xl'>Lorem ipsum </span>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ratione sunt. Et cumque iste excepturi magnam debitis earum corrupti ipsum, fuga sunt repudiandae. Blanditiis autem sint deserunt iusto id libero, commodi dolore! Excepturi modi beatae ratione eum nihil in quis!</p>
        </div>
        <div className='p-2 md:w-1/2'>
          <img src={logo} alt="image" className='m-4 w-[400px] max-w-full' />
        </div>
      </div>

      <div className='flex flex-col justify-around shadow-lg w-full max-w-screen-lg md:flex-row'>
        <div className='p-2 md:w-1/2'>
          <img src={logo} alt="image" className='m-4 w-[400px] max-w-full' />
        </div>
        <div className='max-w-[400px] p-2 md:w-1/2'>
          <span className='text-4xl'>Lorem ipsum </span>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque voluptate ratione perspiciatis, magni impedit iste ullam aliquam sequi nobis dicta exercitationem commodi sed architecto facilis, rem error expedita in consequatur ad eligendi. Quasi accusamus rem quas, corporis quod laboriosam?</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
