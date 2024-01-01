import React from 'react';
import logo from '../src/icons_assets/Logo .svg';

const FooterPage = () => {
  const divStyle = {
    display: 'inline-block',
    verticalAlign: 'top', // Align the inline-blocks at the top
    margin: '20px', // Add some spacing between the inline-blocks
  };

  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1em' }}>
      <section>
        <div style={divStyle}>
          <img src={logo} alt="Logo" />
        </div>
        <div style={divStyle}>
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservation</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>

        <div style={divStyle}>
          <h3>Contact</h3>
          <p>Address: Chicago America</p>
          <p>Phone Number: +884 343 388 890</p>
          <p>Email: littlelemon.com</p>
        </div>

        <div style={divStyle}>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default FooterPage;

