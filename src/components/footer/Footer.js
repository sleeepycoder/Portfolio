import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-content">
          <p> Made by pankaj&copy; {new Date().getFullYear()} </p>
          </div>
      <div className="social-icons">
      
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
     
      </div>
    </footer>
  );
};

export default Footer;
