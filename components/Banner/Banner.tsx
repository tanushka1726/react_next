import React from "react";
import "./Banner.css"
const page = ({title,description}) => {
  return (
    <>
    <div className="about-us-head">
      <h1>{title}</h1>
      <p>{description}</p>
      
    </div>
    </>
    
  );
};
export default page;