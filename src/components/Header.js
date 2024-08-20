// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/styles/header.css'; 

const Header = () => {
  return (
    <header className="header_css">
      <nav className="container_h">
          <div className="nav_brand">
            <div to="/" className="navbar_item">
              <a href='/' className=''><div className="logo"></div></a>
            </div>
            
          </div>

          <div className ="navbar_menu"  > 

            <div className ="nav_start"></div>

            <div className="navbar_end">
              <div className="nav_menu">

                  <Link to="/about" className="nav_link deco2 ">More Works</Link>

                  <Link to="/contact" className="nav_link deco1">Let's Chat</Link>
                
                  

              </div>  
            </div>
          </div>
        
      </nav>
    </header>
  );
};

export default Header;
