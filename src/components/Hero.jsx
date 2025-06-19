import React from "react";
import "./Hero.css";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";

const Hero = () => {
  return (
    <header className="hero section">
      <div className="banner">
        <div className="container">
          <div className="title-frame">
            <div className="title-line">
              <span className="title-text">I AM A</span>
              <div className="title-circle-1"></div>
              <span className="title-text">FREELANCE</span>
            </div>

            <div className="title-line">
              <span className="title-text">DESIGNER</span>
              <div className="title-circle-2"></div>
              <span className="title-text">FROM</span>
            </div>

            <div className="title-line">
              <span className="title-text">SAN FRANCISCO</span>
            </div>
          </div>

          <div className="bottom-section">
            <div className="brands-container">
              <div className="brands-marquee">
                <div className="brands-track">
                  <span className="brand-item">
                    <img src={icon1} alt="brand 1" />
                  </span>
                  <span className="brand-item">
                    <img src={icon2} alt="brand 2" />
                  </span>
                  <span className="brand-item">
                    <img src={icon3} alt="brand 3" />
                  </span>
                  <span className="brand-item">
                    <img src={icon1} alt="brand 1" />
                  </span>
                  {/* Duplicate items for seamless looping */}
                  <span className="brand-item">
                    <img src={icon1} alt="brand 1" />
                  </span>
                  <span className="brand-item">
                    <img src={icon2} alt="brand 2" />
                  </span>
                  <span className="brand-item">
                    <img src={icon3} alt="brand 3" />
                  </span>
                </div>
              </div>
            </div>

            <div className="welcome-text">
              Welcome to my portfolio where ordinary meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
