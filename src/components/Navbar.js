import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        {/* ── Logo ── */}
        <div className="nav-logo">
          <img src={logo} alt="Cafe Logo" className="nav-logo-img" />
          <span className="nav-logo-main">LORA</span>
          <span className="nav-logo-sub">Artisan Cafe</span>
        </div>

        {/* ── Desktop Links ── */}
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

        {/* ── Desktop CTA ── */}
        <a href="#location" className="nav-cta">Visit Us</a>

        {/* ── Hamburger (mobile only) ── */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ── Mobile Fullscreen Menu ── */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#hero"     onClick={closeMenu}>Home</a>
        <a href="#menu"     onClick={closeMenu}>Menu</a>
        <a href="#about"    onClick={closeMenu}>About</a>
        <a href="#social"   onClick={closeMenu}>Social</a>
        <a href="#reviews"  onClick={closeMenu}>Reviews</a>
        <a href="#location" onClick={closeMenu}>Location</a>
        <a href="#location" className="nav-cta" onClick={closeMenu}>Visit Us</a>
      </div>
    </>
  );
};

export default Navbar;
