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

          <h1>Find your next great <br /> read at our online <br /> book store</h1>
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

      <div className="second-section">
        <div className="community-left">
          <img src="community1.jpg" alt="community" width={330} height={350} />
          <h1>Introducing Our Bookstore and <br /> Community</h1>
          <p>Discover our bookstore and community, where stories unfold and connections flourish.</p>

        </div>
        <div className="community-right">
        <img src="community2.jpg" alt="community" width={600} height={700} />
        <p>Welcome to Book Store: Empowering Minds Through Reading! We believe in the transformative power of books and their ability to shape and inspire individuals. Our mission is to create a vibrant and inclusive community that celebrates the joy of reading and encourages personal growth.</p>
        <button type="button"className="btn">About us<IoMdArrowForward /></button>

        </div>
      </div>
      <div className="explore-category">
        <h1>Explore Categories</h1>
        <div className="explore">
          <div className="explore-card">
            <img src="http://127.0.0.1:5501/reader/cdn.prod.website-file…4729ea8883/64b667ebd3a2a264e26fd82c_biography.jpg" alt="" />
            <div className="biography">
              <h2>Biography</h2>
              <div className="shop-now">Shop now</div>
            </div>
          </div>
          <div className="explore-card">
            <img src="http://127.0.0.1:5501/reader/cdn.prod.website-file…8c5c4729ea8883/64b667ebcbb311f07e232944_novel.jpg" alt="" />
            <div className="novel">
            <h2>Biography</h2>
            <div className="shop-now">Shop now</div>
            </div>
          </div>
          <div className="explore-card">
            <img src="http://127.0.0.1:5501/reader/cdn.prod.website-file…4729ea8883/64b667ebb53f528e8fb001ac_self-help.jpg" alt="" />
            <div className="self-help">
            <h2>Biography</h2>
            <div className="shop-now">Shop now</div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
};
export default page;
