import React, { useState, useEffect, useRef } from "react";
import "./Testimonial.css";
import user3 from "../assets/images/user3.png";
import quote from "../assets/images/quote.svg";
import icon5 from "../assets/images/icon5.svg";
import icon6 from "../assets/images/icon6.svg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Floyd Miles",
      company: "eBay",
      quote:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      name: "Floyd Miles",
      company: "eBay",
      quote:
        "The design work exceeded all our expectations. The attention to detail and creative approach resulted in a product that perfectly represents our brand.",
    },
    {
      name: "Floyd Miles",
      company: "eBay",
      quote:
        "Working with this designer was a game-changer for our project. The UX expertise transformed our application into an intuitive platform.",
    },
    {
      name: "Floyd Miles",
      company: "eBay",
      quote:
        "Exceptional quality and professionalism. Delivered beyond what we anticipated and on schedule.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const testimonialRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    resetAutoRotate();
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    resetAutoRotate();
  };

  const resetAutoRotate = () => {
    setAutoRotate(false);
    setTimeout(() => setAutoRotate(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  return (
    <section className="testimonial-section section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>✺ What they say</h2>
        </div>

        <div className="testimonial-content" ref={testimonialRef}>
          <div className="client-info">
            <div className="client-profile">
              <div className="client-avatar">
                <img src={user3} alt="client" />
              </div>
              <div className="client-details">
                <div className="client-name">
                  {testimonials[currentSlide].name}
                </div>
                <div className="client-company">
                  {testimonials[currentSlide].company}
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-quote">
            <div className="quote-marks">
              <img src={quote} alt="quote" />
            </div>
            <div className="quote-text">{testimonials[currentSlide].quote}</div>
          </div>
        </div>

        <div className="testimonial-controls">
          <div className="control-btn prev-btn" onClick={prevSlide}>
            <img src={icon6} alt="previous" />
          </div>
          <div className="control-btn next-btn" onClick={nextSlide}>
            <img src={icon5} alt="next" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
