import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'; // Replace with your logo file path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="BookHub Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;