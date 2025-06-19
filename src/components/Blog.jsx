import React from "react";
import "./Blog.css";
import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";

const Blog = () => {
  const blogPosts = [
    {
      image: work1,
      date: "Nov 6, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
    },
    {
      image: work2,
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application",
      tags: ["DESIGN", "PRINT"],
    },
    {
      image: work3,
      date: "Feb 18, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
    },
  ];

  return (
    <section className="blog-section section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-title">
            <h2>✺ Blog</h2>
          </div>
          <a href="#" className="view-all">
            view all
          </a>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <p className="post-date">{post.date}</p>
                <h3 className="post-title">{post.title}</h3>
                <div className="post-footer">
                  <div className="post-tags">
                    {post.tags.map((tag, i) => (
                      <span className="post-tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="read-btn">Read</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
