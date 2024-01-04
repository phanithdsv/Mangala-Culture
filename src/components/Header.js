import React from 'react';
import './Header.css'; // Assuming you'll create a separate CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Mangala Culture Logo" /> {/* Replace with your logo path */}
      </div>
      <nav className="navigation">
        <a href="#welcome">Welcome</a>
        <a href="#about">About</a>
        <a href="#get-involved">Get Involved</a>
        <a href="#blog">Blog</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
