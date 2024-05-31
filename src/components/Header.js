import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './hamburger.css';
import hamburgerIcon from '../assets/images/hamburger.png'; // Adjust the path as needed
import closeIcon from '../assets/images/hamburger-no.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo"><Link to="/">Welcome!</Link></div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/resume" onClick={toggleMenu}>Resume</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={isOpen ? closeIcon : hamburgerIcon} alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
