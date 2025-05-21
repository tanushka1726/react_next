import React from "react";
import "./Blog.css";
type BlogProps = {
  title: string;
  img: string;
};

const BlogBaneer = ({ title, img }: BlogProps) => {
  return (
    <div className="blog_main">
      <div className="first-section r_container">
        <div className="left-side-discover">
          <div className="discover">Discover Inspiration</div>
          <h1>
            {title}
          </h1>
          <p>July 20,2023</p>
        </div>
        <div className="right-side-discover">
          <img src={`${img}`} alt="" />
        </div>
      </div>
      <div className="triangle-small"></div>
    </div>
  );
};

export default BlogBaneer;
