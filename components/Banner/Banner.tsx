import React from "react";
import "./Banner.css";

type BannerProps = {
  title: string;
  description: string;
};

const Page = ({ title, description }: BannerProps) => {
  return (
    <div className="about-us-head">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Page;
