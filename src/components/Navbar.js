import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // <-- your circular image here

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">

        {/* === LOGO ADDED HERE === */}
        <img src={logo} alt="Cafe Logo" className="nav-logo-img" />

        <span className="nav-logo-main">LORA</span>
        <span className="nav-logo-sub">Artisan Cafe</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#location">Location</a></li>
        </ul>
      </nav>

      <a href="#location" className="nav-cta">
        Visit Us
      </a>
    </header>
  );
};

export default Navbar;
