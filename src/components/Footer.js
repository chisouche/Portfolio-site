// src/components/Footer.js
import React from 'react';
import '../assets/styles/footer.css';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2024 Ace.</p>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:chisom.uche@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
       </div>
    </footer>
  );
};

export default Footer;
