import React from 'react';
import './Header.css'
import logo from '../../logo.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img className='mt-3' src={logo} alt="" />
            <h1 className='text-style fw-bold'>Wisdom Elementary School Committee</h1>
            <h3 className='fw-bold text-style'>Total Budget: 100K</h3>
        </div>
    );
};

export default Header;