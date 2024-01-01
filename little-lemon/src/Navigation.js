import React from 'react';
import logo from '../src/icons_assets/Logo .svg';

const Navigation = () => {
    const navbarStyle = {
        padding: '10px 20px', // Adjusted padding for mobile
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column', // Changed to column for mobile
    };

    const navStyle = {
        display: 'inline-block',
    };

    const logoContainerStyle = {
        display: 'inline-block',
        marginBottom: '10px', // Adjusted margin for mobile
    };

    return (
        <nav style={navbarStyle}>
            <div className="logo-container" style={logoContainerStyle}>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul style={navStyle}>
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