import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer:
        "I use a variety of industry-standard tools including Figma for interface design and prototyping, Adobe Creative Suite for visual assets, Miro for collaborative whiteboarding, and Webflow for no-code development. For user research, I utilize tools like UserTesting and Hotjar to gather insights and validate designs with real users.",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer:
        "I measure success through both quantitative and qualitative metrics. Quantitatively, I track conversion rates, task completion rates, and time-on-task improvements. Qualitatively, I conduct user interviews and surveys to assess satisfaction and ease of use. I also monitor usability testing results and iterate based on the findings to continuously improve the experience.",
    },
  ];

  return (
    <section className="faq-section section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>✺ Frequently asked questions</h2>
        </div>

        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-toggle">
                {activeIndex === index ? " " : " "} {/* we can add + - */}
              </span>
            </h3>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
            <div className="faq-divider"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
