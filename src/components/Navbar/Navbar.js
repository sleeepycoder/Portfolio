import React, { useState } from 'react';
import './navbar.css';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Index from '../TechStacks/Index';
import Contact from '../Contact/Contact';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <><nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <div className="logo">
              <a href="/">Pankaj</a>
              
          </div>
          <div className="menu-icon" onClick={toggleNavbar}>
              <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className="menu">
             
              <li>
                  <a href='https://drive.google.com/file/d/1QBrcfj3XsAXoJcCc-2raxRzJULWG3Iwn/view?usp=drive_link' download>Resume</a>
              </li>
             
             
          </ul>
      </nav>
      <About />
      <Portfolio/>
    <Index/>
      <Contact/>
      </>
  );
};

export default Navbar;
