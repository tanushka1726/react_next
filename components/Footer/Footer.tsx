import React from "react";
import"./Footer.css"
const page = () => {
  return (
    <>
    <div className="footer-section">
        <div className="left-footer-section">
            <span>Readster</span>
            <p>Start Your Empowering Reading</p>
           <p>Adventure</p> 
           <button type="button" className="btn btn-light">Contact us</button>
        </div>
        <div className="right-footer-section">
            <div className="basic-right-section">
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Review</p>
            <p>Blog</p>
            <p>Category</p>
            </div>
            <div className="privacy-right-section">
                <p>Style guide</p>
                <p>Licensing</p>
                <p>Changelog</p>
                <p>Error 404</p>
                <p>Password</p>
                <p>Privacy Policy</p>
                <p>Return Policy</p>
                <p>Coming Soon</p>
            </div>
            
        </div>
    </div>
    
    </>

  )
};
export default page;