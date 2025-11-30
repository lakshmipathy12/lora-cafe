import React from "react";
import "./LocationSection.css";

const LocationSection = () => {
  return (
    <section id="location" className="location">
      <div className="section-wrapper location-wrapper">
        <div className="location-text">
          <p className="section-label">Visit</p>
          <h2>Find LORA Café</h2>
          <p className="loc-address">
            LORA Café<br />
            123, Cozy Street,<br />
            Coffee District, Your City – 000000
          </p>
          <p className="loc-note">
            Replace this with your real shop address. The map on the right is a
            sample Google Map – you can update it with your actual location link.
          </p>

          <div className="loc-timings">
            <p><strong>Timings:</strong> 7:00 AM – 11:00 PM (All days)</p>
            <p><strong>Phone:</strong> +91-00000-00000</p>
          </div>
        </div>

        <div className="location-map">
          <iframe
            title="LORA Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8401153265394!2d80.237617!3d12.914141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6999e4adcf%3A0x5f8c96be9e0f12ff!2sCafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
