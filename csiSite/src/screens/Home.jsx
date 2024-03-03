import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/HeroSection/Hero';
import About from '../Components/About/About';
import Faculty from '../Components/Faculty/Faculty';
import Modal from '../Components/Modal/Modal';
import Form from '../Components/Forms/Form';
import Footer from '../Components/Footer/Footer';

export default function Home() {
	const [mode, setMode] = useState(true);
	const [visible, setVisible] = useState(false);

	const handleMode = () => {
		setMode(!mode);
	};

	const [leads, setLeads] = useState(true);
	const handleLeads = () => {
		setLeads(!leads);
	};

	const handleModalClose = () => {
		setVisible(false);
	};

	const handleModalOpen = () => {
		setVisible(true);
	};

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
				handleModalOpen={handleModalOpen}
				handleMode={handleMode}
			/>
			{visible && (
				<Modal handleModalClose={handleModalClose}>
					<Form
						title='Register'
						handleModalClose={handleModalClose}
					/>
				</Modal>
			)}
			<Hero mode={mode} />
			<About mode={mode} />
			<div className='flex flex-col gap-8 m-4 '>
				<h1 className='text-4xl font-bold text-center mb-4'>
					Meet the Faculty
				</h1>
				<Faculty mode={mode} />
			</div>
			<Footer />
			<ScrollToTop smooth className='flex items-center justify-center' />
			{/* {leads ? (<Leads mode={mode} handleLeads={handleLeads}/> ) : (<PastLeads mode={mode} handleLeads={handleLeads}/>)} */}
		</div>
	);
}
