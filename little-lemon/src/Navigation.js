import React, { useState } from 'react';
import logo from '../src/icons_assets/Logo .svg';
import './Navi.css'; // Import the CSS file

const Navigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            
            {/* Mobile navbar */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul className={`nav-links ${isMenuVisible ? 'visible' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
                {/* Add more navigation links based on your design */}
            </ul>
        </nav>
    );
};

export default Navigation;