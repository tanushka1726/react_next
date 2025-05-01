import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"
import "./page.css"
import { IoMdArrowForward } from "react-icons/io";
const page = () => {
  return (
    <>
      <Header />
      <div className="first-section">
        <div className="first-section-left">
          <div className="first-section-explore">
          <p>Find your next great <br /> read at our online <br /> book store</p>
          <button type="button" className="btn">Explore Books<IoMdArrowForward /></button>
          </div>
        </div>
        <div className="first-section-right">
          <div className="psychology">
          <img src={"/psychology.jpg"} alt="psychology.jpg" width={300} height={400}  />
          </div>
          <div className="alchemist">
          <img src={"/alchemist.jpg"} alt="alchemist.jpg" width={300} height={400}  />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};
export default page;
