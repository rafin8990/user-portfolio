import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className=' text-emerald-900'><a href='#about'>About Me</a></li>
                            <li className=' text-emerald-900'><a href='#portfolio'>Portfolio</a></li>
                            <li className=' text-emerald-900'><a href='#resume'>Resume</a></li>
                            <li className=' text-emerald-900'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-16' src={logo} alt="" />
                        <Link to='/' className=" normal-case text-xl">Rafin Hossain</Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=' text-emerald-900'><a href='#about'>About Me</a></li>
                        <li className=' text-emerald-900'><a href='#portfolio'>Portfolio</a></li>
                        <li className=' text-emerald-900'><a href='#resume'>Resume</a></li>
                        <li className=' text-emerald-900'><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;