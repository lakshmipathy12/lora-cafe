import React from "react";
import "./SocialSection.css";

const SocialSection = () => {
  return (
    <section id="social" className="social">
      <div className="section-wrapper social-wrapper">
        <div className="social-left">
          <p className="section-label">Connect</p>
          <h2>Find LORA online</h2>
          <p>
            Stay updated with our seasonal menus, live events, offers and cozy
            cafe moments. One click and you're with us.
          </p>

          <div className="social-icons">
            {/* WHATSAPP */}
            <div className="social-icon-item social-wa">
              <a
                href="https://wa.me/910000000000" // change to your number
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon wa"
              >
                WA
              </a>
              {/* 👇 change this title text as you like */}
              <span className="social-icon-label">WhatsApp</span>
            </div>

            {/* INSTAGRAM */}
            <div className="social-icon-item social-ig">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon ig"
              >
                IG
              </a>
              {/* 👇 change this title text as you like */}
              <span className="social-icon-label">Instagram</span>
            </div>

            {/* FACEBOOK */}
            <div className="social-icon-item social-fb">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon fb"
              >
                f
              </a>
              {/* 👇 change this title text as you like */}
              <span className="social-icon-label">Facebook</span>
            </div>
          </div>

          <p className="social-note">
          </p>
        </div>

        <div className="social-right">
          <h3>What guests usually say</h3>
          <p>
            “Lovely ambience, great music and genuinely warm staff. The cold brew
            and desserts are a must-try. Perfect for work, study or long talks.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
