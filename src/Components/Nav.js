import React from 'react';
import logo from '../Assets/Logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Nav.css"

const Nav = () => {

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>

        <ul className="nav-list">
          <li className="nav-item"><Link to ="/"className="nav-link">HOME</Link></li>
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">MENU</li>
          <li className="nav-item"><Link to ="/booking" className="nav-link">RESERVATION</Link></li>
          <li className="nav-item">ORDER ONLINE</li>
          <li className="nav-item">LOGIN</li>
        </ul>
      </nav>
    </div>

  );
}

export default Nav;