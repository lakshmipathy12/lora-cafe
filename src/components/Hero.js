import React from "react";
import "./Hero.css";
import coffeeVideo from "../assets/coffee-loop.mp4"; // <-- ADD THIS

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="section-wrapper hero-wrapper">
        <div className="hero-left">
          <p className="hero-tagline">Welcome to</p>
          <h1 className="hero-title">
            LORA <span>Café</span>
          </h1>
          <p className="hero-subtitle">
            A cozy corner where handcrafted coffee, warm conversations, and
            freshly baked treats come together. Step into LORA, your everyday
            escape in the heart of the city.
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">
              Explore Menu
            </a>
            <a href="#location" className="hero-secondary">
              View Location →
            </a>
          </div>
          <div className="hero-metrics">
            <div>
              <span>50+</span>
              <p>Signature Drinks</p>
            </div>
            <div>
              <span>4.8★</span>
              <p>Customer Rating</p>
            </div>
            <div>
              <span>2019</span>
              <p>Since</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card hero-image">
            {/* coffee circle + VIDEO INSIDE */}
            <div className="coffee-circle">
              <video
                className="coffee-video"
                src={coffeeVideo}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>

            {/* existing animations stay the same */}
            <div className="coffee-pour" />
            <div className="steam steam-1" />
            <div className="steam steam-2" />
            <div className="steam steam-3" />
            <span className="hero-image-label">LORA Signature Brew</span>
          </div>

          <div className="hero-card hero-float-card">
            <p>"The best place to slow down, sip and feel at home."</p>
            <span>- LORA Regular</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
