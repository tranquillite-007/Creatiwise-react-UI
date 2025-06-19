import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="marquee-container">
          <div className="marquee">
            <span className="marquee-text">WEBFLOW</span>
            <div className="star"></div>
            <span className="marquee-text">FIGMA</span>
            <div className="star"></div>
            <span className="marquee-text">DESIGNER</span>
            <div className="star"></div>
            <span className="marquee-text">DEVELOP</span>
            <div className="star"></div>
            <span className="marquee-text">WEBFLOW</span>
            <div className="star"></div>
            <span className="marquee-text">FIGMA</span>
            <div className="star"></div>
            <span className="marquee-text">DESIGNER</span>
            <div className="star"></div>
            <span className="marquee-text">DEVELOP</span>
            <div className="star"></div>
          </div>
        </div>

        <div className="footer-content">
          <div>
            <h1 className="lets-talk">LET'S TALK!</h1>
            <a href="mailto:rehanurraihan@gmail.com" className="email-link">
              rehanurraihan@gmail.com
            </a>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© Rehan Raihan – 2023</p>
            <div className="social-links">
              <a href="#" className="social-link">
                Dribbble
              </a>
              <a href="#" className="social-link">
                Behance
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
