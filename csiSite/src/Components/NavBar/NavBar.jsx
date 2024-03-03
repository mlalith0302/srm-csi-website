import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from './csi_logo.png';

const NavBar = ({ mode, setMode, handleMode, handleModalOpen }) => {
	const [nav, setNav] = useState(false);

	useEffect(() => {
		if (nav) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [nav]);

	const handleNav = () => {
		setNav(prevNav => !prevNav);
	};

	return (
		<div
			name='home'
			className={`flex flex-row items-center justify-between h-24 max-w-[1240px] mx-auto px-6 ${
				mode
					? 'bg-[#D9EBFF] text-[#0F232A]'
					: 'text-[#C9DBEE] bg-[#112A46]'
			} `}
		>
			<h1 className=''>
				<img src={logo} alt='csi' height='45px' width='45px' />
			</h1>
			<ul
				className={`flex-row items-center gap-4 hidden md:flex ${
					mode
						? 'bg-[#D9EBFF] text-[#0F232A]'
						: 'text-[#C9DBEE] bg-[#112A46]'
				}`}
			>
				<Link
					to='home'
					smooth={true}
					duration={500}
					className='cursor-pointer'
				>
					Home{' '}
				</Link>
				<Link
					to='about'
					smooth={true}
					duration={500}
					className='cursor-pointer'
				>
					About{' '}
				</Link>
				<div className='group'>
					<Link
						to='leads'
						smooth={true}
						duration={500}
						className='cursor-pointer'
					>
						Leads{' '}
					</Link>

					<div
						className={`hidden ${
							mode ? '' : 'text-black'
						} bg-gray-50 rounded px-3 py-4 absolute shadow-lg group-hover:block`}
					>
						<ul className='flex justify-between items-center gap-4 flex-col '>
							<Link to='leads' className='cursor-pointer'>
								Current Lead
							</Link>
							<Link to='leads' className='cursor-pointer'>
								Past Leads
							</Link>
						</ul>
					</div>
				</div>
				<Link
					to='events'
					smooth={true}
					duration={500}
					className='cursor-pointer'
				>
					Events{' '}
				</Link>
				<Link
					to='contact'
					smooth={true}
					duration={500}
					className='cursor-pointer'
				>
					Contact{' '}
				</Link>

				<button
					onClick={handleModalOpen}
					className='bg-blue-900 text-white outline outline-black outline-2 px-3 py-2 rounded-2xl'
				>
					Register
				</button>
				<li onClick={handleMode} className='cursor-pointer p-0.5 z-50'>
					{mode ? <IoSunnyOutline size={20} /> : <FaMoon size={20} />}
				</li>
			</ul>

			<div
				className='cursor-pointer block md:hidden z-50'
				onClick={handleNav}
			>
				{!nav ? (
					<AiOutlineMenu size={20} />
				) : (
					<AiOutlineClose size={20} />
				)}
			</div>

			<div
				className={`${
					nav
						? 'fixed left-0 top-0 w-[100%] z-40 h-full border-r ease-in-out duration-500'
						: 'fixed left-[-100%]'
				} ${
					mode
						? 'border-r-gray-900 bg-[#D9EBFF] text-[#0F232A]'
						: 'text-[#C9DBEE] bg-[#112A46] border-r-white'
				}`}
			>
				<ul className='pt-24 uppercase gap-4 flex flex-col px-6 justify-center items-center my-auto'>
					<Link
						to='home'
						smooth={true}
						duration={500}
						className='cursor-pointer'
						onClick={handleNav}
					>
						Home{' '}
					</Link>
					<Link
						to='about'
						smooth={true}
						duration={500}
						className='cursor-pointer'
						onClick={handleNav}
					>
						About{' '}
					</Link>
					<Link
						to='leads'
						smooth={true}
						duration={500}
						className='cursor-pointer'
						onClick={handleNav}
					>
						Leads{' '}
					</Link>
					<Link
						to='events'
						smooth={true}
						duration={500}
						className='cursor-pointer'
						onClick={handleNav}
					>
						Events{' '}
					</Link>
					<Link
						to='contact'
						smooth={true}
						duration={500}
						className='cursor-pointer'
						onClick={handleNav}
					>
						Contact{' '}
					</Link>
					<button
						onClick={() => {
							setNav(false);
							handleModalOpen();
						}}
						className='bg-blue-900 text-white outline outline-black outline-2 px-3 py-2 rounded-2xl'
					>
						Register
					</button>
					<li
						onClick={handleMode}
						className='cursor-pointer block md:hidden'
					>
						{mode ? (
							<IoSunnyOutline size={20} />
						) : (
							<FaMoon size={20} />
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
