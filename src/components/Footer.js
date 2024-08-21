// src/components/Footer.js
import React from 'react';
import '../assets/styles/footer.css';
import { FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2024 Ace.</p>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://x.com/spacerjace" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jennifer-uc-317a10285/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/chisouche" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
