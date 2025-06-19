import React from "react";
import "./Works.css";
import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";

const Works = () => {
  const worksData = [
    {
      image: work1,
      title: "Analysis Application",
      description:
        "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["FIGMA", "UX"],
    },
    {
      image: work2,
      title: "Foriknox Application",
      description:
        "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["MOBILE", "WEB"],
    },
    {
      image: work3,
      title: "Zenocide Application",
      description:
        "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["APP", "WEB"],
    },
  ];

  return (
    <section className="works-section section">
      <div className="works-container">
        <div className="works-header">
          <div className="works-title">
            <h2>✺ Works</h2>
          </div>
          <a href="#" className="view-all">
            view all
          </a>
        </div>

        <div className="works-grid">
          {worksData.map((work, index) => (
            <div className="work-card" key={index}>
              <div className="work-image">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="work-right">
                <div className="work-content">
                  <div className="work-details">
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <div className="work-tags">
                      {work.tags.map((tag, i) => (
                        <span className="tag" key={i}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="case-study-btn">View Case Study</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
