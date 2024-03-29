import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from './csi_logo.png';

const NavBar = ({ mode, handleMode }) => {
    const [nav, setNav] = useState(false);
    const [leadsDropdown, setLeadsDropdown] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) { // Adjust this value as needed
                setIsNavFixed(true);
            } else {
                setIsNavFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNav = () => {
        setNav(prevNav => !prevNav);
    };

    const handleLeadsDropdown = () => {
        setLeadsDropdown(prevState => !prevState);
    };

    return (
        <div
            className={` flex flex-row items-center justify-between h-24  mx-auto px-6 ${
                isNavFixed ? 'shadow-lg fixed top-0  w-full z-50 flex justify-center' : ''
            } ${
                mode ?  'bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46]'
            }`}
        >
            <h1 className=''>
                <Link to='/'>
                    <img src={logo} alt='csi' height='50px' width='50px' />
                </Link>
            </h1>
            <ul
                className={` flex-row font-bold text-lg items-center gap-4 hidden md:flex ${
                    mode ? 'bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46]'
                }`}
            >
                <ScrollLink to='home' smooth={true} duration={500} className='cursor-pointer'>
                    <Link to='/'>Home</Link>
                </ScrollLink>
                <ScrollLink to='about' smooth={true} duration={500} className='cursor-pointer'>
                    About{' '}
                </ScrollLink>
                <div className='group'>
                    <div
                        onMouseEnter={handleLeadsDropdown}
                        onMouseLeave={handleLeadsDropdown}
                        className='cursor-pointer'
                    >
                        Leads{' '}
                        {leadsDropdown && (
                            <div
                                className={`${
                                    mode ? '' : 'text-black'
                                } bg-gray-50 rounded px-3 py-4 absolute shadow-lg`}
                            >
                                <ul className='flex justify-between items-center gap-4 flex-col '>
                                    <ScrollLink to='leads' className='cursor-pointer'>
										<Link to='current-leads'>Current Lead</Link>
                                    </ScrollLink>
                                    <ScrollLink to='leads' className='cursor-pointer'>
										<Link to='previous-leads'>Past Leads</Link>
                                    </ScrollLink>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <ScrollLink
                    to='events'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    Events{' '}
                </ScrollLink>
                <ScrollLink
                    to='contact'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    Contact{' '}
                </ScrollLink>

                <button className=''>
                    <Link to='/register'>Register</Link>
                </button>
                <li onClick={handleMode} className='cursor-pointer p-0.5 z-50'>
                    {mode ? <IoSunnyOutline size={20} /> : <FaMoon size={20} />}
                </li>
            </ul>

            <div className='cursor-pointer block md:hidden z-50' onClick={handleNav}>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>

            <div
                className={`${
                    nav
                        ? 'fixed left-0 top-0 w-[100%] z-40 h-full border-r ease-in-out duration-500'
                        : 'fixed left-[-100%]'
                } ${
                    mode ? 'border-r-gray-900 bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46] border-r-white'
                }`}
            >
                <ul className='pt-24 uppercase gap-4 flex flex-col px-6 justify-center items-center my-auto'>
                    <ScrollLink
                        to='home'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                        onClick={handleNav}
                    >
                        <Link to='/'>Home</Link>
                    </ScrollLink>
                    <ScrollLink
                        to='about'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                        onClick={handleNav}
                    >
                        About{' '}
                    </ScrollLink>
                    <div
                        onClick={handleLeadsDropdown}
                        className='cursor-pointer'
                    >
                        Leads{' '}
                        {leadsDropdown && (
                            <div
                                className={`${
                                    mode ? '' : 'text-black'
                                } bg-gray-50 rounded px-3 py-4 absolute shadow-lg`}
                            >
                                <ul className='flex justify-between items-center gap-4 flex-col '>
                                    <ScrollLink to='leads' className='cursor-pointer'>
                                        <Link to='current-leads'>Current Lead</Link>
                                    </ScrollLink>
                                    <ScrollLink to='leads' className='cursor-pointer'>
										<Link to='previous-leads'>Past Leads</Link>
                                    </ScrollLink>
                                </ul>
                            </div>
                        )}
                    </div>
                    <ScrollLink
                        to='events'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                        onClick={handleNav}
                    >
                        Events{' '}
                    </ScrollLink>
                    <ScrollLink
                        to='contact'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                        onClick={handleNav}
                    >
                        Contact{' '}
                    </ScrollLink>
                    <button
                        onClick={() => {
                            setNav(false);
                        }}
                        className=''
                    >
                        <Link to='/register'>Register</Link>
                    </button>
                    <li
                        onClick={handleMode}
                        className='cursor-pointer block md:hidden'
                    >
                        {mode ? <IoSunnyOutline size={20} /> : <FaMoon size={20} />}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
