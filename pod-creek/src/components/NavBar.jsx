/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">All</Link></li>
        <li><Link to="/audio">Audio</Link></li>
        <li><Link to="/videos">Videos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;