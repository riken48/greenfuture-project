import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">GreenFuture</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
