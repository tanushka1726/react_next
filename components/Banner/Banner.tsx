import React from "react";
import "./Banner.css";

type BannerProps = {
  title: string;
  description: string;
};

const Page = ({ title, description }: BannerProps) => {
  return (
    <div className="banner">
      <div className="r_container banner-content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    <div className="triangle-small"></div>
    </div>
  );
};

export default Page;
