import React, { useState } from "react";
import "./MenuSection.css";

import menuImg1 from "../assets/menu-1.jpg";
import menuImg2 from "../assets/menu-2.jpg";
import menuImg3 from "../assets/menu-3.jpg";

const MenuSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (img) => {
    setActiveImage(img);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  return (
    <section id="menu" className="menu">
      <div className="section-wrapper menu-wrapper">
        <div className="menu-header">
          <p className="section-label">Menu</p>
          <h2>Our Signature Menu</h2>
          <p className="menu-sub">
            A quick visual preview of LORA specials. Each image represents a
            curated part of our menu.
          </p>
        </div>

        <div className="menu-image-row">
          {/* IMAGE 1 */}
          <div
            className="menu-image-card card-1"
            onClick={() => openImage(menuImg1)}
          >
            {/* 🔤 TITLE 1 – change this text as you like */}
            <div className="menu-image-title">
              VEG MENU
            </div>

            <img
              src={menuImg1}
              alt="LORA menu item 1"
              className="menu-image img-1"
            />
          </div>

          {/* IMAGE 2 */}
          <div
            className="menu-image-card card-2"
            onClick={() => openImage(menuImg2)}
          >
            {/* 🔤 TITLE 2 – change this text as you like */}
            <div className="menu-image-title">
              NON-VEG
            </div>

            <img
              src={menuImg2}
              alt="LORA menu item 2"
              className="menu-image img-2"
            />
          </div>

          {/* IMAGE 3 */}
          <div
            className="menu-image-card card-3"
            onClick={() => openImage(menuImg3)}
          >
            {/* 🔤 TITLE 3 – change this text as you like */}
            <div className="menu-image-title">
              DRINKS
            </div>

            <img
              src={menuImg3}
              alt="LORA menu item 3"
              className="menu-image img-3"
            />
          </div>
        </div>
      </div>

      {/* 🔍 BIG IMAGE MODAL */}
      {activeImage && (
        <div className="menu-modal" onClick={closeImage}>
          <div
            className="menu-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="menu-modal-close" onClick={closeImage}>
              ×
            </button>
            <img src={activeImage} alt="LORA menu large view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;
