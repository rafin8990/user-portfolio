import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { FaBars, FaWindowClose } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-base-200'>
            <div className=' lg:max-w-[1440px] mx-auto flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-16' src={logo} alt="" />
                    <h1 className='text-3xl text-red-400 font-bold'>Rafin Hossain</h1>
                </div>
                <div>
                    <ul className={`md:flex bg-base-200 absolute md:static ${open ? ' right-2 duration-500 ease-in-out top-10' : 'top-[-150px]'}`}>
                        <li className='ml-3 text-emerald-900 hover:underline text-md'><a href="#about">About me</a></li>
                        <li className='ml-3 text-emerald-900 hover:underline text-md'><a href="#portfolio">Portfolio</a></li>
                        <li className='ml-3 text-emerald-900 hover:underline text-md'><a href="#resume">Resume</a></li>
                        <li className='ml-3 text-emerald-900 hover:underline text-md'><a href="#contact">Contact</a></li>
                    </ul>

                    <div onClick={() => setOpen(!open)} className='md:hidden mt-2'>
                        {
                            open ? <span className='text-2xl'><FaWindowClose></FaWindowClose></span> : <span className='text-2xl'><FaBars></FaBars></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;