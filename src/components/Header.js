import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {
  const location = useLocation(); // Get the current route

  return (
    <header className="header_css">
      <nav className="container_h">
        <div className="nav_brand">
          <div className="navbar_item">
            <a href="/" className=""><div className="logo"></div></a>
          </div>
        </div>

        <div className="navbar_menu">
          <div className="nav_start"></div>
          <div className="navbar_end">
            <div className="nav_menu">
              {/* Conditionally render the "About" link if not on the About page */}
              {location.pathname !== '/about' && (
                <Link to="/about" className="nav_link deco2">About</Link>
              )}

              {/* Conditionally render the "Let's Chat" link if not on the Contact page */}
              {location.pathname !== '/contact' && (
                <Link to="/contact" className="nav_link deco1">Let's Chat</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
