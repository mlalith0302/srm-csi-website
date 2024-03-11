import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/HeroSection/Hero';
import About from '../Components/About/About';
import Faculty from '../Components/Faculty/Faculty';
import Modal from '../Components/Modal/Modal';
import Form from '../Components/Forms/Form';
import Footer from '../Components/Footer/Footer';

export default function Home({mode, handleMode}) {
	return (
		<div
			className={`${
				mode
					? 'bg-[#D9EBFF] text-[#0F232A]'
					: 'text-[#C9DBEE] bg-[#112A46]'
			}`}
		>
			<NavBar
				mode={mode}
				handleMode={handleMode}
			/>
			<Hero mode={mode} />
			<About mode={mode} />
			<div className='flex flex-col gap-8 m-4 '>
				<h1 className='text-4xl font-bold text-center mb-4'>
					Meet the Faculty
				</h1>
				<Faculty mode={mode} />
			</div>
			<div className={mode
      ? 'bg-[#112A46] text-[#0F232A]'
      : 'text-[#C9DBEE] bg-[#D9EBFF]'}>
		<Footer mode={mode}/>
	  </div>
			
			<ScrollToTop smooth className='flex items-center justify-center' />
			
		</div>
	);
}
