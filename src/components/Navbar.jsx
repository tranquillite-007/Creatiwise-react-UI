import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (link) => {
    setActiveLink(link);
    // In a real app, you would also navigate to the page here
    // For now, I'll just prevent the default anchor behavior
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="32"
          viewBox="0 0 47 32"
          fill="none"
        >
          <rect width="9.48148" height="32" fill="white" />
          <rect x="23.7037" width="9.48148" height="32" fill="white" />
          <ellipse
            cx="16.5926"
            cy="7.11111"
            rx="5.92593"
            ry="5.92593"
            fill="white"
          />
          <ellipse
            cx="40.2963"
            cy="24.8889"
            rx="5.92593"
            ry="5.92593"
            fill="white"
          />
        </svg>
      </div>
      <ul className="nav-links">
        <li>
          <a
            className={activeLink === "Home" ? "active" : ""}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={activeLink === "About" ? "active" : ""}
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("About");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={activeLink === "Projects" ? "active" : ""}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Projects");
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={activeLink === "Contact" ? "active" : ""}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <button className="hire-me">HIRE ME</button>
    </nav>
  );
};

export default Navbar;
