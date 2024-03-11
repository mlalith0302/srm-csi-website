import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const About = ({ mode }) => {

	const [showCSI, setCSI] = useState(false);
	const [showCSE, setCSE] = useState(false);
	const [showSRM, setSRM] = useState(false);
	return (
		<section
			className={`flex flex-col m-4 justify-center gap-4 items-center p-4 ${
				mode
					? 'bg-[#D9EBFF] text-[#0F232A]'
					: 'text-[#C9DBEE] bg-[#112A46]'
			}`}
			style={{ fontFamily: 'Roboto, sans-serif' }}
			name='about'
		>
			<div
				name=''
				className='flex flex-col justify-between items-center gap-4 w-full md:w-11/12'
			>
				<h1 className='font-semibold text-4xl text-center mb-2'>
					ABOUT US
				</h1>
				<div className='m-4 px-4 md:x-8 py-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
					<p className='text-3xl text-center font-bold'>CSI</p>
					<p className='mt-2'>
						Computer Society of India is a body of computer
						professionals in India. It was started on 6 March 1965
						by a few computer professionals and has now grown to be
						the national body representing computer professionals. 
						<p className={`text-center p-2 font-medium text-lg hover:cursor-pointer flex gap-2 justify-center items-center  ${showCSI ? 'hidden' : ''}  transition ease-in-out duration-300 `} onClick={()=>setCSI(check => !check)}>Load More <span><MdKeyboardDoubleArrowDown /></span></p>
						<span className={`${showCSI ? '' : 'hidden'} transition ease-in-out duration-300`}>
						 It has 72 chapters across India, 511 student branches,
						and 100,000 members. The Computer Society of India is a
						non-profit professional meet to exchange views and
						information to learn and share ideas. The society also
						encourages and assists professionals to maintain
						integrity and competence of the profession and fosters a
						sense of partnership amongst members. Besides the
						activities held at the chapters and student branches,
						the society also conducts periodic conferences and
						seminars. The society functions under the guidance of an
						executive committee. The functional head of the society
						is the president and is assisted by the vice president,
						executive, co-executive, and other teams. CSI aims to
						advance and promote the science and practice of
						computing and IT in India, as well as to facilitate
						communication and collaboration among its members. It
						provides a platform for professionals, researchers,
						educators, and students to share their knowledge,
						experiences, and ideas through conferences, seminars,
						and workshops.
						</span>
						<p className={`text-center p-2 font-medium text-lg hover:cursor-pointer flex gap-2 justify-center items-center ${showCSI ? '' : 'hidden'}`} onClick={()=>setCSI(check => !check)}>Load Less <span><MdOutlineKeyboardDoubleArrowUp /></span></p>
					</p>
				</div>
				<div className='m-4 px-4 md:x-8 py-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
					<p className='text-3xl text-center font-bold'>
						CSE Department
					</p>
					<p className='mt-2'>
						The CSE department of SRMIST, NCR provides an
						outstanding research environment complemented by
						excellence in teaching. They provide a lot of
						opportunities for their students, like they organize
						many workshops, webinars, etc.
						<p className={`text-center p-2 font-medium text-lg hover:cursor-pointer flex gap-2 justify-center items-center ${showCSE ? 'hidden' : ''}`} onClick={()=>setCSE(check => !check)}>Load More <span><MdKeyboardDoubleArrowDown /></span></p>
						<span className={`${showCSE ? '' : 'hidden'}`}>
						 The training imparted
						aims to prepare young minds for the challenging
						opportunities in the IT industry. The teachers in SRM
						provide practical knowledge that makes the students
						suitable for IT sector jobs. The CSE department in SRM
						also manages to welcome many big companies for the
						students so that they get placed in a good company and
						their future is secured.
						</span>
						<p className={`text-center p-2 font-medium text-lg hover:cursor-pointer flex gap-2 justify-center items-center ${showCSE ? '' : 'hidden'}`} onClick={()=>setCSE(check => !check)}>Load Less <span><MdOutlineKeyboardDoubleArrowUp /></span></p>
					</p>
				</div>
				<div className='m-4 px-4 md:x-8 py-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
					<p className='text-3xl text-center font-bold'>SRM</p>
					<p className='mt-2'>
						SRM Institute of Science and Technology, Ghaziabad was
						established in the year 1997 and houses over 5,000
						students, over 200 faculties, and a plethora of visiting
						faculty from across industries. It is a private
						university located in Ghaziabad, Uttar Pradesh, India.
						<p className={`text-center p-2 font-medium text-lg hover:cursor-pointer flex gap-2 justify-center items-center ${showSRM ? 'hidden' : ''}`} onClick={()=>setSRM(check => !check)}>Load More <span><MdKeyboardDoubleArrowDown /></span></p>
						<span className={`${showSRM ? '' : 'hidden'}`}>
						The university offers undergraduate, postgraduate, and
						doctoral programs in various fields such as engineering,
						management, computer applications, pharmacy, and
						sciences. The Ghaziabad campus of SRM Institute of
						Science and Technology is spread over an area of 25
						acres and is equipped with modern infrastructure,
						including state-of-the-art laboratories, libraries, and
						classrooms. The campus has a vibrant student community,
						with students from all over the country and the world.
						SRM Institute of Science and Technology, Ghaziabad
						campus also has collaborations with several
						international universities, which allows students to
						gain a global perspective on their education. The
						university also provides various facilities to its
						students, including sports facilities, accommodation,
						and medical facilities. Overall, SRM Institute of
						Science and Technology, Ghaziabad campus is a reputed
						institution known for its quality education and
						excellent infrastructure.
						</span>
						<p className={`text-center p-2 font-medium text-lg hover:cursor-pointer flex gap-2 justify-center items-center ${showSRM ? '' : 'hidden'}`} onClick={()=>setSRM(check => !check)}>Load Less <span><MdOutlineKeyboardDoubleArrowUp /></span></p>
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
