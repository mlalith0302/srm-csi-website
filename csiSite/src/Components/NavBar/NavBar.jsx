import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

import logo from "./csi_logo.png";

import { Link } from 'react-scroll'

const NavBar = ({mode, setMode, handleMode}) => {
    const [ nav,setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav);
    }
    

  return (
   <div name='home' className={`flex flex-row items-center justify-between h-24 max-w-[1240px] mx-auto px-6 ${mode ? ' text-black bg-gray-300' : 'text-white bg-black'} `}>
     <h1 className=''>
        <img src={logo} alt="csi" height="45px" width="45px"/>
     </h1>
     <ul className={`flex-row gap-4 hidden md:flex ${mode ? '' : 'text-white bg-black'}`}>
     <Link  to="home"  smooth={true} duration={500} className='cursor-pointer' >Home </Link>
     <Link  to="about"  smooth={true} duration={500} className='cursor-pointer'>About </Link>
     <Link  to="leads"  smooth={true} duration={500} className='cursor-pointer' >Leads </Link>
     <Link  to="events"  smooth={true} duration={500} className='cursor-pointer'>Events </Link>
     <Link  to="contact"  smooth={true} duration={500} className='cursor-pointer' >Contact </Link>
        <li onClick={handleMode} className='cursor-pointer p-0.5'>{mode ?  <IoSunnyOutline  size={20}/> : <FaMoon  size={20}/>}</li>
     </ul>

     <div className='cursor-pointer block md:hidden' onClick={handleNav}>
        {!nav ?  <AiOutlineMenu  size={20}/> : <AiOutlineClose  size={20}/>}
     </div>

     {/* <div className='cursor-pointer block md:hidden' onClick={handleMode}>
        {!mode ?  <IoSunnyOutline  size={20}/> : <FaMoon  size={20}/>}
     </div> */}

     <div className={nav ? `fixed left-0 top-0 w-[30%] h-full border-r ease-in-out duration-500 ${mode ? 'border-r-gray-900 bg-gray-300' : 'bg-black text-white border-r-white'} ` :'fixed left-[-100%]'}> 
        <ul className='pt-24 uppercase gap-4 flex flex-col px-6'>
        <Link  to="home"  smooth={true} duration={500} className='cursor-pointer' >Home </Link>
     <Link  to="about"  smooth={true} duration={500} className='cursor-pointer'>About </Link>
     <Link  to="leads"  smooth={true} duration={500} className='cursor-pointer' >Leads </Link>
     <Link  to="events"  smooth={true} duration={500} className='cursor-pointer'>Events </Link>
     <Link  to="contact"  smooth={true} duration={500} className='cursor-pointer' >Contact </Link>
            <li onClick={handleMode} className='cursor-pointer block md:hidden'>{mode ?  <IoSunnyOutline  size={20}/> : <FaMoon  size={20}/>}</li>
        </ul>
     </div>

   </div>
  )
}

export default NavBar