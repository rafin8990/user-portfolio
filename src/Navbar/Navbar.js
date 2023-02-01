import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-base-200 sticky'>
            <div className=' lg:max-w-[1440px] mx-auto flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-16' src={logo} alt="" />
                    <h1 className='text-3xl text-red-400 font-bold'>Rafin Hossain</h1>
                </div>
                <div>
                    <nav>
                        <ul className={`md:flex bg-base-200 absolute md:static ${open ? ' right-2 duration-500 ease-in-out top-10' : 'top-[-150px]'}`}>
                            <li className='ml-3 text-emerald-900 hover:underline text-md'>
                                <Link activeClass="active" smooth spy to="about">About me</Link>
                            </li>
                            <li className='ml-3 text-emerald-900 hover:underline text-md'>
                                <Link activeClass="active" smooth spy to="portfolio">Portfolio</Link>

                            </li>
                            <li className='ml-3 text-emerald-900 hover:underline text-md'>
                                <Link activeClass="active" smooth spy to="resume">Resume</Link>
                            </li>
                            <li className='ml-3 text-emerald-900 hover:underline text-md'>
                                <Link activeClass="active" smooth spy to="contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>

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