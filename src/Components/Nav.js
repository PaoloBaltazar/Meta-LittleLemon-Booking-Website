import React from 'react';
import logo from '../Assets/Logo.svg';
import { Link as LinkScroll, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Nav.css";

const Nav = () => {
  const [scrollToSection, setScrollToSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollToSection && location.pathname === '/') {
      scroller.scrollTo(scrollToSection, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -90,
      });
      setScrollToSection(null); // Reset the state after scrolling
    }
  }, [scrollToSection, location.pathname]);

  const handleNavClick = (section) => {
    setIsMenuOpen(false); // Close menu on link click
    if (location.pathname !== '/') {
      setScrollToSection(section);
      navigate('/');
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -90,
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Unicode character for hamburger icon */}
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <span className="nav-link" onClick={() => handleNavClick('hero')}>
              Home
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => handleNavClick('testimonials')}>
              Testimonials
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => handleNavClick('about')}>
              About
            </span>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link">Reservation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
