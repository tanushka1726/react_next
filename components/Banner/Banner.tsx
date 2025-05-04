import React from "react";
<<<<<<< HEAD
import "./Banner.css"
const page = () => {
=======
import "./Banner.css";

type BannerProps = {
  title: string;
  description: string;
};

const Page = ({ title, description }: BannerProps) => {
>>>>>>> bd1054c9aa5547cb1315dc9cf01e8b73e282a43f
  return (
    <div className="about-us-head">
<<<<<<< HEAD
      <h1></h1>
      <p></p>
      
=======
      <h1>{title}</h1>
      <p>{description}</p>
>>>>>>> bd1054c9aa5547cb1315dc9cf01e8b73e282a43f
    </div>
  );
};

export default Page;
