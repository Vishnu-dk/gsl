import React, { useState } from 'react';
import { FaHome, FaTrophy, FaFutbol, FaShieldAlt, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="/gsl-2025-logo.png" alt="GEC Soccer League Logo" className="logo" />
          
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/points-table" onClick={toggleMenu}>
              <FaTrophy className="nav-icon" /> Points Table
            </Link>
          </li>
          <li>
            <Link to="/top-scorers" onClick={toggleMenu}>
              <FaFutbol className="nav-icon" /> Top Scorers
            </Link>
          </li>
          <li>
            <Link to="/clean-sheets" onClick={toggleMenu}>
              <FaShieldAlt className="nav-icon" /> Clean Sheets
            </Link>
          </li>
          <li>
            <Link to="/fixtures" onClick={toggleMenu}>
              <FaCalendarAlt className="nav-icon" /> Fixtures
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;