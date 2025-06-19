import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      role: "Lead Product Designer",
      company: "Fortknox",
      duration: "Mar 2022 - Oct 2023",
    },
    {
      role: "Intern Designer",
      company: "OmniSafe",
      duration: "Mar 2022 - Oct 2023",
    },
    {
      role: "UI Designer",
      company: "Doradesign",
      duration: "Mar 2022 - Oct 2023",
    },
    {
      role: "Frontend Developer",
      company: "OpacityAuthor",
      duration: "Mar 2022 - Oct 2023",
    },
  ];

  return (
    <section className="experience-section section">
      <div className="experience-container">
        <div className="experience-header">
          <h2>✺ Experience</h2>
        </div>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="role-info">
                <span className="role-title">{exp.role}</span>
              </div>
              <div className="company-info">
                <span className="company-name">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
