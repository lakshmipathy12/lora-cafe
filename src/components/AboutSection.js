import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="section-wrapper about-wrapper">
        <div className="about-text">
          <p className="section-label">About LORA</p>
          <h2>More than a Café, it’s a feeling.</h2>
          <p>
            LORA was born from a simple idea – to build a space where people can
            pause, breathe and feel at home. Every corner, every cup and every
            playlist is carefully curated to make your time here feel unhurried
            and meaningful.
          </p>
          <p>
            We work closely with local roasters and bakers, use ethically sourced
            beans and ingredients, and constantly experiment with flavours to
            keep your next visit a little more special than the last.
          </p>
        </div>

        <div className="about-highlight">
          <div className="about-stat">
            <span>1000+</span>
            <p>Happy regulars</p>
          </div>
          <div className="about-stat">
            <span>15</span>
            <p>Handpicked staff</p>
          </div>
          <div className="about-stat">
            <span>7 AM – 11 PM</span>
            <p>Open all days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
