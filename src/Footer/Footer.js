import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
    return (
        <div className='my-20' id='footer'>
            <h1 className='text-md text-center'>Stay Connected</h1>
            <div className="divider"></div>

            <div className=' flex justify-center mt-5 '>
                <p className='text-4xl '> <a href="https://www.rafin.hossain.8990@gmail.com"><HiMail></HiMail></a></p>
                <p className='text-4xl ml-5'> <a href=" tel:+8801984419614"><HiPhone></HiPhone></a></p>
                <p className='text-4xl ml-5'> <a href="https://www.facebook.com/Rafin.Hossain.19614/"><FaFacebook></FaFacebook></a></p>
                <p className='text-4xl ml-5'> <a href="https://www.linkedin.com/in/rafin-hossain-005491245/"><FaLinkedin></FaLinkedin></a></p>
                <p className='text-4xl ml-5'> <a href="https://github.com/rafin8990"><FaGithub></FaGithub></a></p>
            </div>

            <p className='text-center mt-2'>Copyright @ 2023 All Rights Reserved.</p>

        </div>
    );
};

export default Footer;