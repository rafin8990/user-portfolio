import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Introduction from './Introduction';

const Header = () => {
    return (
        <div id='about'>
           <Navbar></Navbar>
           <Introduction></Introduction>
        </div>
    );
};

export default Header;