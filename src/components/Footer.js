import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">LORA Café</span>
        <span>© {new Date().getFullYear()} LORA. All rights reserved.</span>
        <span className="footer-made">Crafted with ☕ & ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
